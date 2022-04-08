const { authenticate } = require("@feathersjs/authentication").hooks;
const { schema } = require("../users/users.model");
const validate = require("feathers-validate-joi");
const { hashPassword, protect } =
  require("@feathersjs/authentication-local").hooks;

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [
      validate.form(schema, { abortEarly: false }),
      hashPassword("password"),
      authenticate("jwt"),
    ],
    update: [
      validate.form(schema, { abortEarly: false }),
      hashPassword("password"),
      authenticate("jwt"),
    ],
    patch: [
      validate.form(schema, { abortEarly: false }),
      hashPassword("password"),
      authenticate("jwt"),
    ],
    remove: [],
  },

  after: {
    all: [
      // Make sure the password field is never sent to the client
      // Always must be the last hook
      protect("password"),
    ],
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
