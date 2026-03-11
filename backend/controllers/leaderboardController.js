const Submission = require("../models/Submission")

const getLeaderboard = async (req, res) => {

  try {

    const roomCode = req.params.roomCode

    const submissions = await Submission.find({
      room: roomCode,
      status: "Accepted"
    }).populate("user")

    const leaderboard = {}

    submissions.forEach(sub => {

      const userId = sub.user._id

      if (!leaderboard[userId]) {

        leaderboard[userId] = {
          name: sub.user.name,
          solved: 0,
          totalTime: 0
        }

      }

      leaderboard[userId].solved += 1
      leaderboard[userId].totalTime += new Date(sub.timeSubmitted).getTime()

    })

    const result = Object.values(leaderboard).sort((a, b) => {

      if (b.solved !== a.solved) {
        return b.solved - a.solved
      }

      return a.totalTime - b.totalTime

    })

    res.json(result)

  } catch (error) {

    res.status(500).json({
      message: "Leaderboard error"
    })

  }

}

module.exports = { getLeaderboard }