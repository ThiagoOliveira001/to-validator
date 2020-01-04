const chai = require("chai");
const should = chai.should();
const { minNumber } = require("../lib/validators");

describe("minNumber Validator", function() {
  describe("when using a valid value", function() {
    it("Should send the value 25 and receive true", function() {
      let result = minNumber(25, 23);

      result.should.be.equal(true);
    });

    it("Should send the value 0 and receive true", function() {
      let result = minNumber(0, 0);

      result.should.be.equal(true);
    });

    it("Should send the value null and receive true", function() {
      let result = minNumber(null, 98);

      result.should.be.equal(true);
    });

    it("Should send the value undefined and receive true", function() {
      let result = minNumber(undefined, 12);

      result.should.be.equal(true);
    });
  });

  describe("When using a invalid value", function() {
    it("Should send the value 27 and receive false", function() {
      let result = minNumber(27, 28);

      result.should.be.equal(false);
    });

    it("Should send the value -6 and receive false", function() {
      let result = minNumber(-6, 0);

      result.should.be.equal(false);
    });

    it("Should send the value NaN and receive false", function() {
      let result = minNumber(NaN, 5);

      result.should.be.equal(false);
    });

    it("Should send the value 'egg' and receive false", function() {
      let result = minNumber("egg", 2);

      result.should.be.equal(false);
    });
  });
});
