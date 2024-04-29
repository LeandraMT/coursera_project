const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");

dotenv.config();

// database connection
mongoose.connect(process.env.MONGO_URI, { dbName: process.env.DB_NAME, useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch(err => {
        console.error("Failed to connect to MongoDB:", err);
    });


const port = process.env.PORT || 8005

const app = express();
app.use(express.json());


// Routes
const employeeRoutes = require("./routes/employeeRoutes");
const departmentRoutes = require("./routes/departmentRoutes");


// Endpoints
app.get("", (req, res) => {
    res.send("Apollonia Dental Clinic");
});


app.use("/employees", employeeRoutes);
app.use("/departments", departmentRoutes);



app.listen(port, () => {
    console.log("Server running on port", port);
});