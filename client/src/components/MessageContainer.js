import React, {useState, useEffect}  from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import  axios  from "axios";

const MessageContainer = (props) => {
    const[likedMessage, setLikedMessage] = useState(false);
    const clickHandler= function(){
        setLikedMessage(!likedMessage)
        axios.post('http://localhost:9000/api/favorites', {roomID: props.message.roomId, userID: props.message.user["id"], text: props.message.body})
        .then((response) => {
            console.log(response)
        })
      }
    return (
    <div className="row message">
    <div className="col">
        <div className="row">
            <small className="username">{props.user.username}</small>
        </div>
        <div className="row ">
            <p className="wrap messageText">{props.message.body}</p>
        </div>
        <div className="row timeStamp">
            <small>{props.message.time} <FontAwesomeIcon icon={faStar} onClick={clickHandler} color= {likedMessage?"rgba(255, 213, 0, 0.966)": "white"} /></small>
        </div>
    </div>
</div>
  )
}

export default MessageContainer
