const express = require('express')
const hbs = require('hbs')
const path = require('path')
const port = process.env.PORT || 5656
const app = express()
const User = require('./public/models/user')
require('./public/db/connect')

const static_path = path.join(__dirname,'./public')
const templatepath = path.join(__dirname,'public/templates/views')
const partialpath = path.join(__dirname,'public/templates/partials')

app.use(express.urlencoded({extended: true}))
app.use(express.json());

app.set('view engine','hbs')
app.set('views',templatepath);
hbs.registerPartials(partialpath);
app.use(express.static(static_path));


app.get("/",(req,res)=>{
    res.render('index')
})
app.get('/courses',(req,res)=>{
    res.render('courses');
})
app.get('/paymentstatus',(req,res)=>{
    res.render('paymentstatus')
})
app.get('/coursedetails',(req,res)=>{
    res.render('coursedetails')
})

app.post("/register",async(req,res)=>{
    try{
        if(req.body.stuname == ''){
            document.getElementById("stuname").innerHTML('<small>Empty</small>')
        }
        else{
            console.log(req.body)
            const userData = new User(req.body)
            result = await userData.save()
            res.status(201).redirect('/')
        }
    }catch(error){
        res.status(500).send(error)
    }
})

app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`);
})

var x = 1
console.log(x)