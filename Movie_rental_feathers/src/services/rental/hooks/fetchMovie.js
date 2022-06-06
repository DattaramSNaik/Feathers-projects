module.exports = function () {
  return async (context) => {
    const movieId = context.data.movieId;
    const movieService = context.app.service("movies");
    const movie = await movieService.get(movieId);
    if (movie.numberInStock == 0)
      throw new Error({ Message: "Movie out of stock" });
    context.data.movie = {
      _id: movie._id,
      title: movie.title,
      dailyRentalRate: movie.dailyRentalRate,
      numberInStock: movie.numberInStock,
    };
    // context.data.movie = movie;
    return context;
  };
};
