import React from 'react'


const User = (props) => {
  return (
    <div className="userlist-username">
            {/* <img alt="user-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/59/User-avatar.svg" className="avatar" /> */}
            <span>{props.user.username}</span>
        </div>
  )
}

export default User
