const { Thought, User } = require("../models");

module.exports = {
  async getAllUsers(req, res) {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  async getOneUser(req, res) {
    try {
      const users = await User.findOne({ _id: req.params.userId })
        .populate("thoughts")
        .populate("friends");

      res.status(200).json(users);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  async updateUser(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!user) {
        return res
          .status(404)
          .json({ message: "No application with this id!" });
      }

      res.json(user);
    } catch (error) {}
  },

  async deleteUser(req, res) {
    try {
      const user = await User.findOneAndDelete({ _id: req.params.userId });

      if (!user) {
        return res.status(404).json({ message: "No user with that ID" });
      }
      res.json({ message: "User and associated apps deleted!" });
    } catch (error) {
      res.status(500).json(error);
    }
  },

  async addFriend(req, res) {
    try {
      const friendId = req.params.friendId;
      const updateUser = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { friends: friendId } },
        { runValidators: true, new: true }
      );
      res.status(200).json(updateUser);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  async deleteFriend(req, res) {
    try {
      const friendId = req.params.friendId;
      const updateUser = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { friends: friendId } },
        { runValidators: true, new: true }
      );

      res.status(200).json(updateUser);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
