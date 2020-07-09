const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const cors = require('cors')
require('dotenv').config()

const {test} = require('./routes/testRoute')

app.use(bodyParser.json())
app.use(cors())
test(app);


mongoose.connect(process.env.backendURL, 
    {useNewUrlParser: true, useUnifiedTopology: true}).
    then(res => res).catch(e => console.log(e))



app.listen(3002, () => console.log('Server Started'))