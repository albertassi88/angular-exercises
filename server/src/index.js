const express = require('express');
const cors = require('cors');
const multipart = require('connect-multiparty');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const corsOptions = {
    origin: '*',
    optionsSucessStatus: 200
}
app.use(cors(corsOptions));

const multipartMiddleware = multipart({ uploadDir: './uploads' });
app.post('/upload', multipartMiddleware, (req, res) => {
    const files = req.files;
    res.json({ message: files });
});

//downloadExcel
app.get('/downloadExcel', (req, res) => {
    res.download('./uploads/report.xlsx');
});

//downloadPDF
app.get('/downloadPDF', (req, res) => {
    res.download('./uploads/report.pdf');
});

app.use((err, req, res, next) => res.json({ error: err.message }));

app.listen(8000, () => {
    console.log("Rodando na porta 8000");
})