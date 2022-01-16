import React from 'react'
import User from './User'
const Users = (props) => {
  return (
    <div className="userList-container">
            <div className="userList">
                <div id="userlist-title" className="row center">
                    <p>Users</p>
                </div>
                <div id="users">
                    {props.users.map((user, index) => (
                        <User key={index} user={user} />
                    ))}
                </div>
            </div>
        </div>
  )
}

export default Users
