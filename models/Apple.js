const mongoose = require("mongoose")
const AppleSchema = mongoose.Schema({
    Apple_colour: String,
    Apple_price : Number,
    Apple_quantity: Number
})
module.exports = mongoose.model("Apple",
AppleSchema)