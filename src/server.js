const express = require('express')
const app = express()
const port = 8080

// config template engine
app.set('views','./src/views/')
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/hoidanit', (req, res) => {
    // res.send('Hello World!')
    res.render('sample.ejs')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})