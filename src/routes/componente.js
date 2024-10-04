const express = require("express");
const router = express.Router();
const componenteSchema = require("../models/componente");

router.post("/componentes",(req,res) => {
    const componente = componenteSchema(req,body);
    componente
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
});

module.exports = router;