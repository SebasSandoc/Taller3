const mongoose = require("mongoose");
const componenteSchema = mongoose.Schema({
    id:{
        type: Number,
        required: true
    },
    nombre:{
        type: String,
        required: true
    },
    fabricante:{
        type: String,
        required: true
    },
    tipo:{
        type: String,
        required: true
    },
    anio:{
        type: Number,
        required: true
    },
    precio:{
        type: Number,
        required: true
    },
    stock:{
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("Componente",componenteSchema);