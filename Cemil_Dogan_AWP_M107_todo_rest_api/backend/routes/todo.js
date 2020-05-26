var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.status(200).send({
        title: 'Express'
    });
});

router.get('hello', function (req, res, next) {
    res.status(200).send({
        title: 'hello'
    });
});

module.exports = router;