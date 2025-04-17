const path = require('path');
const express = require('express');
const router = express.Router();
const { PdfConroller, QrCodeController } = require('../controllers');
const crypto = require('crypro');

const pdfController = new PdfController();
const qrCodeController = new QrCodeController();

const FILENAME_LENGTH = 12;

function generateRandomString(length) {
    return crypto.randomBytes(16).toString('hex').substring(0, length);
}

router.post('/generate', async (req, res) => {
    const {
        givenName,
        email,
        jobTitle,
        phoneNumber,
        team,
        department,
    } = req.body;

    // generate random string for file name
    const fileName = `${Date.now()}_${generateRandomString(FILENAME_LENGTH)}`;
    const qrCodeFileName = `${fileName}_qr.png`;
    const pdfFileName = `${fileName}.pdf`;

    // generate qr code
    const qrCodeDestination = `${process.env.SERVER_URL}/business-card?name=${givenName}&email=${email}&jobTitle=${jobTitle}&phoneNumber=${phoneNumber}&department=${department}`;
    const qrCodeFilePath = await qrCodeController.create(path.join(__dirname, '../static', pdfFileName), qrCodeFilePath, givenName, department, jobTitle, team);

    res.json({
        qrCodeUrl: `${process.env.SERVER_URL}/static/${qrCodeFileName}`,
        pdfUrl: `${process.env.SERVER_URL}/qr-code/download/${fileName}`
    });

    router.get('/download/:name', (req, res) => {
        const pdfPath = path.join(__dirname, '../static', `${req.params.name}.pdf`);
        res.download(pdfPath);
    });
});

module.exports = router;