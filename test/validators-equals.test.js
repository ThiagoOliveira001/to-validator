const chai = require("chai");
const should = chai.should();
const { equals } = require("../lib/validators");

describe("Equals Validator", function() {
  describe("When using a valid value", function() {
    it("Should send the value 1 and receive true", function() {
      let result = equals(1, 1);

      result.should.be.equal(true);
    });

    it("Should send the value 3.98 and receive true", function() {
      let result = equals(3.98, [3.98, "a", false]);

      result.should.be.equal(true);
    });

    it("Should send the value 'a' and receive true", function() {
      let result = equals("a", [3.98, "a", false]);

      result.should.be.equal(true);
    });

    it("Should send the value false and receive true", function() {
      let result = equals(false, [3.98, "a", false]);

      result.should.be.equal(true);
    });

    it("Should send the value null and receive true", function() {
      let result = equals(null, 23);

      result.should.be.equal(true);
    });

    it("Should send the value undefined and receive true", function() {
      let result = equals(undefined, [1, 2, 3]);

      result.should.be.equal(true);
    });
  });

  describe("whenu using a invalid value", function() {
    it("Should send the value 23 and receive false", function() {
      let result = equals(23, 56);

      result.should.be.equal(false);
    });

    it("Should send the value 2 and receive false", function() {
      let result = equals(2, [1, 3, 5, 9, 8, 7]);

      result.should.be.equal(false);
    });
  });
});
