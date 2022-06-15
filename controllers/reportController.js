const { Report } = require('../models/report');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
const addReport = async (req, res, next) => {
    // res.send(req.body);
    const newReport = new Report(req.body);
    try {
        const result = await newReport.save();
        res.status(200).json({
            message: "Report inserted successfully!",
            data:result
        })

    } catch (err) {
        res.status(500).json({
            message: "There is an error in the server side",
            error: err
        })
    }
}

const getReports = async (req, res, next) => {
    const id = req.params.id;
    try {
        await Report.find({}).populate('question').exec(function (err, items) {
            if (err) {
                console.log(err);
            }
            else {
                res.status(200).json({
                    message: "Success!",
                    data:items
         })
            }
        });
        
    } catch (err) {
        res.status(500).json({
            message: "There is an server side error!",
            error:err
        })
    }
}

const getReportById = async (req, res, next) => {
    const id = req.params.id;
    try {
        await Report.findById(id).populate('question','totalMarks startTime').exec(function (err, items) {
            if (err) {
                console.log(err);
            }
            else {
                res.status(200).json({
                    message: "Success!",
                    data:items
         })
            }
        });
        
    } catch (err) {
        res.status(500).json({
            message: "There is an server side error!",
            error:err
        })
    }
}

const getReportByIdAndMark = async (req, res, next) => {
    const { id } = req.params;
    const { mark } = req.body;
    try {
        const reports = await Report.aggregate([{ $match: { _id: ObjectId(id) } },{
		$unwind: '$examinee'},{$match:{'examinee.totalMark':{$gte:mark}}}]);
        // console.log("report",reports);
        res.send(reports);
    } catch (err) {
        res.send("error");
    }
}

const getReportByQuestion = async (req, res, next) => {
    const { id } = req.params;
    try {
        Report.aggregate([{ $match: { _id: ObjectId(id) } },{ $unwind: '$examinee' }, { $unwind: '$examinee.marks' }, { $match: { 'examinee.marks.title': 'question 1' } }]).exec(function (err, items) {
            res.send(items);
        });
        
    } catch (err) {
        res.send(err);
    }

}

const updateReports = async (req, res, next) => {
    const id = req.params.id;
    const report = await Report.findById(id);
    report.title = req.body.title;
    result = report.save();
    // console.log("keys",Object.keys(req.body));
    // const newReport = { ...report, ...req.body };
    // console.log("newReport",newReport);
    res.status(200).json({
        message: "success!",
        data:[report,result]
    })
}

module.exports = {addReport,getReports,getReportById,updateReports,getReportByIdAndMark,getReportByQuestion};