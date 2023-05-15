const express = require("express");
const router = express.Router();
const Message = require("../model/message");

router.post("/", (req, res) => {
  delete req.body._id;
  const message = new Message({
    ...req.body,
  });
  message
    .save()
    .then(() => res.redirect("http://localhost:3000/"))
    .catch((error) => {
      res.status(400).json({ error });
    });
});

module.exports = router;
