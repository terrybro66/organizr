const puppeteer = require("puppeteer");

async function getLeader() {
  const browser = await puppeteer.launch({
    headless: true,
  });
  console.log("Loading page...");
  const page = await browser.newPage();
  await page.goto("https://www.pgatour.com/leaderboard.html", {
    waitUntil: "networkidle2",
  });

  return new Promise((resolve, reject) => {
    page.on("response", async (response) => {
      if (response.url().includes("leaderboard.json")) {
        console.log("XHR response received");
        link = response.url(); // ========> link get if I console it
        browser.close();
        console.log("Link:", link);
        resolve(link);
      }
    });
  });
}

module.exports = { getLeader };
