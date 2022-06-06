module.exports = function () {
  return async (context) => {
    const rentalId = context.id;
    console.log(rentalId);
    const rentalService = context.app.service("rental");
    const rental = await rentalService.get(rentalId);
    console.log(rental);
    context.params.movie = rental.movie;
    return context;
  };
};
