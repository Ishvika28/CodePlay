const express = require("express")
const router = express.Router()

const {
  getProblems,
  getProblemById,
  createProblem
} = require("../controllers/problemController")

router.post("/", createProblem)

router.get("/", getProblems)

router.get("/:id", getProblemById)

module.exports = router