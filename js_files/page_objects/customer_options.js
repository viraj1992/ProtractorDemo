"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class CustomerOptions {
    constructor() {
        this.addCustomer = protractor_1.element(protractor_1.by.xpath("//button[contains(.,'Add Customer')]"));
        this.openAccount = protractor_1.element(protractor_1.by.xpath("//button[contains(.,'Open Account')]"));
        this.customer = protractor_1.element(protractor_1.by.xpath("//button[contains(.,'Customers')]"));
    }
}
exports.CustomerOptions = CustomerOptions;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXJfb3B0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2Vfb2JqZWN0cy9jdXN0b21lcl9vcHRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQXdEO0FBRXhELE1BQWEsZUFBZTtJQU14QjtRQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHNDQUFzQyxDQUFDLENBQUMsQ0FBQztRQUM3RSxJQUFJLENBQUMsV0FBVyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDLENBQUM7UUFDN0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsbUNBQW1DLENBQUMsQ0FBQyxDQUFDO0lBQzNFLENBQUM7Q0FJSjtBQWRELDBDQWNDIn0=