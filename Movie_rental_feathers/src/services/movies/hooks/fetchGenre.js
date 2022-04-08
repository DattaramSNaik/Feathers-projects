module.exports = function () {
  return async (context) => {
    const genreId = context.data.genreId;
    const genreService = context.app.service("genres");
    const genre = await genreService.get(genreId);
    context.data.genre = {
      name: genre.name,
      _id: genre._id,
    };
    return context;
  };
};
