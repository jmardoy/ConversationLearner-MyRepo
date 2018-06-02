module.exports = {
    'Create a New App': function (browser) {
        // Instanciate a Home page POM
        var cl = browser.page.homepage();

        // Open application
        cl.navigate();

        var newappbtn = '//div[text()="New App"]';
        browser.waitForElementVisible('body', 1000)
            .maximizeWindow()
            .useXpath()
            .waitForElementVisible(newappbtn, 3000, false)
            .click(newappbtn)
            .useCss()
            .pause(2000);

        var n = Date.now() - 1527837000000;
        cl.waitForElementVisible('@appname', 4000)
            .setValue('@appname', 'My-AutoBot-' + n )
            .setValue('@appname', browser.Keys.ENTER)

        browser.pause(4000)
            .end();
    }
};

