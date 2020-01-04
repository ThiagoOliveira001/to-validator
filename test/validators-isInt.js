const chai = require("chai");
const should = chai.should();
const { isInt } = require("../lib/validators");

module.exports = {};

describe("isInt Validator", function() {
  describe("When using a valid value", function() {
    it("Should send the value 1 and receive true ", function() {
      let result = isInt(1);

      result.should.be.equal(true);
    });

    it("Should send the value null and receive true", function() {
      let result = isInt(null);

      result.should.be.equal(true);
    });

    it("Should send the value undefined and receive true", function() {
      let result = isInt(undefined);

      result.should.be.equal(true);
    });

    it("Should send the value 1908 and receive true", function() {
      let result = isInt(1908);

      result.should.be.equal(true);
    });
  });

  describe("When using a invalid value", function() {
    it("Should send the value 12.36 and receive false", function() {
      let result = isInt(12.36);

      result.should.be.equal(false);
    });

    it("Should send the value NaN and receive false", function() {
      let result = isInt(NaN);

      result.should.be.equal(false);
    });
  });
});
