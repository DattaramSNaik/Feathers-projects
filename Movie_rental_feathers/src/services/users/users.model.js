const Joi = require("joi");
const { objectId } = require("@feathers-plus/validate-joi-mongodb");

const schema = Joi.object({
  _id: objectId(),
  name: Joi.string().min(5).max(15).required(),
  email: Joi.string().min(5).max(255).required(),
  password: Joi.string().required().min(5).max(1024),
  isAdmin: Joi.boolean(),
});
module.exports.schema = schema;
