//add favorited message to database
const favoritedMsg = async function(chat_room_id, user_id, text,db) {
  let values= [chat_room_id, user_id, text]
  const newFavoritedMsg = await db 
  .query(`INSERT into favorited_chats (chat_room_id, user_id, text)
  VALUES ($1, $2, $3)
  RETURNING *
  `, values)
return newFavoritedMsg
}
exports.favoritedMsg=favoritedMsg;