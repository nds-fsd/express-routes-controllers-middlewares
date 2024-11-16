const { body } = require("express-validator");

const maxTitleLength = 256;

const hasBadWords = (value) => {
  const badWords = ["penis", "cabrón", "hijo puta"];
  const includesBadWord = badWords.some((badWord) =>
    value.toString().includes(badWord),
  );
  return !includesBadWord;
};

const validations = body("title")
  .isString()
  .withMessage("Must be a string")
  .isLength({ max: maxTitleLength })
  .withMessage(`Max length is ${maxTitleLength}`)
  .custom(hasBadWords)
  .withMessage("Can't include bad or NFSW words");

module.exports = validations;
