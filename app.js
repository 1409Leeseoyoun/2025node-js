const express = require('express');
const app = express();
const port = 1234;

app.get('/swag', (req, res) => {
    res.send('get swag');
});

app.post('/swag', (req, res) => {
    res.send('post swag');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});