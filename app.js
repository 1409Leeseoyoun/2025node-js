const express = require('express');
const app = express();
const port = 1234;

app.use(express.json())

app.get('/swag', (req, res) => {
    res.send('get swag');
});

app.post('/swag', (req, res) => {
    res.send(req.body);
});

app.post('/swag/:person', (req, res) => {
    res.send(req.params.person);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});