const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const Travel = require("../models/travels");
const User = require("../models/user");

//              >> PAGINA DE PERFIL (GET)
//GET
//esta es la ruta principal, donde se podra acceder al perfil del usuario.
router.get("/profile", (req, res, next) => {
  User.findById(req.params.id)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.json(err);
    });
});

//              >> RUTA VIAJE EDIT (PUT)
//PUT
//esta es la ruta que el usuario tendrá para editar un viaje.
router.put("/editProfile/:id", (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  const { city, bio } = req.body;

  User.findByIdAndUpdate(req.params.id, { city, bio }, { new: true })
    .then((user) => {
      res.json({
        user,
        message: `Profile with ${req.params.id} was edited successfully.`,
      });
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
