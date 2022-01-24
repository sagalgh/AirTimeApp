import React, { useState, useEffect, createRef } from 'react';
import {
  CircularProgress,
  Grid,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from '@material-ui/core';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import WeekendIcon from '@mui/icons-material/Weekend';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import PlaceDetails from '../PlaceDetails/PlaceDetails';
import useStyles from '../List/style.js';
import '/Users/ansaarahmed/lighthouse/AirTimeApp/client/src/dropdown.css';

const List = ({
  places,
  type,
  setType,
  rating,
  setRating,
  childClicked,
  isLoading,
}) => {
  const [elRefs, setElRefs] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    const refs = Array(places.length)
      .fill()
      .map((_, i) => elRefs[i] || createRef());
    setElRefs(refs);
  }, [places]);

  return (
    <div
      className={classes.container}
      style={{ color: '#902bf5', marginTop: 10 }}
    >
      {isLoading ? (
        <div className={classes.loading}>
          <CircularProgress size='3rem' />
        </div>
      ) : (
        <>
          <Grid container spacing={3} className={classes.list}>
            {places?.map((place, i) => (
              <Grid ref={elRefs[i]} key={i} item xs={12}>
                <PlaceDetails
                  selected={Number(childClicked) === i}
                  refProp={elRefs[i]}
                  place={place}
                />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </div>
  );
};

export default List;
