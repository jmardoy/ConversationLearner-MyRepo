module.exports = {
    'Create a New Model': function (browser) {
        // Instanciate a Home page POM
        var homepage = browser.page.homepage();
        var uniqueid = Date.now() - 1527837000000;
        var newappbtn = '//div[text()="New Model"]';
        var appname = 'input[id*="TextField"]';
        
        // Open application
        homepage.navigate();

        // Create a new Model
        browser.waitForElementVisible('body', 1000)
            .maximizeWindow()
            .pause(2000)
            .click('button[data-testid="apps-list-button-create-new"]')
            .pause(2000)
            .url(function (response){
            // Waits for the modal to be visible        
            browser.waitForElementVisible('div[class="cl-modal_header"]', 4000)
            .setValue(appname, 'a-Wed-' + uniqueid )
            .setValue(appname,  browser.Keys.ENTER )
            });
        
        //Create a new entities
        browser
        .pause(4000)
        .url(function (response){

            // Click Entities Navigation tab
            browser.click('a[href$="/entities"]')
            .pause(6000)
            // Click new entity button
            .click('[data-testid="entities-button-create"]')
            
            // Enter name for entity
            .setValue('[data-testid="entity-creator-input-name"]', "username")
                    
            // Select multi-value
            .click('[data-testid="entity-creator-input-multivalue"]')
              
            // Select the submit button
            .click('[data-testid="entity-creator-button-save"]')
            console.log("Entity created...")
        });
        // Create an action
        browser
        .pause(4000)
        .url(function (response){
            // Click Entities Navigation tab
            browser.click('a[href$="actions"]')
            .pause(3000)
            .useXpath()
            .setValue('//*[data-testid="dropdown-action-type"]', browser.keys.TAB )
            .setValue('//*[data-testid="dropdown-action-type"]', "Hello World!")
            .useCss()
            // Click new entity button
            //.click('button[data-testid="actions-button-create"]')

            // Select the submit button
            .click('div[class="cl-modal-buttons_primary"]')
            .pause(3000)
            console.log("Action created...")
        });

            // Ensure new row is added to entities list with new entity name
            //.Assert('.ms-DetailsRow-cell').contains("username")
            browser.end();
        }
};

