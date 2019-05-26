"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class OpenAccount {
    constructor() {
        this.customer = protractor_1.element(protractor_1.by.model('person.name'));
        this.currency = protractor_1.element(protractor_1.by.model('person.name'));
        this.process = protractor_1.element(protractor_1.by.model('person.name'));
    }
}
exports.OpenAccount = OpenAccount;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3Blbl9hY2NvdW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZV9vYmplY3RzL29wZW5fYWNjb3VudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUF3RDtBQUV4RCxNQUFhLFdBQVc7SUFLcEI7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxRQUFRLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLE9BQU8sR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUVwRCxDQUFDO0NBS0o7QUFmRCxrQ0FlQyJ9