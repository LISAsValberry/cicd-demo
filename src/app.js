const express = require('express');
const app = express();

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/add', (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  res.json({ result: a + b });
});

app.get('/sub', (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  res.json({ result: a - b });
});

if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}

module.exports = app;