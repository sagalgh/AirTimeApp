import React from 'react'
import { useNavigate } from 'react-router-dom';
import MessageContainer from './MessageContainer';
import UserMessages from './UserMessages';

// import exit from "../resources/img/exit.svg";

const MessageBox = (props) => {
  const navigate = useNavigate();
  function disconnect() {
  navigate('/');
  }
  
  return (
    <div className="col messageBox-container">
            <div className="row messageBox-container-header">
                <div className="col">
                    <p>Room: {props.roomId} </p>
                </div>
                <div className="col text-right">
                    <div className="row right text-right">
                        <p style={{ lineHeight: "3vh" }}>
                            {props.users.length}{" "}
                            {`${props.users.length === 1 ? "user" : "users"}`}{" "}
                            online
                        </p>
                        <img
                            alt="exit-button"
                            id="exit-btn"
                            // src={exit}
                            onClick={disconnect}
                        ></img>
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
            
  )
}

export default MessageBox
