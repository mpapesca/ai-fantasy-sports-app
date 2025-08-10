import express from 'express';

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the AI Fantasy Sports API!' });
});

app.get('/status', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(port, () => {
  console.log(`Backend service running on port ${port}`);
});
