const express = require("express");
const mysql = require("mysql");
const app = express();

const port = "3000";
// const connection = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASS,
//     database: process.env.DB_NAME,
//     port: process.env.DB_PORT,
// });
// connection.connect(function (err) {
//     if (err) {
//         console.log(err.message);
//         return;
//     }
//     console.log("Successfully connected");
// });

app.get("/", (req, res) => {
    res.status(200).send("Kekkaroth!");
});

app.listen(port, () => {
    console.log(`[INFO] Listening on http://localhost:${port}`);
});