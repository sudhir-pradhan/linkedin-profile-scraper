require("dotenv").config();

const IN_URL1 = "https://www.linkedin.com/in/jvandenaardweg/";
const IN_URL2 = "https://www.linkedin.com/in/jeffiel/";

(async () => {
  const { LinkedInProfileScraper } = require("../index");

  const scraper = new LinkedInProfileScraper({
    sessionCookieValue: `${process.env.LINKEDIN_SESSION_COOKIE_VALUE}`,
    keepAlive: false,
    headless: !false,
    timeout: 20 * 1000,
  });

  // Prepare the scraper
  // Loading it in memory
  await scraper.setup();

  const result = await scraper.run(IN_URL1);

  // When keepAlive: true, you can manually close the session using the method below.
  // This will free up your system's memory. Otherwise Puppeteer will sit idle in the background consuming memory.
  // await scraper.close()

  console.log("result: ", result);
  console.log("scrape done!");
})();
