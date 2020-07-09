const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const cors = require('cors')
require('dotenv').config()



app.use(bodyParser.json())
app.use(cors())


mongoose.connect(process.env.backendURL, 
    {useNewUrlParser: true, useUnifiedTopology: true}).
    then(res => res).catch(e => console.log(e))



app.listen(3002, () => console.log('Server Started'))