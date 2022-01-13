const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    maxlength: [144],
  },
  id: {
    type: Object,
    required: true,
  },
});

export default mongoose.model("User", UserSchema);
