import { ElementFinder, element, by } from "protractor";

export class AddCustomer {

    firstName: ElementFinder;
    lastName: ElementFinder;
    postCode: ElementFinder;
    addCustomerBtn: ElementFinder;

    constructor() {
        this.firstName = element(by.model('fName'));
        this.lastName = element(by.model('lName'));
        this.postCode = element(by.model('postCd'));
        this.addCustomerBtn = element(by.xpath("//button[@class='btn btn-default']"));
    }

    generateRandomName(name: string):string {
        return name + " " + Math.random().toString(36).substr(2, 5);
    }

    generateRandomNumber():number{
        return Math.floor(Math.random()*90000) + 10000;
    }

}