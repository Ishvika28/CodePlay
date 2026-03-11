const express = require("express")
const router = express.Router()

const { submitCode, getUserSubmissions } = require("../controllers/submissionController")
const protect = require("../middleware/authMiddleware")

router.post("/", protect, submitCode)

router.get("/user/:id", protect, getUserSubmissions)

module.exports = router