const Joi = require("joi");

const validateProject = project => {
  const schema = {
    name: Joi.string()
      .min(2)
      .required(),
    description: Joi.string()
      .min(2)
      .required(),
    technologies: Joi.array()
      .min(1)
      .required(),
    images: Joi.array()
      .min(1)
      .max(10)
      .required(),
    liveDemo: Joi.string().allow(""),
    code: Joi.string().allow("")
  };

  return Joi.validate(project, schema);
};

module.exports = validateProject;
