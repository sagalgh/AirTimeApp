const axios = require('axios').default;
//list all favorites messages in database
const allPinnedMsgs= async function(db){
  const allFavMsgs = await db
  .query(`
  SELECT text, url, image_url,name
  FROM favorited_chats
  `)
  return allFavMsgs
}
exports.allPinnedMsgs= allPinnedMsgs;
//add favorited message to database
const favoritedMsg = async function(room_id, user_id, text, url, image_url,name, db) {
  let values= [room_id, user_id, text, url, image_url,name]
  const newFavoritedMsg = await db 
  .query(`INSERT INTO favorited_chats (room_id, user_id,text,url,image_url,name)
  VALUES ($1, $2, $3, $4, $5, $6)
  RETURNING *
  `, values)
return newFavoritedMsg
}
exports.favoritedMsg=favoritedMsg;

