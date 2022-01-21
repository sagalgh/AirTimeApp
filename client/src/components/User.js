import React from 'react'
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const User = (props) => {
  return (
    <div className="userlist-username">
            <span><FontAwesomeIcon icon={faUserAlt} /> {props.user.username}</span>
        </div>
  )
}

export default User
