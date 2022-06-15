const express = require('express');
const {addReport,getReports,getReportById,updateReports,getReportByIdAndMark,getReportByQuestion} = require('../controllers/reportController');


const reportRouter = express.Router();
reportRouter.get('/', getReports);
reportRouter.post('/filter/:id', getReportByQuestion);
reportRouter.route('/:id').get(getReportById).put(updateReports).post(getReportByIdAndMark);
reportRouter.post('/add', addReport);
module.exports = reportRouter;