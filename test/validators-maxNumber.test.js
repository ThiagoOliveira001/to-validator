const chai = require("chai");
const should = chai.should();
const { maxNumber } = require("../lib/validators");

describe("maxNumber Validator", function() {
  describe("when using a valid value", function() {
    it("Should send the value 25 and receive true", function() {
      let result = maxNumber(25, 28);

      result.should.be.equal(true);
    });

    it("Should send the value 0 and receive true", function() {
      let result = maxNumber(0, 0);

      result.should.be.equal(true);
    });

    it("Should send the value null and receive true", function() {
      let result = maxNumber(null, 98);

      result.should.be.equal(true);
    });

    it("Should send the value undefined and receive true", function() {
      let result = maxNumber(undefined, 12);

      result.should.be.equal(true);
    });
  });

  describe("When using a invalid value", function() {
    it("Should send the value 27 and receive false", function() {
      let result = maxNumber(27, 26);

      result.should.be.equal(false);
    });

    it("Should send the value -6 and receive false", function() {
      let result = maxNumber(-6, -7);

      result.should.be.equal(false);
    });

    it("Should send the value NaN and receive false", function() {
      let result = maxNumber(NaN, 5);

      result.should.be.equal(false);
    });

    it("Should send the value 'egg' and receive false", function() {
      let result = maxNumber("egg", 2);

      result.should.be.equal(false);
    });
  });
});
