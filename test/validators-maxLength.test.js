const chai = require("chai");
const should = chai.should();
const { maxLength } = require("../lib/validators");

describe("maxLength Validator", function() {
  describe("When using a valid value", function() {
    it("Should send the value 'Linux' and receive true", function() {
      let result = maxLength("Linux", 5);

      result.should.be.equal(true);
    });

    it("Should send the value { a: 1, b: 2 } and receive true", function() {
      let result = maxLength({ a: 1, b: 2 }, 3);

      result.should.be.equal(true);
    });

    it("Should send the value [1,2,3] and receive true", function() {
      let result = maxLength([1, 2, 3], 3);

      result.should.be.equal(true);
    });

    it("Should send the value 12 and receive true", function() {
      let result = maxLength(12, 2);

      result.should.be.equal(true);
    });

    it("Should send the value null and receive true", function() {
      let result = maxLength(null, 2);

      result.should.be.equal(true);
    });

    it("Should send the value undefined and receive true", function() {
      let result = maxLength(undefined, 2);

      result.should.be.equal(true);
    });
  });

  describe("When using a invalid value", function() {
    it("Should send the value 'potato' and receive false", function() {
      let result = maxLength("potato", 5);

      result.should.be.equal(false);
    });

    it("Should send the value [1,2,3,4,5,6,'bacon'] and receive false", function() {
      let result = maxLength([1, 2, 3, 4, 5, 6, "bacon"], 6);

      result.should.be.equal(false);
    });

    it("Should send the value { j: 'a', i: 'b' } and receive false", function() {
      let result = maxLength({ j: "a", i: "b" }, 1);

      result.should.be.equal(false);
    });
  });
});
