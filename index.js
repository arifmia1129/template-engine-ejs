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

    const posts = [
        {
            title: 'Post one',
            author: 'Arif'
        },
        {
            title: 'Post two',
            author: 'Arif'
        },
        {
            title: 'Post three',
            author: 'Binu'
        },
        {
            title: 'Post four',
            author: 'Binu'
        },

    ]
    res.render('index', { title: 'EJS is an awesome template engine for Express', post, posts });
})

app.listen(port, () => {
    console.log(`APP IS RUNNING ON PORT ${port}`)
})