const express = require('express')

const app = express()

app.get('/', (req, res)=> res.send('los quiero padres')) 

app.listen(3000)
console.log("hola")