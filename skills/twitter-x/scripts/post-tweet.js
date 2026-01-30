#!/usr/bin/env node

/**
 * Post to Twitter/X using Puppeteer + stored cookies
 * Usage: node post-tweet.js "Your tweet text"
 */

const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');

// Load cookies from env
const cookiesB64 = process.env.TWITTER_COOKIES;
const tweetText = process.argv[2];

if (!cookiesB64) {
  console.error('Error: TWITTER_COOKIES env var not set');
  process.exit(1);
}

if (!tweetText) {
  console.error('Error: Tweet text required');
  process.exit(1);
}

// Decode base64 cookies
let cookies;
try {
  const cookiesJson = Buffer.from(cookiesB64, 'base64').toString('utf-8');
  cookies = JSON.parse(cookiesJson);
  if (!Array.isArray(cookies)) {
    throw new Error('Cookies must be an array');
  }
} catch (err) {
  console.error('Error decoding cookies:', err.message);
  process.exit(1);
}

async function postTweet() {
  puppeteer.use(StealthPlugin());
  
  let browser;
  try {
    // Launch browser with stealth
    browser = await puppeteer.launch({
      headless: 'new',
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-gpu',
      ],
    });

    const page = await browser.newPage();

    // Set cookies
    await page.setCookie(...cookies);

    // Navigate to X
    console.log('Loading x.com...');
    await page.goto('https://x.com/compose/tweet', {
      waitUntil: 'networkidle2',
      timeout: 30000,
    });

    // Wait for compose box
    console.log('Waiting for compose box...');
    await page.waitForSelector('[data-testid="tweetTextarea"]', { timeout: 10000 });

    // Type tweet
    console.log(`Posting: "${tweetText}"`);
    const textarea = await page.$('[data-testid="tweetTextarea"]');
    if (!textarea) {
      throw new Error('Could not find tweet textarea');
    }

    // Focus and type
    await textarea.focus();
    await page.type('[data-testid="tweetTextarea"]', tweetText, { delay: 50 });

    // Wait a bit for content to register
    await page.waitForTimeout(500);

    // Find and click Post button
    const postButton = await page.$('[data-testid="tweetButton"]');
    if (!postButton) {
      throw new Error('Could not find Post button');
    }

    // Check if button is enabled
    const isDisabled = await postButton.evaluate(el => el.disabled);
    if (isDisabled) {
      throw new Error('Post button is disabled (may need longer text or invalid content)');
    }

    // Click post
    console.log('Clicking Post button...');
    await postButton.click();

    // Wait for success (navigate away or modal close)
    await Promise.race([
      page.waitForNavigation({ timeout: 5000 }).catch(() => null),
      page.waitForTimeout(3000),
    ]);

    console.log('✅ Tweet posted successfully');
    process.exit(0);

  } catch (error) {
    console.error('❌ Error posting tweet:', error.message);
    process.exit(1);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

// Run
postTweet();
