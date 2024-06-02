const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const authRoutes = require('./auth');
const noteRoutes = require('./router/noteRoutes');
const userRoutes = require('./router/userRoutes');

app.use('/auth', authRoutes);
app.use('/notes', noteRoutes);
app.use('/users', userRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
