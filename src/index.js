const parser = require("body-parser");
const express = require('express');
const app = express();
const port = 3000;
const componenteRoutes = require("./routes/componente");
const mongoose = require("mongoose");
require('dotenv').config();

app.use(parser.urlencoded({ extended: false })); 
app.use(parser.json()); 

app.use("/api", componenteRoutes);
app.use(express.json());

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Conexión exitosa"))
    .catch((error) => console.log(error));

app.listen(port, () => {
    console.log(`conexion con el puerto: ${port}`)
});
