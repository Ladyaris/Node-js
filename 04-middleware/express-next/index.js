// require dotenv
require('dotenv').config();

// import express
const express = require('express');
// import body-parser
const bodyParser = require('body-parser');
// import module headers
const headers = require("./middlewares/headers");
// import module body
const body = require("./middlewares/body");

// instntiate express
const app = express();

// middleware 1 (body-parser)
// middleware 2 nampilin request di headers
app.use(bodyParser.json(), headers);

// middleware hanya berlaku di method POST di index '/'
// menampilkan isi request body menggunakan middleware body
// tampilin data request body ke client nya
app.post('/', bodyParser.urlencoded({ extended: true }), body, (req, res, next) => {
    // kirimkan data request body ke clieng  menggunakan request.send
    return res.send(req.body);
});

// middleware selain method POST index '/'
app.use('/', (req, res, next) => {
    res.send(req.headers);
});

// port
app.listen(process.env.PORT, () => {
    console.log(`Server berjalan di port ${process.env.PORT}`);
});