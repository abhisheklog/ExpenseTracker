const express = require("express");
const dotenv = require('dotenv');

const connectDB = require('./config/db');
const app = express();

dotenv.config({path: './config/.env'})
connectDB();


const userroutes = require('./routes/users');
app.use('/api/user', userroutes);


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server is running on port ${port}`));

