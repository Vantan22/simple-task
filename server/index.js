const http=require('http');
const routes=require('./routes.js')
const express=require('express')
const app=express()

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  console.log('middle 1')
  next();
})
app.use((req, res, next) => {
  console.log('middle 2')
  res.send('<h1>Hello World</h1>')
})
app.listen(3000)