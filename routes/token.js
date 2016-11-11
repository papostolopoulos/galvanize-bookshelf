'use strict';

const express = require('express');

// eslint-disable-next-line new-cap
const router = express.Router();
const knex = require('../knex');
const bcrypt = require('bcrypt');

// YOUR CODE HERE
router.get('/token', function (req, res, next) {
  knex('users')
  .then(function (users) {
    // console.log(books);
    res.json(false);
  })
  .catch(function (err) {
      next(new Error(err));
  });
});

router.post('/token', function (req, res, next) {
  let password = bcrypt.hashSync(req.body.password, 3);
  knex('users')
  .insert({
    email: req.body.email,
    hashed_password: password
  })
  .returning(['id', 'first_name', 'last_name', 'email'])
  .then(function (users) {
    console.log(users[0]);
    res.cookie('some_name', 'some_value');
    res.json(users[0])
  })
  .catch(function (err) {
      next(new Error(err));
    });
});

module.exports = router;
