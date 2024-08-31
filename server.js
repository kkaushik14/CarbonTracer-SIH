const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

const port = 2408;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});