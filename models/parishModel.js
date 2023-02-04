const { model, Schema } = require('mongoose');

const parishSchema = new Schema ({
    parish_name: {
        type: String,
        required: true,
        unique: true
    }
});

module.exports = model("Parish", parishSchema)