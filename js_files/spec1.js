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
describe('XYZ Bank', () => {
    let mainpage = new main_page_1.MainPage();
    let customeroptions = new customer_options_1.CustomerOptions();
    it('should click on Bank Manager Login', () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
        expect(protractor_1.browser.getTitle()).toEqual('Protractor practice website - Banking App');
        yield protractor_1.browser.sleep(5000);
        yield mainpage.bankManagerLogin.click();
        expect(customeroptions.addCustomer.getText()).toEqual('Add Customer');
        yield protractor_1.browser.sleep(5000);
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlYzEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcGVjMS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkNBQWdEO0FBQ2hELHdEQUFrRDtBQUNsRCxzRUFBZ0U7QUFFaEUsUUFBUSxDQUFDLFVBQVUsRUFBRSxHQUFFLEVBQUU7SUFDckIsSUFBSSxRQUFRLEdBQUcsSUFBSSxvQkFBUSxFQUFFLENBQUM7SUFDOUIsSUFBSSxlQUFlLEdBQUcsSUFBSSxrQ0FBZSxFQUFFLENBQUM7SUFDNUMsRUFBRSxDQUFDLG9DQUFvQyxFQUFFLEdBQU8sRUFBRTtRQUNsRCxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLG9FQUFvRSxDQUFDLENBQUM7UUFDeEYsTUFBTSxDQUFDLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsMkNBQTJDLENBQUMsQ0FBQztRQUNoRixNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLE1BQU0sUUFBUSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3hDLE1BQU0sQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3RFLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIn0=