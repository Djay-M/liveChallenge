const Sequelize = require("sequelize");
const { Op } = Sequelize;
const { Users, Url } = require("../models");
const APIError = require("../utils/APIErrors");
const { encode } = require("punycode");
const { encodeString, decodeString } = require("../helpers/encoder");

exports.listAllUrl = async (req, res, next) => {
  try {
    const Urls = await Url.findAll();
    return res.json({
      status: 200,
      message: "urls fetched successfully",
      data: Urls,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.encodeUrl = async (req, res, next) => {
  try {
    const { originalUrl } = req.body;
    const { id: userId } = req.user;
    const encodeUrl = await encodeString(originalUrl);
    await Url.create({
      userId,
      originalUrl,
      encodeUrl,
    });

    return res.json({
      status: 200,
      message: "Url Encoded SuccessFully",
      encodeUrl,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.decodeUrl = async (req, res, next) => {
  try {
    const { url } = req.body;

    const { originalUrl } = await Url.findOne({
      where: {
        encodeUrl: url,
      },
    });

    return res.json({
      status: 200,
      message: "Url Decoded SuccessFully",
      originalUrl,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
