const axios = require('axios').default;
//list all favorites messages in database
const allPinnedMsgs= async function(db){
  const allFavMsgs = await db
  .query(`
  SELECT text, url, image_url,name,display_phone,rating,address_street,address_city,address_state,address_zipcode
  FROM favorited_chats
  `)
  return allFavMsgs
}
exports.allPinnedMsgs= allPinnedMsgs;
//add favorited message to database
const favoritedMsg = async function(room_id,
  user_id,
  text,
  url,
  image_url,
  name,
  display_phone,
  rating,
  address_street,
  address_city,
  address_state,
  address_zipcode,
  db) {
  let values= [room_id, user_id, text, url, image_url,name,display_phone,rating,address_street,address_city,address_state,address_zipcode]
  const newFavoritedMsg = await db 
  .query(`INSERT INTO favorited_chats (room_id, user_id,text,url,image_url,name,display_phone,rating,address_street,address_city,address_state,address_zipcode)
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
  RETURNING *
  `, values)
return newFavoritedMsg
}
exports.favoritedMsg=favoritedMsg;

