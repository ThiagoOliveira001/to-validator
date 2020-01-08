class Scope {
  constructor(schema, config) {
    this._config = config || { lang: "portuguese", statusCode: 400 };
    this._validators = require("./validators");
    this._messages = require("./messages")[this._config.lang];
    this._schema = schema;
    this._errors = [];
    this._error = {};
  }

  validate(content) {
    if (typeof content !== "object")
      throw new Error("Validate method accepts only objects");

    Object.keys(content).map(key => {
      if (!this._schema[key]) return;

      this._valid(this._schema[key], content[key], key);
    });

    if (!this._errors.length) return 0;

    return {
      messages: this._errors,
      statusCode: this._config.statusCode,
      error: this._error
    };
  }

  _valid(schema, value, field) {
    Object.keys(schema).map(key => {
      if (key === "rules") return this._rules(schema[key], value, field);

      if (!this._validators[key]) throw new Error(`${key} not exists`);

      if (schema[key] !== false && !this._validators[key](value, schema[key]))
        this._errors.push(this._errorMsg(key, field, schema[key]));
    });
  }

  _rules(schema, value, field) {
    if (!value || !value.length) return;

    if (Array.isArray(value)) {
      for (let i = 0; i < value.length; i++) {
        Object.keys(schema).map(key => {
          if (key === "rules")
            return this._rules(schema[key], value[i], `${field}[${i}]`);

          if (!this._validators[key]) throw new Error(`${key} not exists`);

          if (
            schema[key] !== false &&
            !this._validators[key](value, schema[key])
          )
            this._errors.push(
              this._errorMsg(key, `${field}[${i}]`, schema[key])
            );
        });
      }
    } else {
      Object.keys(value).map(key => {
        if (!schema[key]) return;

        this._valid(schema[key], value[key], `${field}.${key}`);
      });
    }
  }

  _errorMsg(validator, field, value) {
    this._error[validator] = true;

    return this._messages[validator]
      .replace(/@field/g, field)
      .replace(/@value/g, value);
  }
}

module.exports = Scope;
