var express = require('express');
var router = express.Router();
const databaseHelper = require("../databaseHelper/databaseHelper")
const db = require('../db/index')


/* GET home page. */
// router.get('/', function(req, res, next) {
//   console.log("SAGAL")
//   // res.render('index', { title: 'Express' });
// });
// module.exports = (db) => {
router.get('/test', function(req,res,next){
  console.log("SAGAL")
})
//user can favorite items in chat
router.post('/favorites', function(req,res){
  const room_id= req.body.roomID
  const user_id = req.body.userID
  const text= req.body.text
  databaseHelper.favoritedMsg(room_id, user_id, text,db)
  .then((newFavoritedMsg) => {
          if(!newFavoritedMsg){
            res.send({error: "no favorited msg"})
            return;
          }
          res.json(newFavoritedMsg);
        })
        .catch((e) => { 
          console.log(e)
          res.send({error:"server unavailable"})
        });
})
// }
module.exports = router;
