// users-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = "users";
  const mongooseClient = app.get("mongooseClient");
  const schema = new mongooseClient.Schema(
    {
      email: {
        type: String,
        unique: true,
        dropDups: true,
        lowercase: true,
        minlength: 5,
        maxlength: 1024,
        required: true,
      },
      password: { type: String, minlength: 5, maxlength: 1024, required: true },
      isAdmin: { type: Boolean, default: false },
      name: {
        type: String,
        minlength: 5,
        maxlength: 15,
        unique: true,
        dropDups: true,
        required: true,
      },
    },
    {
      timestamps: true,
    }
  );

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);
};
