const { Joi } = require("celebrate");

module.exports = {
  // GET api/v1/tasks/getAllUsers
  getAllUsers: {
    query: Joi.object().optional(),
  },
  // POST api/v1/tasks/createUser
  createUser: {
    body: {
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      username: Joi.string().required(),
      password: Joi.string().required(),
    },
  },
};
