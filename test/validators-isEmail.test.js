const chai = require("chai");
const should = chai.should();
const { isEmail } = require("../lib/validators");

describe("Email validator", function() {
  describe("When using a valid value", function() {
    it("Should send the value email@example.com and receive true", function() {
      let result = isEmail("email@example.com");

      result.should.be.equal(true);
    });

    it("Should send the value email@subdomain.example.com and receive true", function() {
      let result = isEmail("email@subdomain.example.com");

      result.should.be.equal(true);
    });

    it("Should send the value firstname+lastname@example.com and receive true", function() {
      let result = isEmail("firstname+lastname@example.com");

      result.should.be.equal(true);
    });

    it("Should send the value email@123.123.123.123 and receive true", function() {
      let result = isEmail("email@123.123.123.123");

      result.should.be.equal(true);
    });

    it("Should send the value firstname.lastname@example.com and receive true", function() {
      let result = isEmail("firstname.lastname@example.com");

      result.should.be.equal(true);
    });

    it("Should send the value _______@example.com and receive true", function() {
      let result = isEmail("_______@example.com");

      result.should.be.equal(true);
    });
  });
  describe("When using a invalid value", function() {
    it("Should send the value plainaddress and receive false", function() {
      let result = isEmail("plainaddress");

      result.should.be.equal(false);
    });

    it("Should send the value #@%^%#$@#$@#.com and receive false", function() {
      let result = isEmail("#@%^%#$@#$@#.com");

      result.should.be.equal(false);
    });

    it("Should send the value @example.com and receive false", function() {
      let result = isEmail("@example.com");

      result.should.be.equal(false);
    });

    it("Should send the value plainaddress and receive false", function() {
      let result = isEmail("plainaddress");

      result.should.be.equal(false);
    });

    it("Should send the value Joe Smith <email@example.com> and receive false", function() {
      let result = isEmail("Joe Smith <email@example.com>");

      result.should.be.equal(false);
    });

    it("Should send the value email.example.com and receive false", function() {
      let result = isEmail("email.example.com");

      result.should.be.equal(false);
    });

    it("Should send the value email@example@example.com and receive false", function() {
      let result = isEmail("email@example@example.com");

      result.should.be.equal(false);
    });

    it("Should send the value email@example..com and receive false", function() {
      let result = isEmail("email@example..com");

      result.should.be.equal(false);
    });

    it("Should send the value あいうえお@example.com and receive false", function() {
      let result = isEmail("あいうえお@example.com");

      result.should.be.equal(false);
    });

    it("Should send the value plainaddress and receive false", function() {
      let result = isEmail("plainaddress");

      result.should.be.equal(false);
    });

    it("Should send the value email@example.com (Joe Smith) and receive false", function() {
      let result = isEmail("email@example.com (Joe Smith)");

      result.should.be.equal(false);
    });
  });
});
