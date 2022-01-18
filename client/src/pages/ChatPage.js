import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../css/chatPage.css";

 const ChatPage = (props) => {
  const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [room, setRoom] = useState("");
    
    function joinRoom(e) {
      if (e) e.preventDefault();
      props.setRoom({ room: room, username: username });
      navigate("/room");
  }

    return (
        <div className="chatpage">
            <div className="">
                <div className="chatpage-header">
                    <div className="titleText">
                        <div className="row center">
                            <h1> Welcome to Live-chat!</h1>
                        </div>
                        <div className="row center">
                            <h3> Join chat rooms, and talk to other travelers!</h3>
                        </div>
                    </div>
                    <form onSubmit={joinRoom}>
                        <div className="offset-2 col-8 ">
                            <div className="input-group flex-nowrap">
                                <div className="input-group-prepend">
                                    <label>
                                        <span className="input-group-text">
                                            Username:
                                        </span>
                                    </label>
                                </div>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={username}
                                    onInput={(e) => setUsername(e.target.value)}
                                    placeholder="Username"
                                    required
                                />
                            </div>
                        </div>
                        <br />
                        <div className="center form-inline">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <label>
                                        <span className="input-group-text">
                                            Flight Number:
                                        </span>
                                    </label>
                                </div>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Flight number"
                                    value={room}
                                    onInput={(e) => setRoom(e.target.value)}
                                    required
                                />
                                <div className="input-group-append">
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        Join
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                    <br />
                </div>
                <div className="chatpage-bottom">
                    <div className="row center">
                        <div className="col-3">
                            <div className="card ">
                                <div className="card-body text-dark">
                                    <h3 className="card-title ">
                                        <b>How it works:</b> 
                                    </h3>
                                    <hr />
                                    <p>
                                        Please enter your <strong>flight number</strong> and you will enter a chat room with other travelers on the <strong>same</strong> flight as you! Here are some conversation starters:
                                        <ul>
                                            <li>What are some <strong>foods</strong> you are looking forward to eating at your destination country? &#129424;  </li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                        </div>
                     
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatPage