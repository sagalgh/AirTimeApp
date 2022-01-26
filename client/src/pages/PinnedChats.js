import axios from 'axios';
import React, {useEffect} from 'react';
import Box from '@mui/material/Box';
import GradeIcon from '@mui/icons-material/Grade';
import PinnedChatList from '../components/PinnedChatList';
import '/Users/sagalafrah/lighthouse/w11/AirTimeApp/client/src/pinnedchats.css'

const PinnedChats = (props) => {

  console.log("props on pinned page", props.pinnedMessages, props.users)
  useEffect(()=>{
    axios.get('http://localhost:9000/api/pinnedmsgs')
    .then((response) =>{
      props.loadPinnedMessages(response.data)
    })
  },[])

  return (
    <body className='cover'>
  <div>
  <Box elevation={10} style={{marginLeft: '100px'}}>
    <h1 className ='titlecard' style={{fontFamily: 'Helvetica' , fontWeight: 300, fontSize: '70px', textAlign: 'center' ,marginRight: '20px', padding: '20px', width: '700px', borderRadius: '25px'}}> Your Favorites<GradeIcon/></h1>
    </Box>
    <PinnedChatList pinnedMessages={props.pinnedMessages} />
  </div>
  </body>
  )
};

export default PinnedChats;
