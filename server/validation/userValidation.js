const Joi = require("joi");

const validateUser = user => {
  const schema = {
    email: Joi.string()
      .min(5)
      .max(255)
      .required()
      .email()
      .error(() => "Email is required and must be valid"),
    password: Joi.string()
      .min(5)
      .max(255)
      .required()
      .error(() => "Password is required")
  };
  return Joi.validate(user, schema, { abortEarly: false });
};

module.exports = validateUser;
