// index.js

const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./routes/products.route.js");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Use the product routes
app.use('/', productRoutes);

// Connect to the database
mongoose.connect("mongodb+srv://syedaffanhameed2000:wvdVyeEEY5QKTwiE@nodecluster.siziuxx.mongodb.net/?retryWrites=true&w=majority&appName=NodeCluster")
    .then(() => {
        console.log("Connected to the Database");
        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
    })
    .catch(() => {
        console.log("Did not connect");
    });
