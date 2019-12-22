const chai = require("chai");
const expect = chai.expect;
const should = chai.should();
const { isCpf } = require("../lib/validators");

// CPF created using 4devs.com.br

describe("CPF validator ", function() {
  describe("When using a valid value ", function() {
    it("Should send the value 78187265000 and receive true", function() {
      let result = isCpf("78187265000");

      result.should.equal(true);
    });

    it("Should send the value 60797806075 and receive true", function() {
      let result = isCpf("60797806075");

      result.should.equal(true);
    });

    it("Should send the value 76438962082 and receive true", function() {
      let result = isCpf("76438962082");

      result.should.equal(true);
    });

    it("Should send the value 06783780023 and receive true", function() {
      let result = isCpf(6783780023);

      result.should.equal(true);
    });

    it("Should send the value null and receive true", function() {
      let result = isCpf(null);

      result.should.equal(true);
    });

    it("Should send the value undefined and receive true", function() {
      let result = isCpf(undefined);

      result.should.equal(true);
    });
  });

  describe("When using a invalid value", function() {
    it("Should send the value 11111111111 and receive false", function() {
      let result = isCpf("11111111111");

      result.should.equal(false);
    });

    it("Should send the value 22222222222 and receive false", function() {
      let result = isCpf("22222222222");

      result.should.equal(false);
    });

    it("Should send the value 78187265009 and receive false", function() {
      let result = isCpf("78187265009");

      result.should.equal(false);
    });

    it("Should send the value '' and receive false", function() {
      let result = isCpf("");

      result.should.equal(false);
    });

    it("Should send the value NaN and receive false", function() {
      let result = isCpf(NaN);

      result.should.equal(false);
    });

    it("Should send the value 0 and receive false", function() {
      let result = isCpf(0);

      result.should.equal(false);
    });
  });
});
