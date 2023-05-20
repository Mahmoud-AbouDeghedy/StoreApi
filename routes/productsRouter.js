const express = require("express");

const produstsController = require("../controllers/productsController");

const router = express.Router();

router.route("/").get(produstsController.getAllProducts);
router.route("/static").get(produstsController.getAllProductsStatic);

module.exports = router;
