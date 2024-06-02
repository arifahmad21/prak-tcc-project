"use strict";

var User = require('../user');

exports.findById = function (req, res) {
  User.findById(req.params.id, function (err, user) {
    if (err) res.status(500).send(err);
    res.send(user);
  });
}; // Fungsi untuk menampilkan semua pengguna


exports.findAllUsers = function (req, res) {
  User.findAll(function (err, users) {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving users."
      });
    } else {
      res.send(users);
    }
  });
};

exports.update = function (req, res) {
  User.update(req.params.id, new User(req.body), function (err, user) {
    if (err) res.status(500).send(err);
    res.send({
      message: 'User updated successfully!'
    });
  });
};

exports["delete"] = function (req, res) {
  User["delete"](req.params.id, function (err, user) {
    if (err) res.status(500).send(err);
    res.send({
      message: 'User deleted successfully!'
    });
  });
};