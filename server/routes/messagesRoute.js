const {
  addMessage,
  getAllMessages,
} = require("../controllers/messagesController");

const router = require("express").Router();

router.post("/addmsg/", addMessage);
router.post("/getmsg/", getAllMessages);

module.exports = router;

// const { addMessage, getMessages } = require("../controllers/messageController");
// const router = require("express").Router();

// router.post("/addmsg/", addMessage);
// router.post("/getmsg/", getMessages);

// module.exports = router;
