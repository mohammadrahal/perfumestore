require('dotenv').config();
require('./config/database');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
// const query = require('./config/queries')

const app = express();
const PORT = process.env.PORT
app.use(bodyParser.json());
app.use(cors());

app.listen(PORT, () =>{
console.log(`Server is running on http://localhost:${PORT}`)
})