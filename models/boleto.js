const mongoose = require("mongoose");

const boletoSchema = mongoose.Schema({
  barCode: { type: String} ,
  amount: { type: String },
  expirationDate: { type: Date },
});

module.exports = mongoose.model("Boleto", boletoSchema);