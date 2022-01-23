import React, { useState } from "react";
import * as Scroll from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import "../css/chatPage.css";
import '/Users/sagalafrah/lighthouse/w11/AirTimeApp/client/src/chathomepage.scss';
import Typography from '@mui/material/Typography';
import { typography } from "@mui/system";


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
        <div className ='chatpagebg'>
        <div className="chatpage">
            <div className="">
                <div className="chatpage-header">
                    <div className="titleText">
                        <div className="row center">
                        <Typography component='h1' variant='h2' 
        style={{ color: '#FFF',
                 display: 'flex',
                 justifyContent: 'center',
                 marginTop: '-60px'
                  }}>
              
              Welcome to AirTime Connect!
            </Typography>
                        </div>
                        <div className="row center">
                        <Typography component='h1' variant='h4' 
        style={{ color: '#FFF',
                 display: 'flex',
                 justifyContent: 'center'
                  }}>
              
              Join chat rooms, and talk to other travelers.
            </Typography>
                        </div>
                    </div>
                    <form onSubmit={joinRoom}>
                        <div className="center form-inline">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <label>
                                        <span className="input-group-text" style={{
                                            marginLeft: '-70px',
                                        borderTopRightRadius: '0px',
                                        borderBottomRadius:'0px',
                                        borderTopLeftRadius: '20px',
                                        borderBottomLeftRadius:'20px'
                                        }}>
                                            Username:
                                        </span>
                                    </label>
                                </div>
                                <input
                                style={{borderRadius:'20px',
                                        borderTopLeftRadius: '0px',
                                        borderBottomLeftRadius:'0px',
                                        width: '240px'}}
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
                                        <span className="input-group-text" style={{
                                        borderTopRightRadius: '0px',
                                        borderBottomRadius:'0px',
                                        borderTopLeftRadius: '20px',
                                        borderBottomLeftRadius:'20px'
                                        }}>
                                            Flight Number:
                                        </span>
                                    </label>
                                </div>
                                <input
                                style={{borderRadius:'20px',
                                        borderTopLeftRadius: '0px',
                                        borderBottomLeftRadius:'0px'}}
                                    type="text"
                                    className="form-control"
                                    placeholder="Flight number"
                                    value={room}
                                    onInput={(e) => setRoom(e.target.value)}
                                    required
                                />
                                <div className="input-group-append">
                                    <button
                                    style={{
                                        marginLeft: '10px',
                                        border: 0,
                                        borderRadius:'20px',
                                        backgroundColor: '#912BF6',
                                        float: 'right'}}
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
              <h5>You can use any username you want with numbers and letters. Be ask creative as you like and feel free to use a nickname!</h5>
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
              <h5>Please enter the letters and the numbers on your flight number. The format is usually 2 letters and 3-4 numbers. Check your boarding pass if you're unsure!</h5>
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
             <h5>You will be placed with people on your flight. You cannot join any other chat rooms, but feel free to get to know other adventurers. Who knows, maybe you'll make a friend! </h5>
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
              <h5>Self-Explanatory. If you do logout, you won't lose your precious pins! Log back in to see all the cool places you want to travel to in the future.</h5>
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
              <h5>.....And be safe. Please do not share details of your trip such as hotels, hostels, and AirBnb's with strangers! You can always pull people to the side to chat 🤪 </h5>
            </div>
          </div>
        </div>
        </Typography>
      </div>
                    </div>
            </div>
        </div>
        </div>
    );
};

export default ChatPage;

