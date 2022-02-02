const express = require('express')
const hbs = require('hbs')
const path = require('path')
const port = process.env.PORT || 5656
const app = express()

const static_path = path.join(__dirname,'./public')
const templatepath = path.join(__dirname,'public/templates/views')
const partialpath = path.join(__dirname,'public/templates/partials')


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


app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`);
})