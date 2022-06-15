const express = require('express');
const { addQuestionSet } = require('../controllers/questionSetController');

const questionSetRoute = express.Router();
questionSetRoute.post('/', addQuestionSet);
module.exports = questionSetRoute;