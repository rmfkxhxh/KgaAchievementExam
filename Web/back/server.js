const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors({
  origin: 'http://localhost:4000',
  credentials: true,
  accessControlAllowOrigin: '*'
}));
app.get('/', (req, res) => {
  res.send(`go to http://localhost:${port}/getCookie`);
});

app.get('/getCookie', (req, res) => {
  //set cookie
  res.cookie('Token', 'true');
  res.json({ Token: 'true' });
});

server = app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
})