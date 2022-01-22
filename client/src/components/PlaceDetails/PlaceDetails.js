// import React from 'react';
import React from 'react';
import {
  Box,
  Modal,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
} from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import PaidIcon from '@mui/icons-material/Paid';
import useStyles from './style';
import BasicModal from '/Users/sagalafrah/lighthouse/w11/AirTimeApp/client/src/components/modals.js'


const PlaceDetails = ({ place, selected, refProp }) => {
  if (selected)
    refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  const classes = useStyles();
 
  return (
    <Card
      elevation={6}
      style={{
        borderRadius: 60,
        overflow: 'hidden',
        backgroundColor: '#FFF',
      }}
    >
      <CardMedia
        style={{ height: 250}}
        image={
          place.photo
            ? place.photo.images.large.url
            : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'
        }
        title={place.name}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant='h5'
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {place.name}
        </Typography>
        <Box display='flex' justifyContent='center' my={2}>
          <Rating name='read-only' value={Number(place.rating)} readOnly />
        </Box>

        {place?.cuisine?.map(({ name }) => (
          <Chip display='flex' justifyContent='center' key={name} size='small' label={name} className={classes.chip} />
        ))}
        {place.address && (
          <Typography
            gutterBottom
            variant='body2'
            color='textSecondary'
            className={classes.subtitle}
          >
            <LocationOnIcon />
            {place.address}
          </Typography>
        )}
        {place.phone && (
          <Typography
            variant='body2'
            color='textSecondary'
            className={classes.spacing}
          >
            <PhoneIcon /> {place.phone}
          </Typography>
        )}
      </CardContent>
      <CardActions
        style={{
          paddingLeft: '105px',
          paddingRight: '120px',
        }}
      >
        <Button
          size='small'
          color='primary'
          onClick={() => window.open(place.web_url, '_blank')}
        >
          <RemoveRedEyeIcon style={{ color: '#fc7b54' }} />
        </Button>
        <Button
          size='small'
          color='primary'
          onClick={() => window.open(place.website, '_blank')}
        >
          <RestaurantMenuIcon style={{ color: '#902bf5' }} />
        </Button>
        <BasicModal/>
        
      </CardActions>
    </Card>
  );
};


export default PlaceDetails;
