const { model, Schema } = require('mongoose');

const userSchema = new Schema({
    first_name: {
        type: String,
        required: [true, "No First Name was Provided"],
    },
    last_name: { 
        type: String, 
        required: [true, "No Last Name was Provided"],
    },
    phone_number: { 
        type: String, 
        required: [true, "No Phone Number was Provided"],
    },
    username: {
        type: String, 
        required: [true, "No Username was Provided"],
    },
    password: {
        type: String, 
        required: [true, "No Password was Provided"],
    },
    confirm_password: {
        type: String, 
        required: [true, "No Confirm Password was Provided"],
    },
    parishID: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "parish"
    }
});

module.exports = model("User", userSchema);