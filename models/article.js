const mongoose = require('mongoose')
const marked = require('marked')
const slugify = require('slugify')

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
    },
    slug:{
        type:String,
        required: true,
        unique: true
    }
})

//CREATING A SLUG FROM A TITLE, EVERYTIME WE VALIDATE A MODEL
articleSchema.pre('validate', function(next){
    if(this.title){
        this.slug = slugify(this.title, {lower:true, strict:true})
    }
    next()
})

//COMPILING A MODEL
const Article = mongoose.model('Article', articleSchema);

module.exports = Article;