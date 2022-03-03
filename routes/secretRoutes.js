const router = require("express").Router();

router.get("/votaciones", (req, res, next) => {
  let animales = [
      { id: 1, nombre: "Elefante" },
      { id: 2, nombre: "Perro" },
      { id: 1, nombre: "Tigre" }
    ];

    res.json({"animales": animales})
  next();
});

module.exports = router;