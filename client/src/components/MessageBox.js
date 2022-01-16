import React from 'react'
import { useNavigate } from 'react-router-dom';

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
                            src={exit}
                            onClick={disconnect}
                        ></img>
                    </div>
                </div>
            </div>
            </div>
  )
}

export default MessageBox
