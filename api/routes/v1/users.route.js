const express = require("express");
const router = express.Router();
const { celebrate: validate } = require("celebrate");
const controller = require("../../controllers/users.controller");
const { getAllUsers } = require("../../validations/v1/user.validations");
// const { authorize } = require("../../middlewares/auth");

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
  .get(controller.listAllUsers);

module.exports = router;
