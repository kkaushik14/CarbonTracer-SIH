// const express = require('express');
// const app = express();
// const path = require('path');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const carbonRoutes = require('./routes/carbonRoutes');

// app.use(express.static(path.join(__dirname, 'public')));

// const port = 2408;
// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const carbonRoutes = require('./routes/carbonRoutes');

const app = express();

mongoose.connect('mongodb://localhost:27017/carbonTrace')
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/carbon', carbonRoutes);

const port = 2408;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});