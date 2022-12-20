const express = require('express');

const app = express();

app.set('view engine', 'ejs');

const port = process.env.PORT || 8080;

app.get('/', (req, res) => {

    const post = {
        title: 'This is test title',
        body: 'This is body',
        published: true
    }

    res.render('index', { title: 'EJS is an awesome template engine for Express', post });
})

app.listen(port, () => {
    console.log(`APP IS RUNNING ON PORT ${port}`)
})