const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('<h1>CI/CD is successfully Deployed with mannual Review.</h1>'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
