const { Question } = require("../models/questionSet");

const addQuestionSet = async(req, res, next) => {
    const question = new Question(req.body);
    try {
        const result = await question.save();
        res.status(200).json({ message: "Question set added successfully!", data: result });
        
    } catch (err) {
        res.status(500).json({ message: "There is a server side error!", error: err });
    }
}

module.exports = { addQuestionSet };