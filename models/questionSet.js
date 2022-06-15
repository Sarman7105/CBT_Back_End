const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const questionSchema = new Schema({
    title: {
        type: String,
        required:true
    },
    totalMarks: {
        type: Number,
        required:true
    },
    duration: {
        type: Number,
        required:true
    },
    startTime: {
        type: Date,
        required:true,
    }
}, { timestamps: true })
const Question = new model("Question", questionSchema);
module.exports = { questionSchema, Question };