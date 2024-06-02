"use strict";

var dbConn = require("./db");

var Note = function Note(note) {
  this.userId = note.userId;
  this.title = note.title;
  this.content = note.content;
};

Note.create = function (newNote, result) {
  dbConn.query("INSERT INTO notes SET ?", newNote, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

Note.findById = function (id, result) {
  dbConn.query("SELECT * FROM notes WHERE id = ?", id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Note.findByUserId = function (userId, result) {
  dbConn.query("SELECT * FROM notes WHERE userId = ?", userId, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Note.update = function (id, note, result) {
  dbConn.query("UPDATE notes SET title=?, content=? WHERE id = ?", [note.title, note.content, id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log("Update Result:", res);
      result(null, res);
    }
  });
};

Note["delete"] = function (id, result) {
  dbConn.query("DELETE FROM notes WHERE id = ?", id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Note.findAll = function (result) {
  dbConn.query("SELECT * FROM notes", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    } else {
      console.log(res);
      result(null, res);
      return;
    }
  });
};

module.exports = Note;