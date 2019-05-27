var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/blog')

const Blog = mongoose.model('Blog', { 
    name: {
        type:String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    desc:{
        type: String
    },
    date:{
        type: Date,
        default: Date.now()
    }
});


module.exports = Blog