const express = require ('express');
const mongoose = require('mongoose');
const app = express();
const articleRouter = require('./routes/articles')

mongoose.connect('mongodb://localhost/blog')
    .then(() =>{
        console.log("MongoDb Connected!!")
    })
    .catch(err =>{
        console.log("Connection Error!!")
        console.log(err);
    })

app.set('view engine', 'ejs')

app.use('/articles', articleRouter)


app.get('/', (req, res)=>{
    const articles = [{
        title: 'Test Article',
        dateCreated: new Date(),
        description: 'Test Description'
    },
    { 
        title: 'Test Article 2',
        dateCreated: new Date(),
        description: 'Test Description'
    }
    ]
    res.render('articles/index', {articles: articles})
})

app.listen(3000)
