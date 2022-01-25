import React, { useState, useEffect, createRef } from 'react';
import {
  CircularProgress,
  Grid,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from '@material-ui/core';

import PlaceDetails from '../PlaceDetails/PlaceDetails';
import useStyles from '../List/style.js';
<<<<<<< Updated upstream
=======
import '/Users/sagalghelle/Desktop/finalAirTimeApp/client/src/dropdown.css';
>>>>>>> Stashed changes

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
    <div className={classes.container}>
      {isLoading ? (
        <div className={classes.loading}>
          <CircularProgress size='3rem' />
        </div>
      ) : (
        <>
          <FormControl className={classes.formControl}>
            <InputLabel className={classes.input} id='type'>
              Type
            </InputLabel>
            <Select
              className={classes.input}
              id='type'
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <MenuItem value='restaurants'>Restaurants</MenuItem>
            </Select>
          </FormControl>

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
