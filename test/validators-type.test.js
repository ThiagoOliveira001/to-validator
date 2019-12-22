const chai = require("chai");
const should = chai.should();
const { type } = require("../lib/validators");

describe("Type Validator", function() {
  describe("When using a valid value", function() {
    it("Should send 1 with type Number and get true", function() {
      let result = type(1, Number);

      result.should.to.be.equal(true);
    });

    it("Should send 'a' with type String and get true", function() {
      let result = type("a", String);

      result.should.to.be.equal(true);
    });

    it("Should send true with type Boolean and get true", function() {
      let result = type(true, Boolean);

      result.should.to.be.equal(true);
    });

    it("Should send false with type Boolean and get true", function() {
      let result = type(false, Boolean);

      result.should.to.be.equal(true);
    });

    it("Should send [1,2,3] with type Array and get true", function() {
      let result = type([1, 2, 3], Array);

      result.should.to.be.equal(true);
    });

    it("Should send { a: 1 } with type Object and get true", function() {
      let result = type({ a: 1 }, Object);

      result.should.to.be.equal(true);
    });

    it("Should send null with type String and get true", function() {
      let result = type(null, String);

      result.should.to.be.equal(true);
    });

    it("Should send undefined with type String and get true", function() {
      let result = type(undefined, String);

      result.should.to.be.equal(true);
    });
  });

  describe("When using a invalid value", function() {
    it("Should send 1 with type String and get false", function() {
      let result = type(1, String);

      result.should.to.be.equal(false);
    });

    it("Should send '1' with type Number and get false", function() {
      let result = type("1", Number);

      result.should.to.be.equal(false);
    });

    it("Should send true with type Number and get false", function() {
      let result = type(true, Number);

      result.should.to.be.equal(false);
    });

    it("Should send false with type String and get false", function() {
      let result = type(false, String);

      result.should.to.be.equal(false);
    });

    it("Should send [1,2,3] with type Object and get false", function() {
      let result = type([1, 2, 3], Object);

      result.should.to.be.equal(false);
    });

    it("Should send { a: 1 } with type Array and get false", function() {
      let result = type({ a: 1 }, Array);

      result.should.to.be.equal(false);
    });

    it("Should send '' with type Boolean and get false", function() {
      let result = type("", Boolean);

      result.should.to.be.equal(false);
    });
  });
});
