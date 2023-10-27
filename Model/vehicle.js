const { model, Schema } = require("mongoose");

const vehicleSchema = new Schema({
  no: {
    type: "Number",
    required: true,
  },
  make: {
    type: "String",
    length:15,
    required: true,
  },
  model: {
    type: "String",
    length:15,
    required: true,
  },
  year: {
    type: "Number",
    required: true,
    message: "Invalid year",
  },
  price: {
    type: "Number",
    required: true,
  },
  status: {
    type: "String",
    required: true,
    enum: ["Live", "Sold"],
    message: "The value must be either Live or Sold",
  },
});

module.exports = model("Vehicle", vehicleSchema);
