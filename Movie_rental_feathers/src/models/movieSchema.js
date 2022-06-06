module.exports = function (app) {
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
  return schema;
};
