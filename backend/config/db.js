const express = require('express');
const mongoose = require('mongoose');


const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_ATLAS);
        console.log(`mongodb connected: ${conn.connection.host}`)
    
    } catch (error) {
        console.log("mongodb not connected error");
    }
}

module.exports = connectDB;
