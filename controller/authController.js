const jwt = require('jsonwebtoken');
const User = require('../user');

exports.register = (req, res) => {
    const newUser = new User({
        username: req.body.username,
        password: req.body.password  // Simpan password tanpa hashing
    });

    User.create(newUser, (err, user) => {
        if (err) res.status(500).send(err);
        res.send({ message: 'User registered successfully!' });
    });
};

exports.login = (req, res) => {
    User.findByUsername(req.body.username, (err, user) => {
        if (err) res.status(500).send(err);
        if (!user.length) return res.status(404).send({ message: 'User not found' });

        const passwordIsValid = req.body.password === user[0].password;
        if (!passwordIsValid) return res.status(401).send({ message: 'Invalid Password' });

        const token = jwt.sign({ id: user[0].id }, 'your-secret-key', {
            expiresIn: 86400 // 24 hours
        });

        res.status(200).send({
            id: user[0].id,
            username: user[0].username,
            accessToken: token
        });
    });
};

