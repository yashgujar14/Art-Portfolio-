const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
    Name : {
        type: String,
        require : true
    },
    email_id : {
        type: String,
        require: true
    },
    Mobile_No: {
        type: Number,
        require: true
    },
    More_Info: {
        type: String,
        require: true
    },
    date : {
        type : Date,
        default: Date.now()
    }
})

// Now need to create Collections

const Feedback = new mongoose.model("newFeedback", feedbackSchema);
module.exports = Feedback;
