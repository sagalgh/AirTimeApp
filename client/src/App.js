import React, { useState, useEffect } from 'react';
import { CssBaseline, Grid, Card, CardMedia, Box } from '@material-ui/core';
import { getPlacesData } from './api/travelAdvisorAPI';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
import useStyles from '../src/components/Map/styles';
import ScrollIntoView from 'react-scroll-into-view';

const App = () => {
  const classes = useStyles();
  const regex = /(<([^>]+)>)/gi;

  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState('');

  const [coords, setCoords] = useState(null);
  const [bounds, setBounds] = useState(null);

  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [places, setPlaces] = useState([]);

  const [childClicked, setChildClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [direction2Location, setDirection2Location] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoords({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    const filtered = places.filter((place) => Number(place.rating) > rating);

    setFilteredPlaces(filtered);
  }, [rating]);

  useEffect(() => {
    if (bounds) {
      setIsLoading(true);

      getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
        setPlaces(data?.filter((place) => place.name && place.num_reviews > 0));
        setFilteredPlaces([]);
        setRating('');
        setIsLoading(false);
      });
    }
  }, [bounds, type]);

  if (!coords) {
    return null;
  }

  return (
    <>
      <CssBaseline />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List
            isLoading={isLoading}
            childClicked={childClicked}
            places={filteredPlaces.length ? filteredPlaces : places}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
          />

          {direction2Location.length > 1 && (
            <Card
              elevation={6}
              style={{ marginLeft: 25, maxHeight: 200, overflow: 'auto' }}
            >
              <CardMedia style={{ height: 350 }}>
                <ScrollIntoView>
                  <div>
                    {direction2Location.map((step) => {
                      return (
                        <div
                          style={{
                            marginLeft: 25,
                            marginTop: 25,
                            fontWeight: 500,
                            fontSize: 20,
                          }}
                        >
                          {step.instructions.replace(regex, '    ')}
                          {step.duration.text} ({step.distance.text})
                        </div>
                      );
                    })}
                  </div>
                </ScrollIntoView>
              </CardMedia>
            </Card>
          )}
        </Grid>

        <Grid
          item
          xs={12}
          md={8}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Map
            setChildClicked={setChildClicked}
            setBounds={setBounds}
            coords={coords}
            places={filteredPlaces.length ? filteredPlaces : places}
            setDirection2Location={setDirection2Location}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
