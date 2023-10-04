const express = require("express");
const {
	handleGenerateNewShortUrl,
	handleRedirectRequest,
	handleGetAnalytics,
} = require("../controllers/url");

const router = express.Router();

router.post("/url", handleGenerateNewShortUrl);
router.get("/:shortId", handleRedirectRequest);
router.get("/analytics/:shortId", handleGetAnalytics);

module.exports = router;
