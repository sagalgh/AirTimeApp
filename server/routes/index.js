var express = require("express");
var router = express.Router();
const databaseHelper = require("../databaseHelper/databaseHelper");
const addYelpUrl = require("../helpers/chatHelperFunctions");
const db = require("../db/index");

router.get("/test", function (req, res, next) {
  console.log("SAGAL");
});

//user can favorite items in chat
router.post("/favorites", async function (req, res) {
  const room_id = req.body.roomID;
  const user_id = req.body.userID;
  const text = req.body.text;
  const response = await addYelpUrl.addYelpUrl(text)
const url = response.url
const image_url= response.image_url
const name= response.name

  return databaseHelper
    .favoritedMsg(room_id, user_id, text, url,image_url,name, db)
    .then((response) => {
      res.json(response.rows[0]);
    })
    .catch((e) => {
      console.log(e);
    });
});
//user can view all favorites items in chat
router.get("/pinnedmsgs", function (req, res, next) {
  databaseHelper
    .allPinnedMsgs(db)
    .then((response) => {
      res.json(response.rows);
    })
    .catch((e) => {
      console.log(e);
    });
});

module.exports = router;
