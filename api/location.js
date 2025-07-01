export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { lat, lng } = req.body;
    console.log('Nhận vị trí:', lat, lng);
    return res.status(200).json({ status: 'Vị trí đã gửi!' });
  } else {
    res.status(405).json({ error: 'Chỉ hỗ trợ POST' });
  }
}