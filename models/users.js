const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, require: false },
  password: { type: String, require: false },
  first_name: { type: String, require: false },
  last_name: { type: String, require: false },
  role: { type: String, require: false },
  position: { type: String, require: false },
  create_date: { type: Date, default: Date.now },
  deleted: { type: String, require: false },
});

module.exports = mongoose.model("user", userSchema);
