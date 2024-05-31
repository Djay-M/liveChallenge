const express = require("express");
const router = express.Router();
const { celebrate: validate } = require("celebrate");
const controller = require("../../controllers/url.controller");
const {
  encodeUrl,
  decodeUrl,
} = require("../../validations/v1/url.validations");
const { authorize } = require("../../middlewares/auth");

router
  .route("/getAllUrls")
  /**
   * @api {GET} api/v1/url/getAllUrls
   * @apiDescription Fetch all urls
   * @apiVersion 1.0.0
   * @apiName fetchAllUrls
   * @apiGroup Urls
   * @apiPermission admin, agent
   *
   * @apiSuccess {Object} Status, message, data
   */
  .get(authorize(), controller.listAllUrl);

router
  .route("/encodeUrl")
  /**
   * @api {GET} api/v1/url/encodeUrl
   * @apiDescription encode a URL
   * @apiVersion 1.0.0
   * @apiName EncodeUrl
   * @apiGroup Urls
   * @apiPermission admin, User
   *
   * @apiSuccess {Object} Status, message, data
   */
  .post(
    validate(encodeUrl, { allowUnknown: false }),
    authorize(),
    controller.encodeUrl
  );

router
  .route("/decodeUrl")
  /**
   * @api {GET} api/v1/url/decodeUrl
   * @apiDescription encode a URL
   * @apiVersion 1.0.0
   * @apiName EncodeUrl
   * @apiGroup Urls
   * @apiPermission admin, User
   *
   * @apiSuccess {Object} Status, message, data
   */
  .post(
    validate(decodeUrl, { allowUnknown: false }),
    authorize(),
    controller.decodeUrl
  );

module.exports = router;
