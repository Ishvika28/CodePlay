const Problem = require("../models/Problem")
const Room = require("../models/Room")

// generate random room code
const generateRoomCode = () => {
  return Math.random().toString(36).substring(2, 8).toUpperCase()
}

// create room
const createRoom = async (req, res) => {

  const { roomName } = req.body

  try {

    const roomCode = generateRoomCode()

    // get random problems
    const problems = await Problem.find().limit(3)

    const room = await Room.create({
      roomName,
      roomCode,
      host: req.user._id,
      participants: [req.user._id],
      problems: problems.map(p => p._id)
    })

    res.json(room)

  } catch (error) {

    console.log(error)

    res.status(500).json({
      message: "Failed to create room"
    })

  }

}

// join room
const joinRoom = async (req, res) => {

  const { roomCode } = req.body

  try {

    const room = await Room.findOne({ roomCode })

    if (!room) {
      return res.status(404).json({ message: "Room not found" })
    }

    if (!room.participants.includes(req.user._id)) {
      room.participants.push(req.user._id)
      await room.save()
    }

    res.json(room)

  } catch (error) {

    res.status(500).json({ message: "Failed to join room" })

  }

}

// get room details
const getRoom = async (req, res) => {

  const { roomCode } = req.params

  try {

    const room = await Room.findOne({ roomCode })
      .populate("participants", "name email")
      .populate("problems")

    if (!room) {
      return res.status(404).json({ message: "Room not found" })
    }

    res.json(room)

  } catch (error) {

    res.status(500).json({ message: "Error fetching room" })

  }

}

module.exports = {
  createRoom,
  joinRoom,
  getRoom
}