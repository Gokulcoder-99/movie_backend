const mongoose = require("mongoose");

const celebritySchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    validate: {
      validator: function (v) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      message: "Please enter a valid email",
    },
  },
  dob: {
    type: String,
    require: true,
  },
  bio: {
    type: String,
    require: true,
  },
  isActor:{
    type:Boolean,
    default:false
  },
  isProducer:{
    type:Boolean,
    default:false
  }
});

module.exports = mongoose.model("Celebrity",celebritySchema);