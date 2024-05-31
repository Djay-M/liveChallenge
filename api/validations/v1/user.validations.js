const { Joi } = require("celebrate");

module.exports = {
  // GET api/v1/tasks/getAllUsers
  getAllUsers: {
    query: Joi.object().optional(),
  },
};
