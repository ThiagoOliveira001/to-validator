class Scope {
  constructor(schema, config) {
    this.config = config || { lang: "portuguese", statusCode: 400 };
    this._validators = require("./validators");
    this._messages = require("./messages")[this.config.lang];
    this.schema = schema;
  }

  validate(content) {}
}

module.exports = Scope;
