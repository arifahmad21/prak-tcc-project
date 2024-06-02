const Note = require('../note');

exports.create = (req, res) => {
    const newNote = new Note({
        userId: req.body.userId,
        title: req.body.title,
        content: req.body.content
    });

    Note.create(newNote, (err, note) => {
        if (err) res.status(500).send(err);
        res.send({ message: 'Note created successfully!', noteId: note });
    });
};

exports.findByUserId = (req, res) => {
    Note.findByUserId(req.params.userId, (err, notes) => {
        if (err) res.status(500).send(err);
        res.send(notes);
    });
};

exports.update = (req, res) => {
    Note.update(req.params.id, new Note(req.body), (err, note) => {
        if (err) res.status(500).send(err);
        res.send({ message: 'Note updated successfully!' });
    });
};

exports.delete = (req, res) => {
    Note.delete(req.params.id, (err, note) => {
        if (err) res.status(500).send(err);
        res.send({ message: 'Note deleted successfully!' });
    });
};

// Fungsi untuk menampilkan semua catatan
exports.findAllNotes = (req, res) => {
    Note.findAll((err, notes) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving notes."
            });
        } else {
            res.send(notes);
        }
    });
};

