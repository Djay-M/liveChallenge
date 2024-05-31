const { Joi } = require("celebrate");

module.exports = {
  // GET api/v1/tasks/getAllUsers
  getAllUsers: {
    query: Joi.object()
      .keys({
        sortBy: Joi.string().valid("id", "createdAt", "updatedAt").optional(),
        order: Joi.string().valid("ASC", "DESC").optional(),
        searchKey: Joi.string().valid("id", "firstName", "lastName").optional(),
        searchVal: Joi.string().optional(),
      })
      .optional(),
  },
};
