import express from "express";
import mongoose from "mongoose";
import { PORT, mongoDBURL } from "./config.js";
import { Book } from "./models/BookModel.js";


const app = express();

app.get('/', (req, res) => {
});

// Connect to MongoDB
mongoose.connect(mongoDBURL)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log('Error: Unable to connect to MongoDB', error);
    });