const express = require('express')
const app = express()
const api = require('./Routes/api')
const dotenv = require('dotenv')

const fileUpload = require("express-fileupload");
//Temp file uploader
app.use(fileUpload({useTempFiles: true}));
dotenv.config({
  path:'.env'
})
const port = process.env.PORT || 3300

const cookieParser = require('cookie-parser');
app.use(cookieParser())

//Required Cloudinary
const cloudinary = require('cloudinary');

//Body-Parse require
const bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

//cookies

const connectDB = require('./db/ConnectDB')
connectDB()

app.get('/', (req, res) => {
  res.send('Hello World!')
})






// API ROUTING
app.use('/api',api)


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${process.env.PORT}`)
})