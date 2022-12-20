const express = require('express');

const app = express();

app.set('view engine', 'ejs');

const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.render('index');
})

app.listen(port, () => {
    console.log(`APP IS RUNNING ON PORT ${port}`)
})