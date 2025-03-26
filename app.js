const express = require('express');
const swagRouter = require('./routes/swag');

const app = express();
const port = 2007;

app.use(express.json())
app.use('/swag', swagRouter);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});