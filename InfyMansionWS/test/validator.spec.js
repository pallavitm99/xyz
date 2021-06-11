const Validator = require('../src/utilities/validator')

describe("validation ", function () {
    it("should validate the incoming emailId", function () {
        expect(Validator.validateEmail("group@gmail.com")).toBeTruthy();
    }),
    it("should validate the incoming emailId", function () {
        expect(Validator.validateEmail("GROUP@gmail.com")).toBeFalsy();
    }),
    it("should validate the incoming password", function () {
        expect(Validator.validatePassword("1910@ps")).toBeFalsy();
    }),
    it("should validate the incoming password", function () {
        expect(Validator.validatePassword("A2@23aa")).toBeTruthy();
    })
});
