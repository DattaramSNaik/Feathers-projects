module.exports = function () {
  return async (context) => {
    const customerId = context.data.customerId;
    const customerService = context.app.service("customer");
    const customer = await customerService.get(customerId);
    context.data.customer = {
      name: customer.name,
      phone: customer.phone,
      _id: customer._id,
    };
    return context;
  };
};
