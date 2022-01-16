import React from 'react'
// import user from "../resources/img/user.svg";

const User = (props) => {
  return (
    <div className="userlist-username">
            <img alt="user-icon" className="avatar" />
            <span>{props.user.username}</span>
        </div>
  )
}

export default User
