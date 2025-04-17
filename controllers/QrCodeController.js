const QRCode = require('qrcode');

class QrCodeController {
    async create(destinationFilePath, qrCodeUrl) {
        await QRCode.toFile(destinationFilePath, qrCodeUrl);
        return destinationFilePath;
    }
}

module.exports = QrCodeController;