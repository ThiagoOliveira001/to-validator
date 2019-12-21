function isEmail(value) {
  if (!value || value.constructor !== String) return false;

  return /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
    value
  );
}

function isCpf(value) {
  if (!value) return false;

  let digits = value
    .toString()
    .padStart(11, "0")
    .split("");

  if (digits.length != 11) return false;
  if (!digits.filter(d => d != digits[0]).length) return false;

  let acm = 0;
  let mod;

  for (let i = 0; i < 9; i++) {
    acm += digits[i] * (10 - i);
  }
  mod = (acm * 10) % 11 == 10 ? 0 : (acm * 10) % 11;

  if (mod != digits[digits.length - 2]) return false;

  acm = 0;
  for (let i = 0; i < 10; i++) {
    acm += digits[i] * (11 - i);
  }
  mod = (acm * 10) % 11 == 10 ? 0 : (acm * 10) % 11;

  if (mod != digits[digits.length - 1]) return false;

  return true;
}

function isCnpj() {
  if (!value) return false;

  let digits = value
    .toString()
    .padStart(14, "0")
    .split("");

  if (digits.length != 14) return false;
  if (!digits.filter(d => d != digits[0]).length) return false;

  let acm = 0;
  let dv;
  for (let i = 0, j = -4; i < 12; i++, j++) {
    acm += 5 - i < 2 ? (9 - j) * digits[i] : (5 - i) * digits[i];
  }
  dv = acm % 11 == 0 || acm % 11 == 1 ? 0 : 11 - (acm % 11);

  if (dv != digits[digits.length - 2]) return false;

  acm = 0;
  for (let i = 0, j = -5; i < 13; i++, j++) {
    acm += 6 - i < 2 ? (9 - j) * digits[i] : (6 - i) * digits[i];
  }
  dv = acm % 11 == 0 || acm % 11 == 1 ? 0 : 11 - (acm % 11);

  if (dv != digits[digits.length - 1]) return false;

  return true;
}

function checkType(value, type) {
  if (value != 0 && !value) return true;

  return value.constructor === type;
}

function minLength(value, length) {
  if (!value) return true;

  if (Array.isArray(value)) return value.length >= length;

  if (typeof value === "object") return Object.keys(value).length >= length;

  return value.toString().length >= length;
}

function maxLength(value, length) {
  if (!value) return true;

  if (Array.isArray(value)) return value.length <= length;

  if (typeof value === "object") return Object.keys(value).length <= length;

  return value.toString().length <= length;
}

function checkPattern(value, regex) {
  if (value != 0 && !value) return true;

  let str = value.toString();

  return new RegExp(regex).test(str);
}

function minNumber(value, min) {
  if (value != 0 && !value) return true;

  if (isNaN(value)) return false;

  return value >= min;
}

function maxNumber(value, max) {
  if (value != 0 && !value) return true;

  if (isNaN(value)) return false;

  return value <= max;
}

function isInt() {
  if (value != 0 && !value) return true;

  if (isNaN(value)) return false;

  return /^\d+$/.test(value.toString());
}

function equals(value, equal) {
  if (value != 0 && !value) return true;

  if (Array.isArray(equal)) return equal.filter(v => v == value).length > 0;

  return value == equal;
}

function required(value) {
  if (value != 0 && !value) return false;

  return true;
}

module.exports = {
  isEmail,
  isCpf,
  isCnpj,
  checkType,
  checkPattern,
  minLength,
  maxLength,
  minNumber,
  maxNumber,
  equals,
  required
};
