const express = require('express');
const dotenv = require('dotenv');
const connectDB = require("./config/database");
const productRoutes = require('./routes/productRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
const cors = require('cors');
const path=require('path')
const app = express();


app.use(cors());
app.use(express.static(path.join(__dirname,"client/build")))
dotenv.config();

connectDB(); // for connecting with our database
// As we need JSON data to be sent to client
app.use(express.json());

app.get('/', (req,res)=>{
    res.json({message: "API running..."});
})

// Routes
app.use('/api/products',productRoutes);
app.use('/api/services',serviceRoutes);

const PORT = process.env.PORT || 5000;
try {
    app.listen(PORT, ()=>{
        console.log(`Server running on port ${PORT}`);
    })
} catch (error) {
    console.error("Could not connect to the server because : "+ error.message);
}
