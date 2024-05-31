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

exports.createUser = async (req, res, next) => {
  try {
    await Users.create(req.body);
    const user = await Users.findOne({
      where: {
        username: req.body.username,
        password: req.body.password,
      },
      raw: true,
    });
    const JwtToken = genrateJwt(user);
    return res.json({
      status: 200,
      message: "User created SuccessFully",
      token: `JWT ${JwtToken}`,
      body: req.body,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
