// movies-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = "movies";
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const getGenreSchema = require("./genresSchema");
  const schema = new Schema(
    {
      title: {
        type: String,
        minlength: 5,
        maxlength: 50,
        required: [true, "title is required"],
      },
      genre: {
        type: getGenreSchema(app),
        required: [true, "Genre  is required"],
      },
      dailyRentalRate: {
        type: Number,
        min: 0,
        max: 255,
        required: true,
      },
      numberInStock: {
        type: Number,
        min: 0,
        max: 255,
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
