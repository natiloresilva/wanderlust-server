const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const Travel = require("../models/travels");
const User = require("../models/user");

//              >> RUTA PRINCIPAL DE VIAJES (GET)
//GET
//esta es la ruta principal, donde estarán todos los viajes (por realizar y realizados).
router.get("/trips", (req, res, next) => {
  Travel.find({ travelOrganizer: req.session.currentUser._id })
    .then((allTheTravels) => {
      res.json(allTheTravels);
    })
    .catch((err) => {
      res.json(err);
    });
});

//              >> RUTA CREAR VIAJE (POST)
//POST
//esta es la ruta que el usuario tendrá disponible para crear un viaje.
router.post("/trips", async (req, res, next) => {
  const { travelCity, startDate, returnDate } = req.body;
  console.log(travelCity, startDate, returnDate);
  const newTrip = {
    travelCity,
    startDate,
    returnDate,
    travelOrganizer: req.session.currentUser._id,
    idActivities: [],
  };

  //agregamos el viaje al 'pendingTrips' del usuario
  try {
    const newTravel = await Travel.create(newTrip);
    const updateUser = await User.findByIdAndUpdate(
      req.session.currentUser._id,
      {
        $push: { pendingTrips: newTravel._id },
      },
      { new: true }
    );
    console.log(newTravel);
    res.status(200).json(newTravel);
  } catch (err) {
    res.json(err);
  }
});

//              >> RUTA PRINCIPAL DE VIAJES (POST)
//POST
//esta es la ruta principal, donde se asignaran los viajes ya realizados a completedTrips.
router.post("/trips/:id/completed", async (req, res) => {
  const userResult = await User.findByIdAndUpdate(
    req.session.currentUser._id,
    {
      $pull: {
        pendingTrips: req.params.id,
      },
    },
    {
      new: true,
    }
  );

  const userResult2 = await User.findByIdAndUpdate(
    req.session.currentUser._id,
    {
      $push: {
        completedTrips: req.params.id,
      },
    }
  );

  req.session.currentUser = userResult2;
  res.json({ message: `Trip with ${req.params.id} is updated successfully.` });
});

//              >> RUTA VIAJE DETAILS (GET)
//GET
//esta es la ruta que el usuario tendrá disponible para entrar en un viaje en específico.
router.get("/trips/:id", (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Travel.findById(req.params.id)
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
router.put("/trips/:id", (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  const { travelCity, startDate, returnDate } = req.body;

  Travel.findByIdAndUpdate(
    req.params.id,
    { travelCity, startDate, returnDate },
    { new: true }
  )
    .then(() => {
      res.json({
        message: `Trip with ${req.params.id} is edited successfully.`,
      });
    })
    .catch((err) => {
      res.json(err);
    });
});

//              >> RUTA VIAJE DELETE (DELETE)
//DELETE
//esta es la ruta que el usuario tendrá para borrar un viaje.
router.delete("/trips/:id", (req, res) => {
      Travel.findByIdAndRemove(req.params.id)
      .then(() => {
        res.json({
          message: `Trip with ${req.params.id} is updated successfully.`,
        })
      })
    .catch((err) => {
      res.json(err);
    });
});

//              >> RUTA AGREGAR ACTIVIDAD (POST)
//POST
//esta es la ruta en la que el usuario podra agregar things-to-do traidas de la api e insertarlas en su viaje.
//id del viaje en front.
router.put("/trips/:id/addThing/:idActivity", (req, res) => {
  const {activity} = req.body 
  console.log(activity)
  Travel.findByIdAndUpdate(
    req.params.id,
    {
      $push: {
        idActivities: req.body.activity,
      },
    },
  )
  .then((resultAdd) => res.json(resultAdd).status(200))
  .catch((error) => res.json(error))
});

//              >> RUTA QUITAR ACTIVIDAD (POST)
//POST
//esta es la ruta en la que el usuario podra quitar cosas de su lista de things-to-do del viaje.
router.put("/trips/:id/removeThing/:idActivity", async (req, res) => {
  const removeResult = await Travel.findByIdAndUpdate(
    req.params.id,
    {
      $pull: {
        idActivities: req.params.idActivity,
      },
    },
    {
      new: true,
    }
  );
  req.session.currentUser = removeResult;
  res.json({
    message: `Activity with ${req.params.id} was successfully removed.`,
  });
});

module.exports = router;
