const chai = require("chai");
const should = chai.should();
const { isCnpj } = require("../lib/validators");

// CNPJ created using 4devs.com.br

describe("CNPJ Validator", function() {
  describe("when using a valid value", function() {
    it("Should send the value 95849436000166 and receive true", function() {
      let result = isCnpj("95849436000166");

      result.should.equal(true);
    });

    it("Should send the value 74320554000102 and receive true", function() {
      let result = isCnpj("74320554000102");

      result.should.equal(true);
    });

    it("Should send the value 49272058000183 and receive true", function() {
      let result = isCnpj("49272058000183");

      result.should.equal(true);
    });

    it("Should send the value 07142588000167 and receive true", function() {
      let result = isCnpj(7142588000167);

      result.should.equal(true);
    });

    it("Should send the value null and receive true", function() {
      let result = isCnpj(null);

      result.should.equal(true);
    });

    it("Should send the value undefined and receive true", function() {
      let result = isCnpj(undefined);

      result.should.equal(true);
    });
  });
  describe("When using a invalid value", function() {
    it("Should send the value 11111111111111 and receive false", function() {
      let result = isCnpj("11111111111111");

      result.should.equal(false);
    });

    it("Should send the value 22222222222222 and receive false", function() {
      let result = isCnpj("22222222222222");

      result.should.equal(false);
    });

    it("Should send the value 32147953000174 and receive false", function() {
      let result = isCnpj("32147953000174");

      result.should.equal(false);
    });

    it("Should send the value '' and receive false", function() {
      let result = isCnpj("");

      result.should.equal(false);
    });

    it("Should send the value NaN and receive false", function() {
      let result = isCnpj(NaN);

      result.should.equal(false);
    });

    it("Should send the value 0 and receive false", function() {
      let result = isCnpj(0);

      result.should.equal(false);
    });
  });
});
