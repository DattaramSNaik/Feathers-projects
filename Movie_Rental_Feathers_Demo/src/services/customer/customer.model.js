const Joi = require("joi");
const { objectId } = require("@feathers-plus/validate-joi-mongodb");

const schema = Joi.object({
  _id: objectId,
  name: Joi.string().min(5).max(15).required(),
  phone: Joi.string().min(7).max(10).required(),
  isGold: Joi.boolean(),
});
module.exports.schema = schema;
