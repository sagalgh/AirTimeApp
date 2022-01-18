import React from 'react'
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const User = (props) => {
  return (
    <div className="userlist-username">
            {/* <img alt="user-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/59/User-avatar.svg" className="avatar" /> */}
            <span><FontAwesomeIcon icon={faUserAlt} /> {props.user.username}</span>
        </div>
  )
}

export default User
