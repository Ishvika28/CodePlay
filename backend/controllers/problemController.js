const Problem = require("../models/Problem")

// get all problems
const getProblems = async (req, res) => {

  try {

    const problems = await Problem.find()

    res.json(problems)

  } catch (error) {
  console.log(error)
  res.status(500).json({
    message: error.message
  })
}

}

const createProblem = async (req, res) => {

  const { title, description, difficulty, sampleTestCases, hiddenTestCases } = req.body

  try {

    const problem = await Problem.create({
      title,
      description,
      difficulty,
      sampleTestCases,
      hiddenTestCases
    })

    res.status(201).json(problem)

  } catch (error) {

    res.status(500).json({
      message: "Failed to create problem"
    })

  }

}

// get single problem
const getProblemById = async (req, res) => {

  const { id } = req.params

  try {

    const problem = await Problem.findById(id)

    if (!problem) {
      return res.status(404).json({
        message: "Problem not found"
      })
    }

    res.json(problem)

  } catch (error) {

    res.status(500).json({
      message: "Error fetching problem"
    })

  }

}

module.exports = {
  getProblems,
  getProblemById,
  createProblem
}
