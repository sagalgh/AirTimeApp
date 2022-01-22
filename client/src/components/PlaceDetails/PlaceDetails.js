import React from 'react';
import {
  Box,
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

import useStyles from './style';
import RemoveRedEye from '@mui/icons-material/RemoveRedEye';

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
      }}
    >
      <CardMedia
        style={{ height: 350 }}
        image={
          place.photo
            ? place.photo.images.large.url
            : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'
        }
        title={place.name}
      />
      <CardContent>
        <Typography gutterBottom variant='h5'>
          {place.name}
        </Typography>
        <Box display='flex' justifyContent='space-between' my={2}>
          <Rating name='read-only' value={Number(place.rating)} readOnly />
          <Typography component='legend'>
            {place.num_reviews} review{place.num_reviews > 1 && 's'}
          </Typography>
        </Box>

        {place?.cuisine?.map(({ name }) => (
          <Chip key={name} size='small' label={name} className={classes.chip} />
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
          paddingLeft: '120px',
          paddingRight: '120px',
        }}
      >
        <Button
          size='small'
          color='primary'
          onClick={() => window.open(place.web_url, '_blank')}
        >
          <RemoveRedEye />
        </Button>
        <Button
          size='small'
          color='primary'
          onClick={() => window.open(place.website, '_blank')}
        >
          <RestaurantMenuIcon style={{ color: '#902bf5' }} />
        </Button>
      </CardActions>
    </Card>
  );
};

export default PlaceDetails;
