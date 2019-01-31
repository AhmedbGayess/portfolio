const Joi = require("joi");

const validatePost = post => {
  const schema = {
    title: Joi.string()
      .min(2)
      .required(),
    body: Joi.string()
      .min(5)
      .required(),
    description: Joi.string()
      .min(2)
      .required(),
    images: Joi.array().max(10)
  };
  return Joi.validate(post, schema);
};

module.exports = validatePost;
