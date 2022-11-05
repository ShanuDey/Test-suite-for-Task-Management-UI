const { config } = require("../wdio.shared.conf");

exports.config = {
  ...config,
  // Level of logging verbosity: trace | debug | info | warn | error | silent
  logLevel: "error",
  capabilities: [
    {
      // maxInstances can get overwritten per capability. So if you have an in-house Selenium
      // grid with only 5 firefox instances available you can make sure that not more than
      // 5 instances get started at a time.
      maxInstances: 5,
      //
      browserName: "chrome",
      "goog:chromeOptions": {
        args: ["-headless", "window-size=1920,1080"],
      },
      acceptInsecureCerts: true,
      // If outputDir is provided WebdriverIO can capture driver session logs
      // it is possible to configure which logTypes to include/exclude.
      // excludeDriverLogs: ['*'], // pass '*' to exclude all driver session logs
      // excludeDriverLogs: ['bugreport', 'server'],
    },
  ],
  services: [
    ['chromedriver', {
        chromedriverCustomPath: `${process.env.CHROMEWEBDRIVER}/chromedriver` || "", // chromedriver for github action ubuntu-latest runner
    }]
  ],
};
