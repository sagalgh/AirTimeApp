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
import BasicModal from '../modals';
import { white } from 'chalk';

const PlaceDetails = ({ place, selected, refProp }) => {
  if (selected) refProp?.current?.scrollIntoView({ behavior: 'smooth' });
  const classes = useStyles();

  return (
    <Card
      elevation={6}
      style={{
        color: 'white',
        marginTop: '60px',
        borderRadius: 60,
        overflow: 'hidden',
        backgroundColor: '#1C2E4A',
      }}
    >
      <CardMedia
        style={{ height: 250 }}
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
            fontFamily: 'Helvetica Neue',
            fontWeight: 400,
            fontSize: 40,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {place.name}
        </Typography>
        <Box display='flex' justifyContent='center' my={2}>
          <Rating
            name='read-only'
            value={Number(place.rating)}
            readOnly
            style={{ color: '#fc7b54' }}
          />
        </Box>

        {place?.cuisine?.map(({ name }) => (
          <Chip
            display='flex'
            justifyContent='center'
            key={name}
            size='small'
            label={name}
            className={classes.chip}
            style={{ backgroundColor: '#EAD7D7', color: '#000' }}
          />
        ))}
        {place.address && (
          <Typography
            gutterBottom
            variant='body2'
            color='white'
            className={classes.subtitle}
          >
            <LocationOnIcon style={{ color: '#902bf5' }} />
            {place.address}
          </Typography>
        )}
        {place.phone && (
          <Typography variant='body2' color='white' className={classes.spacing}>
            <PhoneIcon style={{ color: '#902bf5' }} /> {place.phone}
          </Typography>
        )}
      </CardContent>
      <CardActions
        style={{
          display: 'flex',
          justifyContent: 'center',
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
        <BasicModal />
      </CardActions>
    </Card>
  );
};

export default PlaceDetails;
