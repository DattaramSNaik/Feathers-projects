const { authenticate } = require("@feathersjs/authentication").hooks;
const { schema } = require("./rentals.model");
const validate = require("feathers-validate-joi");
const fetchMovie = require("./hooks/fetchMovie");
const fetchCustomer = require("./hooks/fetchCustomer");
const setRentalFee = require("./hooks/setRentalFee");
const decreaseNumberInStock = require("./hooks/decreaseNumberInStock");
const admin = require("../../../hooks/admin");
module.exports = {
  before: {
    //authenticate("jwt")
    all: [],
    find: [],
    get: [],
    create: [
      validate.form(schema, { abortEarly: false }),
      fetchMovie(),
      fetchCustomer(),
      setRentalFee(),
    ],
    update: [],
    patch: [],
    remove: [authenticate("jwt"), admin()],
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [decreaseNumberInStock()],
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
