const chai = require("chai");
const should = chai.should();
const { required } = require("../lib/validators");

describe("Required Validator", function() {
  describe("When using a valid value", function() {
    it("Should send 0 and get true", function() {
      let result = required(0);

      result.should.to.be.equal(true);
    });

    it("Should send ' ' and get true", function() {
      let result = required(" ");

      result.should.to.be.equal(true);
    });
  });

  describe("When using a invalid value", function() {
    it("Should send null and get false", function() {
      let result = required(null);

      result.should.to.be.equal(false);
    });

    it("Should send undefined and get false", function() {
      let result = required(undefined);

      result.should.to.be.equal(false);
    });

    it("Should send NaN and get false", function() {
      let result = required(NaN);

      result.should.to.be.equal(false);
    });

    it("Should send '' and get false", function() {
      let result = required("");

      result.should.to.be.equal(false);
    });
  });
});
