module.exports = {
    url: 'http://localhost:5050/home',
    elements: {
        newapp: {
            selector: '//div[text()="New App"]',
            locateStrategy: 'xpath'
        },
        appname: {
            selector: 'input[id*="TextField"]'
        },
        create: {
            selector: 'div.cl-modal-buttons_primary:nth-child(1)'   
        },
        submit: {
            selector: '//div[text()="Create"]',
            locateStrategy: 'xpath'
        }
    }
}