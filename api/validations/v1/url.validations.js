const { Joi } = require("celebrate");

module.exports = {
  // POST api/v1/tasks/encodeUrl
  encodeUrl: {
    body: {
      originalUrl: Joi.string().required(),
    },
  },
  // POST api/v1/tasks/decodeUrl
  decodeUrl: {
    body: {
      url: Joi.string().required(),
    },
  },
};
