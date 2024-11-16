const { body } = require("express-validator");

const validations = body("completed")
  .isBoolean({ strict: true })
  .optional()
  .withMessage("When included, field must be a boolean");

module.exports = validations;
