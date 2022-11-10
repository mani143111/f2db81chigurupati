"use strict";

var mongoose = require("mongoose");

var AppleSchema = mongoose.Schema({
  Apple_colour: String,
  Apple_price: Number,
  Apple_quantity: Number
});
module.exports = mongoose.model("Apple", AppleSchema);
//# sourceMappingURL=Apple.dev.js.map
