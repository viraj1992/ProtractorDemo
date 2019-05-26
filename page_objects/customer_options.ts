import { ElementFinder, element, by } from "protractor";

export class CustomerOptions {

    addCustomer: ElementFinder;
    openAccount: ElementFinder;
    customer: ElementFinder;

    constructor(){
        this.addCustomer = element(by.xpath("//button[contains(.,'Add Customer')]"));
        this.openAccount = element(by.xpath("//button[contains(.,'Open Account')]"));
        this.customer = element(by.xpath("//button[contains(.,'Customers')]"));
    }
    
}