const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema ({
    messageId: {type: Number, required: true},
    messageText:{type: String, required: true}
})
const messageSchema