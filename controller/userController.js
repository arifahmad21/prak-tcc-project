const User = require('../user');

exports.findById = (req, res) => {
    User.findById(req.params.id, (err, user) => {
        if (err) res.status(500).send(err);
        res.send(user);
    });
};

// Fungsi untuk menampilkan semua pengguna
exports.findAllUsers = (req, res) => {
    User.findAll((err, users) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving users."
            });
        } else {
            res.send(users);
        }
    });
};

exports.update = (req, res) => {
    User.update(req.params.id, new User(req.body), (err, user) => {
        if (err) res.status(500).send(err);
        res.send({ message: 'User updated successfully!' });
    });
};

exports.delete = (req, res) => {
    User.delete(req.params.id, (err, user) => {
        if (err) res.status(500).send(err);
        res.send({ message: 'User deleted successfully!' });
    });
};
