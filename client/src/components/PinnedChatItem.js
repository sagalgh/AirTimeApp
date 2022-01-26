import React from 'react';
import { Card } from 'react-bootstrap';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import HomeIcon from '@mui/icons-material/Home';
import GradeIcon from '@mui/icons-material/Grade';
import '/Users/sagalafrah/lighthouse/w11/AirTimeApp/client/src/pinnedchats.css'
import { BackgroundColor } from 'chalk';

const PinnedChatItem = (props) => {

return (
  <div>
    <Card style={{ width: '32rem', marginTop: "50px", marginLeft: '200px', backgroundColor: '#1C2E4A', borderRadius: '60px'}}>
  <Card.Img style={{borderTopLeftRadius: '60px', borderTopRightRadius: '60px'}} alt={props.message.name} variant="top" src={props.message.image_url} />
  <Card.Body style ={{BackgroundColor: '#1C2E4A'}}>
    <Card.Title   style={{ display:"flex", justifyContent:"center", fontSize: '30px', backgroundColor: '#031531', borderRadius: '25px', marginBottom: '20px', padding: '10px'}}><a href= {props.message.url}>{props.message.name}</a>  </Card.Title>
    <Card.Text style={{color:"white", fontSize: '18px'}}>
  <p><LocalPhoneIcon style={{color: '#FC7B54', marginRight:'10px'}}></LocalPhoneIcon> Phone: {props.message.display_phone}</p>
  <p><HomeIcon style={{color: '#902BF5', marginRight:'10px'}}></HomeIcon>Address: {props.message.address_street}, {props.message.address_city}, {props.message.address_state}, {props.message.address_zipcode}</p>
  <p><GradeIcon style={{color: '#30B9CD', marginRight:'10px'}}></GradeIcon>Rating: {props.message.rating}</p>

    </Card.Text>
  </Card.Body>

</Card>


  </div>
  )

}

export default PinnedChatItem
