import React from 'react';
import { Card } from 'react-bootstrap';

const PinnedChatItem = (props) => {

return (
  <div>
    <Card  className="bg-dark text-black" border="dark" style={{ width: '40rem', marginTop: "50px", marginLeft: '400px'}}>
  <Card.Img alt={props.message.name} variant="top" src={props.message.image_url} />
  <Card.Body>
    <Card.Title   style={{ display:"flex", justifyContent:"center"}}><a href={props.message.url}>{props.message.name}</a></Card.Title>
    <Card.Text style={{color:"black"}}>
    
  
    </Card.Text>
  </Card.Body>

</Card>


  </div>
  )

}

export default PinnedChatItem
