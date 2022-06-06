const { authenticate } = require("@feathersjs/authentication").hooks;
const { schema } = require("./genres.model");
const validate = require("feathers-validate-joi");
const admin = require("../../../hooks/admin");
module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [validate.form(schema, { abortEarly: false }), authenticate("jwt")],
    update: [],
    patch: [],
    remove: [authenticate("jwt"), admin()],
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
