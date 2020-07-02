const express = require('express');
const router = express.Router();
const { User, Address } = require('../database');


router.get('/', function(req, res, next) {
  User.findAll({
    include: [ Address ]
  }).then(users => res.json(users));
});

router.post('/user', function(req, res, next) {
  User.create(req.body).then(user => res.json(user));
});

router.post('/address', function(req, res, next) {

    Address.create({
      street: 'Bahnhofstrasse 20',
      city: 'zollikon',
      zip: '8790',
      country: 'Schweiz',
      UserId: '65eaf13b-0a20-4cd5-95e4-71a7fccd58af'
    })
    .then((address) => res.json(address));

});

module.exports = router;
