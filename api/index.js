const express = require('express');
const dotenv = require('dotenv');
const connectDB = require("./config/database");
const productRoutes = require('./routes/productRoutes');
const serviceRoutes = require('./routes/serviceRoutes');

dotenv.config();

connectDB(); // for connecting with our database
const app = express();

// As we need JSON data to be sent to client
app.use(express.json());

// Routes
app.use('/api/products',productRoutes);
app.use('/api/services',serviceRoutes);

const PORT = process.env.PORT;
try {
    app.listen(PORT, ()=>{
        console.log(`Server running on port ${PORT}`);
    })
} catch (error) {
    console.error("Could not connect to the server because : "+ error.message);
}
