import { browser } from "protractor";
import { MainPage } from "./page_objects/main_page";
import { CustomerOptions } from "./page_objects/customer_options";
import { AddCustomer } from "./page_objects/add_customer";

describe('XYZ Bank', () => {

    let mainpage = new MainPage();
    let customeroptions = new CustomerOptions();
    let addcustomer = new AddCustomer();
    let firstName = addcustomer.generateRandomName("First Name");
    let lastName = addcustomer.generateRandomName("Last Name");
    

    it('should open XYZ Bank Home Page', async () => {
        await browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
        await browser.manage().window().maximize();
        await expect(browser.getTitle()).toEqual('Protractor practice website - Banking App');
        await browser.sleep(2000);
    });

    it('should click on Bank Manager Login', async () => {
        await mainpage.bankManagerLogin.click();
        await expect(customeroptions.addCustomer.getText()).toEqual('Add Customer');
        await browser.sleep(2000);
    });

        it('should click on Add Customer', async () => {
        await customeroptions.addCustomer.click();
        await browser.sleep(2000);
    });

        it('should enter first name, last name, postcode and add new customer', async () => {
        await addcustomer.firstName.sendKeys(firstName);
        await addcustomer.lastName.sendKeys(lastName);
        await addcustomer.postCode.sendKeys(addcustomer.generateRandomNumber());
        await addcustomer.addCustomerBtn.click();
        await browser.sleep(2000);
    });

        it('should click on the alert', async () => {
        let alert = browser.switchTo().alert();
        await alert.accept();
        await browser.sleep(2000);
    });
    

});