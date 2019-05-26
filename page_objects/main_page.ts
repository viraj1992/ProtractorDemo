import { ElementFinder, element, by } from "protractor";

export class MainPage {

    customerLogin: ElementFinder;
    bankManagerLogin: ElementFinder;

    constructor() {
        this.customerLogin = element(by.xpath("//button[.='Customer Login']"));
        this.bankManagerLogin = element(by.xpath("//button[.='Bank Manager Login']"));
    }

}