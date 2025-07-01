import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// API nhận vị trí
app.post('/location', (req, res) => {
  const { lat, lng } = req.body;
  console.log('Nhận vị trí:', lat, lng);
  res.status(200).json({ status: 'Vị trí đã gửi!' });
});

app.listen(port, () => {
  console.log(`Server đang chạy tại http://localhost:${port}`);
});
