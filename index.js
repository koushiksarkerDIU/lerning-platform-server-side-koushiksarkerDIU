const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const Port = process.env.Port || 5000;
const courseList = require('./Data/courses.json');
const courseDetails = require('./Data/courseDetails.json');

app.get('/', (req, res) => {
    res.send('Now server is running');
});

app.get('/courses', (req, res) => {
    res.send(courseList)
});

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = courseDetails.find(c => c.id === id)
    res.send(selectedCourse)
});

app.get('/checkout/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = courseDetails.find(c => c.id === id)
    res.send(selectedCourse)
})

app.listen(Port, () => {
    console.log("server is running")
});

module.exports = app;