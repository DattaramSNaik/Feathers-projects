module.exports = function () {
  return async (context) => {
    const genreId = context.data.genreId;
    const genreServices = context.app.service("genres");
    const genre = await genreServices.get(genreId);
    context.data.genre = {
      name: genre.name,
      _id: genre._id,
    };
  };
};
