// rentals-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = "rentals";
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const schema = new Schema(
    {
      customer: new Schema({
        name: {
          type: String,
          required: true,
          minLength: 5,
          maxLength: 50,
        },
        phone: {
          type: String,
          required: true,
          minLength: 7,
          maxLength: 10,
        },
      }),
      movie: new Schema({
        title: {
          type: String,
          required: true,
          minlength: 3,
          maxlength: 50,
        },
        dailyRentalRate: {
          type: Number,
          required: true,
          min: 0,
          max: 255,
        },
        numberInStock: {
          type: Number,
          min: 0,
          max: 255,
          required: true,
        },
      }),
      dateOut: {
        type: Date,
        default: Date.now,
      },
      dateIn: {
        type: Date,
        default: null,
      },
      rentalFee: {
        type: Number,
        min: 0,
        max: 1000,
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
