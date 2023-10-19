const router = require("express").Router();
const {
  getAllUsers,
  getOneUser,
  createUser,
  addFriend,
  deleteFriend,
  deleteUser,
  updateUser,
} = require("../../controllers/userController");
//api/users
router.route("/").get(getAllUsers).post(createUser);

router.route("/:userId").get(getOneUser).delete(deleteUser).put(updateUser)

router.route("/:userId/friends/:friendId").post(addFriend).delete(deleteFriend)

module.exports = router;
