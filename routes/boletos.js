const express = require("express");

const boletoController = require("../controllers/boleto");

const router = express.Router();

// Applying to try to callback image on the request body
router.get("/:id", boletoController.boletoFindId);

module.exports = router;