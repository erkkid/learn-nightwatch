const config = require('../../nightwatch.conf.js');

module.exports = { // addapted from: https://git.io/vodU0
  '@tags': ['guineaPig'],
  'Guinea Pig Assert Title': function (browser) {
    browser
      .url('https://saucelabs.com/test/guinea-pig')
      .waitForElementVisible('body')
      .assert.title('I am a page title - Sauce Labs')
      .saveScreenshot(`${config.imgpath(browser)}a-screenshot-description.png`)
      .clearValue('#i_am_a_textbox', 'erki@gmail.com')
      .setValue('#i_am_a_textbox', 'hello')
      .saveScreenshot(`${config.imgpath(browser)}nightwatch-roolz.png`)
       .paus(1000)
      .end();
  },
};
