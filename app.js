const express = require ('express');
const mongoose = require('mongoose');
const app = express();
const Article = require('./models/article')
const articleRouter = require('./routes/articles')

mongoose.connect('mongodb://localhost:27017/blog')
    .then(() =>{
        console.log("MongoDb Connected!!")
    })
    .catch(err =>{
        console.log("Connection Error!!")
        console.log(err);
    })

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended:false}))

app.get('/', async (req, res)=>{
    const articles = await Article.find().sort({dateCreated: 'desc'})
    res.render('articles/index', {articles})
})

app.use('/articles', articleRouter)

app.listen(3000, () =>{
    console.log("App is listening on port 3000")
})
