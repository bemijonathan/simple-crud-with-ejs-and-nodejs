var express = require('express');
var app = express()
var ejs = require('ejs');
var Blog = require('../data/index')
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res)=>{
    Blog.find().then(result  => {
        res.render('home.ejs',  {result: result})
    })
})

app.get('/new', (req,res) =>{
    res.render('new.ejs')
})

app.get('/single/:id', (req,res)=>{
    console.log(req.params.id)
    // var para = 
    // console.log(para)
    Blog.findOne({name: req.params.id}).then(result =>{
        console.log(result)
        res.render('single.ejs', {result})
    },err => {
        if(err){
            console.log(err)
        }

    })

})

app.post('/new',(req, res)=>{
    var name = req.body.name;
    var desc=req.body.desc;
    var image=req.body.image;

    var blog = new Blog({
        name,
        desc,
        image
    })

    blog.save().then(result => {
        res.redirect('/')
        console.log('added')
    })
})

app.listen(3000, ()=>{
    console.log('app has started')
})

