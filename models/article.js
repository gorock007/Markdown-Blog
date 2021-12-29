const mongoose = require('mongoose')

//CREATING A SCHEMA
const articleSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type:String
    },
    markdown:{
        type:String,
        required: true
    },
    dateCreated: {
        type:Date,
        default: Date.now
    }
})

//COMPILING A MODEL
const Article = mongoose.model('Article', articleSchema);

module.exports = Article;