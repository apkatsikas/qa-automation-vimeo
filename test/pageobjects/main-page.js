const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class MainPage extends Page {
    /**
     * define selectors using getter methods
     */
    get dropButton () {
        return $('#drop-button');
    }

    get dropdown_option(){
        return $('=click to reveal form')
    }
}

module.exports = new MainPage();
