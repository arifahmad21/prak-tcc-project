const dbConn = require("./db");

const User = function(user) {
    this.username = user.username;
    this.password = user.password;
};

User.create = function(newUser, result) {
    dbConn.query("INSERT INTO users SET ?", newUser, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

User.findById = function(id, result) {
    dbConn.query("SELECT * FROM users WHERE id = ?", id, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};

User.findByUsername = function(username, result) {
    dbConn.query("SELECT * FROM users WHERE username = ?", username, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};

User.update = function(id, user, result) {
    dbConn.query("UPDATE users SET username=?, password=? WHERE id = ?", [user.username, user.password, id], function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log("Update Result:", res);
            result(null, res);
        }
    });
};

User.delete = function(id, result) {
    dbConn.query("DELETE FROM users WHERE id = ?", id, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};

User.findAll = (result) => {
    dbConn.query("SELECT * FROM users", (err, res) => {
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

module.exports = User;
