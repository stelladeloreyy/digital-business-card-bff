require('dotenv').config();

const cors = require('cors');
const path = require('path');
const qrcodeRouter = require("./routes/qrcodePublic");
const businessCard = require('./routes/businessCardPublic');

const express = require('express');
const app = express();
const port = 9000;

app.disable('x-powered-by');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/static', express.static(path.join(__dirname, 'static')));

app.use('/business-card', businessCardRouter);
app.use('/qr-code', qrcodeRouter);

app.listen(port, () => {
    console.log(`Example app listening on post ${port}`)
});