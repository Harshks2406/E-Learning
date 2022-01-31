const express = require('express')
const { append } = require('express/lib/response')
const path = require('path')
const port = process.env.PORT || 5656
const app = express()

const static_path = path.join(__dirname,'./public')

app.use(express.static(static_path));
app.get("/",(req,res)=>{
    res.send('index')
})



app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`);
})