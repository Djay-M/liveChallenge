const express = require("express");
const router = express.Router();
const { celebrate: validate } = require("celebrate");
const controller = require("../../controllers/users.controller");
const { createUser } = require("../../validations/v1/user.validations");
const { authorize } = require("../../middlewares/auth");

router
  .route("/getAllUsers")
  /**
   * @api {GET} api/v1/users/getAllUsers
   * @apiDescription Fetch all users from user table
   * @apiVersion 1.0.0
   * @apiName fetchAllUsers
   * @apiGroup Users
   * @apiPermission admin, agent
   *
   * @apiSuccess {Object} Status, message, data
   */
  .get(authorize(), controller.listAllUsers);

router
  .route("/createUser")
  /**
   * @api {GET} api/v1/users/createUser
   * @apiDescription Create a user in user table
   * @apiVersion 1.0.0
   * @apiName CreateUsers
   * @apiGroup Users
   * @apiPermission admin, User
   *
   * @apiSuccess {Object} Status, message, data
   */
  .post(
    validate(createUser, { allowUnknown: false }),
    authorize(),
    controller.createUser
  );

module.exports = router;
