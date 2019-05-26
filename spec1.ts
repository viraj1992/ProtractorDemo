import { browser } from "protractor";
import { MainPage } from "./page_objects/main_page";
import { CustomerOptions } from "./page_objects/customer_options";

describe('XYZ Bank', () => {

    let mainpage = new MainPage();
    let customeroptions = new CustomerOptions();

    it('should open XYZ Bank Home Page', async () => {
        await browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
        expect(browser.getTitle()).toEqual('Protractor practice website - Banking App');
        await browser.sleep(5000);
    });

    it('should click on Bank Manager Login', async () => {
        await mainpage.bankManagerLogin.click();
        expect(customeroptions.addCustomer.getText()).toEqual('Add Customer');
        await browser.sleep(5000);
    });

});