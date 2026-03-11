const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema({

  user: String,

  roomId: String,

  problem: String,

  result: String

});

module.exports = mongoose.model("Submission", submissionSchema);