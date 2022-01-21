import React from 'react'
import { useNavigate } from 'react-router-dom';
import MessageContainer from './MessageContainer';
import UserMessages from './UserMessages';
import { faCommentDots, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const MessageBox = (props) => {
  const navigate = useNavigate();
  
  function disconnect() {
  navigate('/');
  }
  const style ={
    lineHeight: "3vh",
    display: "flex",
    justifyContent: "flex-end"
  }
  console.log("messages", props.messages)
    return (
        <div className="col messageBox-container">
            <div className="row messageBox-container-header">
                <div className="col">
                    <p> <FontAwesomeIcon icon={faCommentDots} /> Room: {props.roomId}</p>
                </div>
                <div className="col text-right">
                    <div className="row right text-right">
                        <p style={style}>
                            {props.users.length}{" "}
                            {`${props.users.length === 1 ? "user" : "users"}`}{" "}
                            online
                            < FontAwesomeIcon icon={faSignOutAlt} onClick={disconnect} id="exit-btn"/>
                        </p>
                        
                       
                    </div>
                </div>
            </div>
            <div id="messages" className="row ">
                <div className="col">
                    {props.messages.map((msg, i) => {
                        if (msg.user.id === props.ownUser.id) {
                            return (
                                <UserMessages key={i} message={msg} />
                            );
                        } else {
                            return (
                                <MessageContainer
                                    key={i}
                                    message={msg}
                                    user={msg.user}
                                />
                            );
                        }
                    })}
                </div>
            </div>
        </div>
    );
}

export default MessageBox
