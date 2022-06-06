const { authenticate } = require("@feathersjs/authentication").hooks;
const { schema } = require("../rental/rental.model");
const validate = require("feathers-validate-joi");
const fetchMovie = require("./hooks/fetchMovie");
const fetchCustomer = require("./hooks/fetchCustomer");
const setRentalFee = require("../rental/hooks/setRentalFee");
const decreaseNumberInStock = require("../rental/hooks/decreaseNumberInStock");
const increaseNumberInStock = require("./hooks/increaseNumberInstock");
const setMovie = require("./hooks/setMovie");
const admin = require("../../../hooks/admin");
module.exports = {
  before: {
    //authenticate('jwt')
    all: [],
    find: [],
    get: [],
    create: [
      authenticate("jwt"),
      validate.form(schema, { abortEarly: false }),
      fetchMovie(),
      fetchCustomer(),
      setRentalFee(),
    ],
    update: [],
    patch: [authenticate("jwt"), setMovie()],
    remove: [authenticate("jwt"), admin(), setMovie()],
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [decreaseNumberInStock()],
    update: [],
    patch: [increaseNumberInStock()],
    remove: [increaseNumberInStock()],
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
