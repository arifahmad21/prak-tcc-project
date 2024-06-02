"use strict";

var Note = require('../note');

exports.create = function (req, res) {
  var newNote = new Note({
    userId: req.body.userId,
    title: req.body.title,
    content: req.body.content
  });
  Note.create(newNote, function (err, note) {
    if (err) res.status(500).send(err);
    res.send({
      message: 'Note created successfully!',
      noteId: note
    });
  });
};

exports.findByUserId = function (req, res) {
  Note.findByUserId(req.params.userId, function (err, notes) {
    if (err) res.status(500).send(err);
    res.send(notes);
  });
};

exports.update = function (req, res) {
  Note.update(req.params.id, new Note(req.body), function (err, note) {
    if (err) res.status(500).send(err);
    res.send({
      message: 'Note updated successfully!'
    });
  });
};

exports["delete"] = function (req, res) {
  Note["delete"](req.params.id, function (err, note) {
    if (err) res.status(500).send(err);
    res.send({
      message: 'Note deleted successfully!'
    });
  });
}; // Fungsi untuk menampilkan semua catatan


exports.findAllNotes = function (req, res) {
  Note.findAll(function (err, notes) {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving notes."
      });
    } else {
      res.send(notes);
    }
  });
};