const express =  require('express');
const app = express();
const cors = require('cors')
const bodyparser = require('body-parser')
const connect = require('./configs/db');

app.use(cors());
app.use(express.json())
app.use(bodyparser.json({extended:true}))
app.use(bodyparser.urlencoded({extended:true}))

app.use(require('./route'))

const PORT = 3001
app.listen(PORT ,() =>{
    console.log(`Server is listening on ${PORT}`)
})

connect();