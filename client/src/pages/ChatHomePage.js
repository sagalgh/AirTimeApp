import React, { useState } from "react";
import * as Scroll from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import "../css/chatPage.css";
import '/Users/sagalafrah/lighthouse/w11/AirTimeApp/client/src/chathomepage.scss';
import Typography from '@mui/material/Typography';


 const ChatPage = (props) => {
  const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [room, setRoom] = useState("");
    
    function joinRoom(e) {
      if (e) e.preventDefault();
      props.setRoom({ room: room, username: username });
      navigate("/chatroom");
  }

    return (
        <div className="chatpage">
            <div className="">
                <div className="chatpage-header" style={{verticalAlign:'center'}}>
                    <div className="titleText">
                        <div className="row center">
                            <h1> Welcome to AirTime Connect!</h1>
                        </div>
                        <div className="row center">
                            <h3> Join chat rooms, and talk to other travelers.</h3>
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
                <div className="chatpage-bottom" style={{backgroundColor: '#A6CDE2'}}>
                <div className="progress">
                <Typography>
        <div className="progress_inner">
          <div className="progress_inner__step">
            <label htmlFor="step-1">Create a Username.</label>
          </div>
          <div className="progress_inner__step">
            <label htmlFor="step-2">Enter your flight number.</label>
          </div>
          <div className="progress_inner__step">
            <label htmlFor="step-3">Enter the chat room!</label>
          </div>
          <div className="progress_inner__step">
            <label htmlFor="step-4">Log out </label>
          </div>
          <div className="progress_inner__step">
            <label htmlFor="step-5">Have Fun!</label>
          </div>
          <input defaultChecked="checked" id="step-1" name="step" type="radio" />
          <input id="step-2" name="step" type="radio" />
          <input id="step-3" name="step" type="radio" />
          <input id="step-4" name="step" type="radio" />
          <input id="step-5" name="step" type="radio" />
          <div className="progress_inner__bar" />
          <div className="progress_inner__bar--set" />
          <div className="progress_inner__tabs">
            <div className="tab tab-0">
            <Typography component='h1' variant='h2' 
        style={{ color: '#2F6C8E',
                fontFamily: 'Nunito',
                 opacity: 0.9,
                 fontWeight: 900,
                 display: 'flex',
                 justifyContent: 'center'
                  }}>
              
              Create a Username.
            </Typography>
              <p>You can use any username you want with numbers and letters. Be ask creative as you like and feel free to use a nickname!</p>
            </div>
            <div className="tab tab-1">
            <Typography component='h1' variant='h2' 
        style={{ color: '#2F6C8E',
                fontFamily: 'Nunito',
                 opacity: 0.9,
                 fontWeight: 900,
                 display: 'flex',
                 justifyContent: 'center'
                  }}>
              
              Enter Your Flight #.
            </Typography>
              <p>Please enter the letters and the numbers on your lifht number. The format is usually 2 letters and 3-4 numbers. Check your boarding pass if you're unsure!</p>
            </div>
            <div className="tab tab-2">
            <Typography component='h1' variant='h2' 
        style={{ color: '#2F6C8E',
                fontFamily: 'Nunito',
                 opacity: 0.9,
                 fontWeight: 900,
                 display: 'flex',
                 justifyContent: 'center'
                  }}>
              
              Enter The Chat Room.
            </Typography>
              <p>You will be placed with people on your flight. You cannot join any other chat rooms, but feel free to get to know other adventurers. Who knows, maybe you'll make a friend! </p>
            </div>
            <div className="tab tab-3">
            <Typography component='h1' variant='h2' 
        style={{ color: '#2F6C8E',
                fontFamily: 'Nunito',
                 opacity: 0.9,
                 fontWeight: 900,
                 display: 'flex',
                 justifyContent: 'center'
                  }}>
              
              Log Out.
            </Typography>
              <p>Self-Explanatory. If you do logout, you won't lose your precious pins! Log back in to see all the cool places you want to travel to in the future.</p>
            </div>
            <div className="tab tab-4">
            <Typography component='h1' variant='h2' 
        style={{ color: '#2F6C8E',
                fontFamily: 'Nunito',
                 opacity: 0.9,
                 fontWeight: 900,
                 display: 'flex',
                 justifyContent: 'center'
                  }}>
              
              Have Fun!
            </Typography>
              <p>.....And be safe. Please do not share details of your trip such as hotels, hostels, and AirBnb's with strangers! You can always pull people to the side to chat 🤪 </p>
            </div>
          </div>
        </div>
        </Typography>
      </div>
                    </div>
            </div>
        </div>
    );
};

export default ChatPage

