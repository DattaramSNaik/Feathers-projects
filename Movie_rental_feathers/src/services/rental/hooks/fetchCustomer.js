module.exports = function () {
  return async (context) => {
    const customersId = context.data.customerId;
    const customersService = context.app.service("customers");
    const customer = await customersService.get(customersId);
    context.data.customer = {
      _id: customer._id,
      name: customer.name,
      phone: customer.phone,
    };
    return context;
  };
};
