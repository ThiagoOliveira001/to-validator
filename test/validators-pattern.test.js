const chai = require("chai");
const should = chai.should();
const { pattern } = require("../lib/validators");

describe("Pattern Validator", function() {
  describe("When using a valid value", function() {
    it("Should send 1236.6589 with regex ^\\d{4}[.]\\d{4}$ and get true", function() {
      let result = pattern("1236.6589", "^\\d{4}[.]\\d{4}$");

      result.should.to.be.equal(true);
    });

    it("Should send null with regex ^\\d+$ and get true", function() {
      let result = pattern(null, "^\\d+$");

      result.should.to.be.equal(true);
    });

    it("Should send undefined with regex ^\\d+$ and get true", function() {
      let result = pattern(undefined, "^\\d+$");

      result.should.to.be.equal(true);
    });
  });

  describe("When using a invalid value", function() {
    it("Should send 12345678 with regex ^\\d{4}[.]\\d{4}$ and get false", function() {
      let result = pattern(12345678, "^\\d{4}[.]\\d{4}$");

      result.should.to.be.equal(false);
    });

    it("Should send 1234.56789 with regex ^\\d{4}[.]\\d{4}$ and get false", function() {
      let result = pattern("1234.56789", "^\\d{4}[.]\\d{4}$");

      result.should.to.be.equal(false);
    });

    it("Should send NaN with regex ^\\d{4}[.]\\d{4}$ and get false", function() {
      let result = pattern(NaN, "^\\d{4}[.]\\d{4}$");

      result.should.to.be.equal(false);
    });

    it("Should send '' with regex ^\\d{4}[.]\\d{4}$ and get false", function() {
      let result = pattern("", "^\\d{4}[.]\\d{4}$");

      result.should.to.be.equal(false);
    });
  });
});
