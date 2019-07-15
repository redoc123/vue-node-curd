const express = require('express')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const restify = require('express-restify-mongoose')
const app = express()
const cors = require('cors')
const router = express.Router()

app.use(bodyParser.json())
app.use(methodOverride())
app.use(cors())

mongoose.connect('mongodb://localhost:27017/beepee', {useNewUrlParser: true})

restify.serve(router, mongoose.model('User', new mongoose.Schema({
  name: String
})))

app.use(router)

app.listen(3000, () => {
  console.log('Express server listening on port 3000')
})
