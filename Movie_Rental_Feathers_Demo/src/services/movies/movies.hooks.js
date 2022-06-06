const { authenticate } = require("@feathersjs/authentication").hooks;
const { schema } = require("./movies.model");
const validate = require("feathers-validate-joi");
const fetchGenre = require("./hooks/fetchGenre");
const admin = require("../../../hooks/admin");
module.exports = {
  before: {
    //authenticate("jwt")
    all: [],
    find: [],
    get: [],
    create: [
      authenticate("jwt"),
      validate.form(schema, { abortEarly: false }),
      fetchGenre(),
    ],
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
