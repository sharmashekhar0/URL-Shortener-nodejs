const express = require("express");
const { handleGetHomepage } = require("../controllers/url");
const router = express();

router.get("/", handleGetHomepage);

module.exports = router;
