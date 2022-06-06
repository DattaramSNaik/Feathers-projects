module.exports = function () {
  return (context) => {
    if (!context.params.user.isAdmin) {
      console.log("access forbidden");
      throw new error("access forbidden");
    }

    return context;
  };
};
