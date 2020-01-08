const chai = require("chai");
const should = chai.should();
const Scope = require("../lib/scope");

describe("Scope test", function() {
  describe("When using a valid value", function() {
    it("Should send the value { breed: 'Pug', age: 3 } and receive 0", function() {
      let dog = {
        breed: "Pug",
        age: 3
      };
      const schema = {
        breed: {
          required: true,
          type: String,
          minLength: 1
        },
        age: {
          required: true,
          type: Number,
          isInt: true,
          minNumber: 0
        },
        song: {
          required: false,
          type: String,
          minLength: 1,
          maxLength: 30
        }
      };

      const Validator = new Scope(schema);

      let result = Validator.validate(dog);

      result.should.be.equal(0);
    });
  });

  describe("When using a invalid value", function() {
    it("Should send the value { breed: 'Pug', age: 3, song: 'auau' } and receive object", function() {
      let dog = {
        breed: "Pug",
        age: 3.5,
        song: "auau"
      };
      const schema = {
        breed: {
          required: true,
          type: String,
          minLength: 1
        },
        age: {
          required: true,
          type: Number,
          isInt: true,
          minNumber: 0
        },
        song: {
          required: false,
          type: String,
          minLength: 1,
          maxLength: 30
        }
      };

      const Validator = new Scope(schema);

      let result = Validator.validate(dog);
      let error = {
        isInt: true
      };

      result.should.to.be.an("object").to.have.property("messages");
      result.should.to.be.an("object").to.have.deep.property("statusCode", 400);
      result.should.to.be.an("object").to.have.deep.property("error", error);
    });
  });
});
