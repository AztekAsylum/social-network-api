const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");
const dateTimeStamp = require("../utils/date-util");

// Schema to create User model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: () => dateTimeStamp(),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: {
      reactions: [reactionSchema],
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

const Thought = model("thought", thoughtSchema);

module.exports = Thought;
