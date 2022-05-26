const MainPage = require('../pageobjects/main-page');

describe('My test application', () => {
    it('should do the following', async () => {
        await MainPage.open();

        await MainPage.dropButton.click();

        await MainPage.dropdown_option.click();

        await MainPage.email_address.waitForDisplayed({timeout: 30000});
        await MainPage.email_address.setValue('test@email.com');

        await MainPage.password.waitForDisplayed({timeout: 30000});
        await MainPage.password.setValue('testpassword');

        await MainPage.check_me_out.waitForDisplayed({timeout: 30000});
        await MainPage.check_me_out.click();

        await MainPage.submit_btn.waitForDisplayed({timeout: 30000});
        await MainPage.submit_btn.click();

        await MainPage.delayed_text.waitForDisplayed({timeout: 30000});
        await expect(MainPage.delayed_text).toHaveText('Took me a bit but here I am!');

        await expect(MainPage.desired_text).toHaveText('here is the desired text');

    });
});
