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
        yield addcustomer.firstName.sendKeys(addcustomer.generateRandomName("First Name"));
        yield addcustomer.lastName.sendKeys(addcustomer.generateRandomName("Last Name"));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlYzEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcGVjMS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkNBQXFDO0FBQ3JDLHdEQUFvRDtBQUNwRCxzRUFBa0U7QUFDbEUsOERBQTBEO0FBRTFELFFBQVEsQ0FBQyxVQUFVLEVBQUUsR0FBRyxFQUFFO0lBRXRCLElBQUksUUFBUSxHQUFHLElBQUksb0JBQVEsRUFBRSxDQUFDO0lBQzlCLElBQUksZUFBZSxHQUFHLElBQUksa0NBQWUsRUFBRSxDQUFDO0lBQzVDLElBQUksV0FBVyxHQUFHLElBQUksMEJBQVcsRUFBRSxDQUFDO0lBR3BDLEVBQUUsQ0FBQyxnQ0FBZ0MsRUFBRSxHQUFTLEVBQUU7UUFDNUMsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxvRUFBb0UsQ0FBQyxDQUFDO1FBQ3hGLE1BQU0sb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUMzQyxNQUFNLE1BQU0sQ0FBQyxvQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7UUFDdEYsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLG9DQUFvQyxFQUFFLEdBQVMsRUFBRTtRQUNoRCxNQUFNLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN4QyxNQUFNLE1BQU0sQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzVFLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVDLEVBQUUsQ0FBQyw4QkFBOEIsRUFBRSxHQUFTLEVBQUU7UUFDOUMsTUFBTSxlQUFlLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzFDLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVDLEVBQUUsQ0FBQyxtRUFBbUUsRUFBRSxHQUFTLEVBQUU7UUFDbkYsTUFBTSxXQUFXLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztRQUNuRixNQUFNLFdBQVcsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ2pGLE1BQU0sV0FBVyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLG9CQUFvQixFQUFFLENBQUMsQ0FBQztRQUN4RSxNQUFNLFdBQVcsQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDekMsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUMsRUFBRSxDQUFDLDJCQUEyQixFQUFFLEdBQVMsRUFBRTtRQUMzQyxJQUFJLEtBQUssR0FBRyxvQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3ZDLE1BQU0sS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3JCLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUdQLENBQUMsQ0FBQyxDQUFDIn0=