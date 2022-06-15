const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const examineeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required:true,
    }
    
},
{
    timestamps: true,
}
)

const Examinee = new model("Examinee", examineeSchema);
module.exports = { examineeSchema, Examinee };