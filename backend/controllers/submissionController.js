const Submission = require("../models/Submission")

// submit code
const submitCode = async (req, res) => {

  try {

    const { room, problem, code, language } = req.body
    
    const userId = req.user._id

    if (!room || !problem || !code) {
      return res.status(400).json({
        message: "Room, problem and code are required"
      })
    }

    // mock evaluation
    const status = Math.random() > 0.5 ? "Accepted" : "Wrong Answer"

    const submission = await Submission.create({
      user: userId,
      room,
      problem,
      code,
      language,
      status,
      timeSubmitted: new Date()
    })

    res.json({
      message: "Submission received",
      result: status,
      submission
    })

  } catch (error) {

    console.error(error)

    res.status(500).json({
      message: "Submission failed"
    })

  }

}


// get submissions of a user
const getUserSubmissions = async (req, res) => {

  try {

    const submissions = await Submission.find({
      user: req.params.id
    }).sort({ timeSubmitted: -1 })

    res.json(submissions)

  } catch (error) {

    res.status(500).json({
      message: "Error fetching submissions"
    })

  }

}

module.exports = { submitCode, getUserSubmissions }