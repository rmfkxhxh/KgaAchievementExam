const express = require('express')
const app = express()
const nunjucks = require('nunjucks')
const cookieParser = require('cookie-parser')

app.set('view engine','html')

nunjucks.configure('views',{
    express:app,
})

app.use(cookieParser())

app.get('/',(req,res)=>{
    res.render('index')
    console.log(req.cookies);
})

app.listen(4000,()=>{
    console.log('server start')
})