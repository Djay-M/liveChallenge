const Sequelize = require("sequelize");
const { Op } = Sequelize;
const { genrateJwt } = require("../config/auth.config");
const { Users } = require("../models");
const APIError = require("../utils/APIErrors");

exports.listAllUsers = async (req, res, next) => {
  try {
    const users = await Users.findAll();
    return res.json({
      status: 200,
      message: "Users fetched successfully",
      data: users,
    });
  } catch (error) {
    next(error);
  }
};
