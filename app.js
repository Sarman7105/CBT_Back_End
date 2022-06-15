//External imports
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');

//Internal imports
const examineeRoute = require('./routes/examineeRoute');
const questionRoute = require('./routes/questionSetRoute');
const reportRouter = require('./routes/reportRoute');

const app = express();
dotenv.config();
mongoose.connect(process.env.CONNECTION_STRING, (err) => {
    if (err) {
        console.log("Error occurred: ", err);
    } else {   
        console.log("connection successful");
    }
})


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/examinee', examineeRoute);
app.use('/question', questionRoute);
app.use('/report', reportRouter);
app.use(morgan('tiny'));

// app.get("/", (req, res) =>{
//     res.send("hello this app get url")
// })
app.listen(process.env.PORT, () => {
    console.log("app is listening to port, ", process.env.PORT);
})
// console.log(process.env.CONNECTION_STRING);
