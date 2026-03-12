const mongoose = require("mongoose")

const roomSchema = new mongoose.Schema({

  roomName: {
    type: String,
    required: true
  },

  roomCode: {
    type: String,
    required: true,
    unique: true
  },

  host: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  participants: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  ],

  problems: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Problem"
    }
  ],

  status: {
    type: String,
    enum: ["waiting", "running", "finished"],
    default: "waiting"
  }

}, { timestamps: true })

module.exports = mongoose.model("Room", roomSchema)