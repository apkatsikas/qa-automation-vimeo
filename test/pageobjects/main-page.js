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

    /**Email address field */
    get email_address(){
        return $('#input-email')
    }

    /**Password field */
    get password(){
        return $('#password')
    }

    /**check me out */
    get check_me_out(){
        return $('#check')
    }

    /**submit button */
    get submit_btn(){
        return $('#submit')
    }

    /**delayed text */
    get delayed_text(){
        return $('div.delayedElem')
    }

    /**desired text */
    get desired_text(){
        return $('div[id^="base-"]')
    }

}

module.exports = new MainPage();
