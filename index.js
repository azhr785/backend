require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

const github={
  "Name": "Anakin",
  "Gender": "male", 
  "Homeworld": "Tatooine",
  "Born": "41.9BBY",
  "Jedi": "yes"
 }

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login',(req,res)=>{
    res.send('Login !');
})


app.get('/twiter',(req,res)=>{
res.send('<h1>twiter</h1>');
})


app.get('/github',(req,res)=>{
res.json(github);
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})