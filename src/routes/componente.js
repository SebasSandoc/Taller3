const express = require("express");
const router = express.Router();
const componenteSchema = require("../models/componente");

router.post("/componentes", (req, res) => {
    const componente = componenteSchema(req.body);
    componente
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
});

router.get("/componentes", (req, res) => {
    componenteSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));

});

router.get("/componentes/:id", (req, res) => {
    const { id } = req.params;
    componenteSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
});

router.put("/componentes/:id", (req, res) => {
    const { id } = req.params;
    const { idInv, nombre, fabricante, tipo, anio, precio, stock } = req.body;
    componenteSchema
        .updateOne({ _id: id }, {
            $set: { idInv, nombre, fabricante, tipo, anio, precio, stock }
        })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

router.delete("/componentes/:id", (req, res) => {
    const { id } = req.params;
    componenteSchema
        .findByIdAndDelete(id)
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json({ message: error });
        });
});

module.exports = router;