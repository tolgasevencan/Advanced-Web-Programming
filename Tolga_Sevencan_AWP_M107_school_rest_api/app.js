const express = require('express');
const StudentService = require('./service/StudentService');
const TeacherService = require('./service/TeacherService');
const app = express();
const PORT = 3000;

// ReST Students' Endpoint
app.get('/students', function (req, res) {
    res.send('Get students');
});

app.get('/students/:id', function (req, res) {
    res.send('Get students by id' + id);
});

app.post('/school', function (req, res) {
    res.send('Save the sending Student to database');
});

app.put('/school', function (req, res) {
    res.send('Get students');
});

app.delete('/school', function (req, res) {
    res.send('Delete all the students');
});

// ReST Teachers' Endpoint
app.get('/school', function (req, res) {
    res.send('Get students');
});

app.get('/school', function (req, res) {
    res.send('Get students');
});

app.post('/school', function (req, res) {
    res.send('Save the sending Student to database');
});

app.put('/school', function (req, res) {
    res.send('Get students');
});

app.delete('/school', function (req, res) {
    res.send('Get students');
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))