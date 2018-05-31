module.exports = {
    'Create a New App': function (browser) {
        browser
            .url('http://localhost:5050/home')
            .waitForElementVisible('body', 1000)
            .assert.title('Conversation Learner')
            .assert.visible('[id=id__1]')
            .moveToElement('[id=id__1]', 3, 3)
            .pause(1000)
            .mouseButtonClick(0)
            .pause(2000)
            .waitForElementVisible('[id=TextField64]', 2000)
            .moveToElement('[id=TextField64]', 2, 2)
            .mouseButtonClick(0)
            .setValue('[id=TextField64]', 'My-Auto-Bot2')
            .setValue('[id=TextField64]',  browser.Keys.ENTER)
            .pause(2000)
            .waitForElementVisible('[id=id__69]', 1000)
            .moveToElement('[id=id__69]', 5, 5)
            .mouseButtonClick(0)
            .pause(4000)
            .end()
    }
};  //*[@id="root"]/div/div/div[3]/div/div[1]/button[1]

