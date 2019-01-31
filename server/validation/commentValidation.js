const Joi = require("joi");

const validateComment = comment => {
  const schema = {
    text: Joi.string()
      .min(2)
      .required()
  };
  return Joi.validate(comment, schema);
};

module.exports = validateComment;
