const { Examinee } = require("../models/examinee");

const createExaminee = async(req, res, next) => {
    const newExaminee = new Examinee(req.body);
    try {
        const result = await newExaminee.save();
        res.status(200).json({ message: "Examinee created successfully!", data: result });
        
    } catch (err) {
        res.status(500).json({message:"Examinee creation failed!",error:err})
    }
}

module.exports = { createExaminee };