require('dotenv').config();
const express = require('express');
const ejs = require('ejs');



const app = express();
// const upload = require('express-fileupload');
const path = require('path');
const cors = require('cors');
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());





const initMongoDB = require('./config/db');
initMongoDB();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

const coreOptions = {
        origin: process.env.ALLOWED_CLINETS.split(',')
    }
    // template enjine 
app.use(cors(coreOption))
app.set('views', path.join(__dirname, '/views'))
app.set('view engine ', 'ejs')
    //Routes
app.use("/api/files", require('./routes/files'))
app.use('/files', require('./routes/show'));
app.use('/files/download', require('./routes/download'))


app.listen(PORT, console.log(`Listening on port ${PORT}.`));