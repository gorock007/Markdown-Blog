const express = require ('express');
const app = express();
const articleRouter = require('./routes/articles')

app.set('view engine', 'ejs')

app.use('/articles', articleRouter)


app.get('/', (req, res)=>{
    const articles = [{
        title: 'Test Article',
        dateCreated: Date.now(),
        description: 'Test Description'
    }]
    res.render('index', {articles: articles})
})

app.listen(3000)
