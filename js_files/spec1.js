"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const main_page_1 = require("./page_objects/main_page");
const customer_options_1 = require("./page_objects/customer_options");
const add_customer_1 = require("./page_objects/add_customer");
describe('XYZ Bank', () => {
    let mainpage = new main_page_1.MainPage();
    let customeroptions = new customer_options_1.CustomerOptions();
    let addcustomer = new add_customer_1.AddCustomer();
    let firstName = addcustomer.generateRandomName("First Name");
    let lastName = addcustomer.generateRandomName("Last Name");
    it('should open XYZ Bank Home Page', () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
        yield protractor_1.browser.manage().window().maximize();
        yield expect(protractor_1.browser.getTitle()).toEqual('Protractor practice website - Banking App');
        yield protractor_1.browser.sleep(2000);
    }));
    it('should click on Bank Manager Login', () => __awaiter(this, void 0, void 0, function* () {
        yield mainpage.bankManagerLogin.click();
        yield expect(customeroptions.addCustomer.getText()).toEqual('Add Customer');
        yield protractor_1.browser.sleep(2000);
    }));
    it('should click on Add Customer', () => __awaiter(this, void 0, void 0, function* () {
        yield customeroptions.addCustomer.click();
        yield protractor_1.browser.sleep(2000);
    }));
    it('should enter first name, last name, postcode and add new customer', () => __awaiter(this, void 0, void 0, function* () {
        yield addcustomer.firstName.sendKeys(firstName);
        yield addcustomer.lastName.sendKeys(lastName);
        yield addcustomer.postCode.sendKeys(addcustomer.generateRandomNumber());
        yield addcustomer.addCustomerBtn.click();
        yield protractor_1.browser.sleep(2000);
    }));
    it('should click on the alert', () => __awaiter(this, void 0, void 0, function* () {
        let alert = protractor_1.browser.switchTo().alert();
        yield alert.accept();
        yield protractor_1.browser.sleep(2000);
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlYzEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcGVjMS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkNBQXFDO0FBQ3JDLHdEQUFvRDtBQUNwRCxzRUFBa0U7QUFDbEUsOERBQTBEO0FBRTFELFFBQVEsQ0FBQyxVQUFVLEVBQUUsR0FBRyxFQUFFO0lBRXRCLElBQUksUUFBUSxHQUFHLElBQUksb0JBQVEsRUFBRSxDQUFDO0lBQzlCLElBQUksZUFBZSxHQUFHLElBQUksa0NBQWUsRUFBRSxDQUFDO0lBQzVDLElBQUksV0FBVyxHQUFHLElBQUksMEJBQVcsRUFBRSxDQUFDO0lBQ3BDLElBQUksU0FBUyxHQUFHLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM3RCxJQUFJLFFBQVEsR0FBRyxXQUFXLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLENBQUM7SUFHM0QsRUFBRSxDQUFDLGdDQUFnQyxFQUFFLEdBQVMsRUFBRTtRQUM1QyxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLG9FQUFvRSxDQUFDLENBQUM7UUFDeEYsTUFBTSxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzNDLE1BQU0sTUFBTSxDQUFDLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsMkNBQTJDLENBQUMsQ0FBQztRQUN0RixNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsb0NBQW9DLEVBQUUsR0FBUyxFQUFFO1FBQ2hELE1BQU0sUUFBUSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3hDLE1BQU0sTUFBTSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDNUUsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUMsRUFBRSxDQUFDLDhCQUE4QixFQUFFLEdBQVMsRUFBRTtRQUM5QyxNQUFNLGVBQWUsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDMUMsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUMsRUFBRSxDQUFDLG1FQUFtRSxFQUFFLEdBQVMsRUFBRTtRQUNuRixNQUFNLFdBQVcsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2hELE1BQU0sV0FBVyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDOUMsTUFBTSxXQUFXLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxDQUFDO1FBQ3hFLE1BQU0sV0FBVyxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN6QyxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFQyxFQUFFLENBQUMsMkJBQTJCLEVBQUUsR0FBUyxFQUFFO1FBQzNDLElBQUksS0FBSyxHQUFHLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdkMsTUFBTSxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDckIsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBR1AsQ0FBQyxDQUFDLENBQUMifQ==