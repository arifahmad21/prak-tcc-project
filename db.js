const mysql = require('mysql');

const dbConn = mysql.createConnection({
    host: '35.199.177.240',
    user: 'root',
    password: "fV2gS-TU*lIOHID",
    database: 'api_web_service'
});

dbConn.connect(function(err) {
    if (err) throw err;
    console.log('Database Connected!');
});

module.exports = dbConn;
