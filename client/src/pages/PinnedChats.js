import axios from 'axios';
import React, {useEffect} from 'react';
import PinnedChatList from '../components/PinnedChatList';

const PinnedChats = (props) => {

  console.log("props on pinned page", props.pinnedMessages, props.users)
  useEffect(()=>{
    axios.get('http://localhost:9000/api/pinnedmsgs')
    .then((response) =>{
      props.loadPinnedMessages(response.data)
    })
  },[])

  return (
  <div>
    <h1>Favorited Recommendations</h1>
    <PinnedChatList pinnedMessages={props.pinnedMessages} />
  </div>
  )
};

export default PinnedChats;
