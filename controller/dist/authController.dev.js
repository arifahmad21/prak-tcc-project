"use strict";

var jwt = require('jsonwebtoken');

var User = require('../user');

exports.register = function (req, res) {
  var newUser = new User({
    username: req.body.username,
    password: req.body.password // Simpan password tanpa hashing

  });
  User.create(newUser, function (err, user) {
    if (err) res.status(500).send(err);
    res.send({
      message: 'User registered successfully!'
    });
  });
};

exports.login = function (req, res) {
  User.findByUsername(req.body.username, function (err, user) {
    if (err) res.status(500).send(err);
    if (!user.length) return res.status(404).send({
      message: 'User not found'
    });
    var passwordIsValid = req.body.password === user[0].password;
    if (!passwordIsValid) return res.status(401).send({
      message: 'Invalid Password'
    });
    var token = jwt.sign({
      id: user[0].id
    }, 'your-secret-key', {
      expiresIn: 86400 // 24 hours

    });
    res.status(200).send({
      id: user[0].id,
      username: user[0].username,
      accessToken: token
    });
  });
};

exports.updateUser = function (req, res) {
  User.update(req.params.id, new User(req.body), function (err, user) {
    if (err) res.status(500).send(err);
    res.send({
      message: 'User updated successfully!'
    });
  });
};

exports.deleteUser = function (req, res) {
  User["delete"](req.params.id, function (err, user) {
    if (err) res.status(500).send(err);
    res.send({
      message: 'User deleted successfully!'
    });
  });
};