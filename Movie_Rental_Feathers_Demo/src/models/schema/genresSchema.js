module.exports = function (app) {
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const schema = new Schema(
    {
      name: { type: String, minlength: 3, maxlength: 15, required: true },
    },
    {
      timestamps: true,
    }
  );
  return schema;
};
