import React from 'react'
import user from "../resources/img/user.svg";

const User = () => {
  return (
    <div className="userlist-username">
            <img alt="user-icon" src={user} className="avatar" />
            <span>{props.user.username}</span>
        </div>
  )
}

export default User
