const express = require("express");
const router = express.Router();
const Message = require("../model/message");

router.post("/", (req, res) => {
  delete req.body._id;
  console.log(req.body.nom);
  const message = new Message({
    ...req.body,
  });
  message
    .save()
    .then(() => res.status(201).json({ message: "Message enregistré." }))
    .catch((error) => res.status(400).json({ error }));
});

module.exports = router;
