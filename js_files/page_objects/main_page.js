"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class MainPage {
    constructor() {
        this.customerLogin = protractor_1.element(protractor_1.by.xpath("//button[.='Customer Login']"));
        this.bankManagerLogin = protractor_1.element(protractor_1.by.xpath("//button[.='Bank Manager Login']"));
    }
}
exports.MainPage = MainPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbl9wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZV9vYmplY3RzL21haW5fcGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUF3RDtBQUV4RCxNQUFhLFFBQVE7SUFLakI7UUFDSSxJQUFJLENBQUMsYUFBYSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDLENBQUM7UUFDdkUsSUFBSSxDQUFDLGdCQUFnQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDLENBQUM7SUFDbEYsQ0FBQztDQUVKO0FBVkQsNEJBVUMifQ==