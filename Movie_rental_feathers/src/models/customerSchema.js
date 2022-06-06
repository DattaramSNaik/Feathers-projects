module.exports = function (app) {
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const schema = new Schema(
    {
      name: { type: String, required: true, minlength: 5, maxlength: 15 },
      phone: { type: String, required: true, minlength: 7, maxlength: 10 },
      isGold: { type: Boolean, default: false },
    },
    {
      timestamps: true,
    }
  );
  return schema;
};
