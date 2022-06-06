module.exports = function () {
  return (context) => {
    if (!context.params.user.isAdmin) throw new error("access forbidden");
    return context;
  };
};
