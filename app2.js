const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const dotenv = require('dotenv');
const travelRouter = require('./routes/travel');
dotenv.config();

const app = express();
const port = 2007;

app.use(methodOverride('_method'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/travel', travelRouter);

app.listen(port, () => {
  console.log(`Express server running at http://localhost:${port}`);
});