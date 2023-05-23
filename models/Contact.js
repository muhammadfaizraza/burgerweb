import mongoose from "mongoose";
var validateEmail = function (email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const schema = new mongoose.Schema({
  name: {
    // required: true,
    type: String,
  },

  email: {
    type: String,
    // trim: true,
    // lowercase: true,
    // unique: true,
    // required: "Email address is required",
  },

  message: {
    // required: true,
    type: String,
  },
});
export const Contact = mongoose.model("Contact", schema);
