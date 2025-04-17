const fs = require('fs');
const PDFDocument = require('pdfkit');

class PdfController {
    async create(destinationFilePath, qrCodePath, name, department, jobTitle, team) {
        return this.toFile(destinationFilePath, qrCodePath, name, department, jobTitle, team);
    }

    toFile(destinationFilePath, qrCodePath, name, department, jobTitle, team) {
        const doc = new PDFDocument({
            size: [250, 100],
            margins : {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
        }});

        doc.pipe(fs.createWriteStream(destinationFilePath));

        doc.registerFont('Sunlife-Regular', './assets/fonts/SunLifeNewDisplay-Regular.ttf');
        doc.registerFont('Sunlife-Bold', './assets/fonts/SunLifeNewDisplay-Bold.ttf');
        doc.lineWidth(1).lineCap("butt").moveTo(15, 15).lineTo(15, 85).fillAndStroke('#FFF4C2');

        doc.font('Sunlife-Bold');
        doc.fontSize(6);
        doc.fillColor("#184A58").text(name, 30.5, 62, { width: doc.page.width });

        doc.image('./assets/images/images/sunlife-logo.png', 30.5, 10, {height: 10 });
        doc.image(qrCodePath, 100, 20, { width: 62 });

        if (department) {
            doc.fillColor("184A58").text(department, 188, 20, { width: doc.page.width });
        }

        doc.fontSize(4.5);
        doc.font('Sunlife-Regular');
        doc.fillColor("184A58").text(jobTitle, 30, 72, { width: doc.page.width });
        if (team) {
            doc.fontSize(4);
            doc.fillColor("#184A58").text(team, 30, 70, { width: doc.page.width })
        }

        doc.end();
        return destinationFilePath;
    }
}

module.exports = PdfController;
