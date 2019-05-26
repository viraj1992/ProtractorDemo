"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class AddCustomer {
    constructor() {
        this.firstName = protractor_1.element(protractor_1.by.model('fName'));
        this.lastName = protractor_1.element(protractor_1.by.model('lName'));
        this.postCode = protractor_1.element(protractor_1.by.model('postCd'));
        this.addCustomerBtn = protractor_1.element(protractor_1.by.xpath("//button[@class='btn btn-default']"));
    }
    generateRandomName(name) {
        return name + " " + Math.random().toString(36).substr(2, 5);
    }
    generateRandomNumber() {
        return Math.floor(Math.random() * 90000) + 10000;
    }
}
exports.AddCustomer = AddCustomer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkX2N1c3RvbWVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZV9vYmplY3RzL2FkZF9jdXN0b21lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUF3RDtBQUV4RCxNQUFhLFdBQVc7SUFPcEI7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxRQUFRLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsY0FBYyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDLENBQUM7SUFDbEYsQ0FBQztJQUVELGtCQUFrQixDQUFDLElBQVk7UUFDM0IsT0FBTyxJQUFJLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRUQsb0JBQW9CO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDO0lBQ25ELENBQUM7Q0FFSjtBQXRCRCxrQ0FzQkMifQ==