const { authenticate } = require("@feathersjs/authentication").hooks;
const validate = require("feathers-validate-joi");
const admin = require("../../../hooks/admin");
const { schema } = require("./customer.model");
module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [authenticate("jwt"), validate.form(schema, { abortEarly: false })],
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
