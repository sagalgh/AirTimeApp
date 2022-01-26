import React from 'react';
import PinnedChatItem from './PinnedChatItem';
const PinnedChatList = (props) => {
  console.log("ayoooo", props.pinnedMessages)
  return (
  <div>
   {props.pinnedMessages.map((message, index) => (
     <PinnedChatItem key={index} message={message} 
     />
     ))
     }
  </div>
  )
};

export default PinnedChatList;
