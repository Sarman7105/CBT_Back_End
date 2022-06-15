const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const reportSchema = new Schema({
    title: {
        type: String,
        required:true
    },
    examinee: [
        {
            _id: mongoose.Types.ObjectId,
            name: String,
            marks: [
                {
                    title: String,
                    mark: Number
                }
            ],
            totalMark: Number
        }],
    question: {
        type: mongoose.Types.ObjectId,
        ref:"Question"
    }
    
},{timestamps:true});
const Report = new model("Report", reportSchema);
module.exports = {Report,reportSchema};