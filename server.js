const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

app.use(bodyParser.json());

// 創建一個儲存就醫及檢查信息的數組
const medicalRecords = [];

// 提供上傳就醫及檢查信息的端點
app.post('/upload-medical-record', (req, res) => {
    const { patientName, medicalResult } = req.body;
    medicalRecords.push({ patientName, medicalResult });
    res.json({ message: '信息已成功上傳' });
});

// 提供查詢就醫及檢查信息的端點
app.get('/get-medical-records', (req, res) => {
    res.json(medicalRecords);
});

// 設置靜態文件夾以提供 HTML 文件
app.use(express.static('C:\\Users\\User\\OneDrive\\桌面\\FHIR2024'));

app.listen(port, () => {
    console.log(`Provider 和 Consumer 子系統運行在 http://localhost:${port}`);
});
