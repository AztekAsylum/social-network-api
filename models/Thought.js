const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");

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
      //getter here
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
      virtuals: true,
    },
    id: false,
  }
);

const Thought = model("thought", thoughtSchema);

module.exports = Thought;
