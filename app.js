const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || 8080

const listRouter = require('./routes/router')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(listRouter)

app.listen(port, () => {
  console.log(`Now listening on port ${port}`)
})

