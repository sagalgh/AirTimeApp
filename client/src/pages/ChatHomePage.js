import React, { useState } from 'react';
import * as Scroll from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import '../css/chatPage.css';
import '../chathomepage.scss';
import '../chatlogin.css'
import ChatModal from '../chatmodal'

import Typography from '@mui/material/Typography';
import { typography } from '@mui/system';
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import CardHeader from '@mui/material/CardHeader'

const ChatPage = (props) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [room, setRoom] = useState('');

  function joinRoom(e) {
    if (e) e.preventDefault();
    props.setRoom({ room: room, username: username });
    navigate('/chatroom');
  }



  return (
<div className= 'cover'> 
<div style={{display: 'flex', justifyContent: 'center',}}>
<h1 style={{textAlign: 'center', fontSize:'48px' }}>Welcome to AirTime Connect!
<Card id='checkpoints' style={{marginTop: '60px'}} >
  <CardHeader id= 'tsacardheader' title='Drop-In Chat for people on the same flight.' style={{textAlign: 'center', marginBottom: '40px', fontSize: 'large'}} />
  <Box sx={{ minWidth: 600 }}>
  <div className="align">
    <div className="login">
      <form onSubmit={joinRoom}>
        <div>
          <label style={{fontFamily: 'Helvetica', fontWeight:300, fontSize: '30px'}}>Username</label>
          <input style={{marginBottom:'30px'}} type='text'
                    className='form-control'
                    value={username}
                    onInput={(e) => setUsername(e.target.value)}
                    placeholder='Username'
                    required/>
        </div>
        <div>
          <label style={{fontFamily: 'Helvetica', fontWeight:300, fontSize: '30px'}}>Flight Number</label>
          <input type='text'
          style={{marginBottom:'30px'}}
                    className='form-control'
                    placeholder='Flight number'
                    value={room}
                    onInput={(e) => setRoom(e.target.value)}
                    required
                  /> 
        </div>
        <div>
          <input style={{
                        
                        borderRadius: '25px',
                        backgroundColor: '#912BF6',
                        marginRight: '80px',
                        marginTop: '90px'
                        
                      }} 
                      className="button" type="submit"  /> <ChatModal/>
        </div>
      </form>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" className="icons">
      <symbol id="icon-lock" viewBox="0 0 448 512">
        <path d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z" />
      </symbol>
    </svg>
  </div>
  </Box>
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'flex-end',
      p: 2,
    }}
  >
  </Box>
</Card>
</h1>
</div>
</div>

  );
};

export default ChatPage;

