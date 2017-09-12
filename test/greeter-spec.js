"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai = require("chai");
var greeter_1 = require("../src/greeter");
var expect = chai.expect;
describe("Greeter", function () {
    it("should greet with message", function () {
        var greeter = new greeter_1.Greeter("friend");
        expect(greeter.greet()).to.equal("Bonjour, friend!");
    });
});
