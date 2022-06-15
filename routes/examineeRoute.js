const express = require('express');
const examineeRoute = express.Router();
const { createExaminee } = require('../controllers/examineeController');

examineeRoute.post('/',createExaminee)
// examineeRoute.get('/', (req, res) => {
//     res.send("this is examinee route get method");
// })
module.exports = examineeRoute;