const users = require('./users/users.service.js');
const genres = require('./genres/genres.service.js');
const customers = require('./customers/customers.service.js');
const movies = require('./movies/movies.service.js');
const rental = require('./rental/rental.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(genres);
  app.configure(customers);
  app.configure(movies);
  app.configure(rental);
};
