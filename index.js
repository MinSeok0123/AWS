const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/error', function (req, res) {
    res.send('error')
  })

app.listen(3000, ()=> {
    console.log('server start!!');
});