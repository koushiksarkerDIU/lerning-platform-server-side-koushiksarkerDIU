const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const Port = process.env.Port || 5000;
const courseList = require('./Data/courses.json')
app.get('/', (req, res) => {
    res.send('Now server is running');
});

app.get('/courses', (req, res) => {
    res.send(courseList)
})

app.listen(Port, () => {
    console.log("server is running")
});