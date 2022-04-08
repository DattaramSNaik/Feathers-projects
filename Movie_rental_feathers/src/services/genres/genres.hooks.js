const { authenticate } = require("@feathersjs/authentication").hooks;
const validate = require("feathers-validate-joi");
const { schema } = require("./genres.model");
module.exports = {
  before: {
    //authenticate("jwt")
    all: [],
    find: [],
    get: [],
    create: [authenticate("jwt"), validate.form(schema, { abortEarly: false })],
    update: [authenticate("jwt"), validate.form(schema, { abortEarly: false })],
    patch: [authenticate("jwt"), validate.form(schema, { abortEarly: false })],
    remove: [authenticate("jwt")],
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
};
