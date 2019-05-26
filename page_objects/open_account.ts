import { ElementFinder, element, by } from "protractor";

export class OpenAccount {
    customer: ElementFinder;
    currency: ElementFinder;
    process: ElementFinder;

    constructor() {
        this.customer = element(by.model('person.name'));
        this.currency = element(by.model('person.name'));
        this.process = element(by.model('person.name'));

    }

    


}