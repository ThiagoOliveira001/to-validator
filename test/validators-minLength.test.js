const chai = require("chai");
const should = chai.should();
const { minLength } = require("../lib/validators");

describe("minLength Validator", function() {
  describe("When using a valid value", function() {
    it("Should send the value 'Linux' and receive true", function() {
      let result = minLength("Linux", 5);

      result.should.be.equal(true);
    });

    it("Should send the value { a: 1, b: 2 } and receive true", function() {
      let result = minLength({ a: 1, b: 2 }, 1);

      result.should.be.equal(true);
    });

    it("Should send the value [1,2,3] and receive true", function() {
      let result = minLength([1, 2, 3], 3);

      result.should.be.equal(true);
    });

    it("Should send the value 12 and receive true", function() {
      let result = minLength(12, 2);

      result.should.be.equal(true);
    });

    it("Should send the value null and receive true", function() {
      let result = minLength(null, 2);

      result.should.be.equal(true);
    });

    it("Should send the value undefined and receive true", function() {
      let result = minLength(undefined, 2);

      result.should.be.equal(true);
    });
  });

  describe("When using a invalid value", function() {
    it("Should send the value 'potato' and receive false", function() {
      let result = minLength("potato", 7);

      result.should.be.equal(false);
    });

    it("Should send the value [1,2,3,4,5,6,'bacon'] and receive false", function() {
      let result = minLength([1, 2, 3, 4, 5, 6, "bacon"], 8);

      result.should.be.equal(false);
    });

    it("Should send the value { j: 'a' } and receive false", function() {
      let result = minLength({ j: "a" }, 2);

      result.should.be.equal(false);
    });
  });
});
