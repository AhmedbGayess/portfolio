const Joi = require("joi");

const validateMessage = message => {
  const schema = {
    firstName: Joi.string()
      .min(2)
      .max(255)
      .required(),
    lastName: Joi.string()
      .min(2)
      .max(255)
      .required(),
    email: Joi.string().email().required(),
    subject: Joi.string()
      .min(2)
      .max(255)
      .required(),
    message: Joi.string()
      .min(5)
      .required()
  };

  return Joi.validate(message, schema);
};

module.exports = validateMessage;
