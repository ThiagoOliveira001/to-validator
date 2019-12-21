const messages = {
  portuguese: {
    required: "@field é obrigatório",
    isCpf: "CPF inválido",
    isCnpj: "CNPJ inválido",
    isEmail: "Email inválido",
    minLength: "@field não possui a quantidade mínima de @value elementos",
    maxLength: "@field excedeu a quantidade máxima de @value elementos",
    minNumber: "@field não pode ser menor que @value",
    maxNumber: "@field não pode ser maior que @value",
    equals: "@field deve ser igual á @value",
    checkType: "@field deve ser do tipo @value",
    checkPattern: "@field não possui o padrão exigido"
  },
  english: {
    required: "@field is required",
    isCpf: "CPF is invalid",
    isCnpj: "CNPJ is invalid",
    isEmail: "Email is invalid",
    minLength: "@field can't less than @value elements",
    maxLength: "@field can't greater than @value elements",
    minNumber: "@field can't less than @value",
    maxNumber: "@field can't greater than @value",
    equals: "@field not equal @value",
    checkType: "@field is not a @value",
    checkPattern: "@field is not compatible with the pattern"
  }
};

module.exports = messages;
