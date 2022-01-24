import React, { useState, useEffect } from 'react';
import { CssBaseline, Grid, Card, CardMedia, Box } from '@material-ui/core';
import { getPlacesData } from './api/travelAdvisorApi';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
import useStyles from '../src/components/Map/styles';
import ScrollIntoView from 'react-scroll-into-view';
import './App.css';
import { SeverityPill } from '/Users/ansaarahmed/lighthouse/AirTimeApp/client/src/components/helpers/severity-pill.js';

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
    <div className='cover'>
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
          <div className='direction-pop-out'>
            {direction2Location.length > 1 && (
              <Card
                elevation={10}
                style={{
                  marginLeft: 25,
                  maxHeight: 200,
                  borderRadius: '30px',
                  color: '#1C2E4A',
                  backgroundColor: '#EAD7D7',
                }}
              >
                <CardMedia style={{ height: 350, overflow: 'scroll' }}>
                  {direction2Location.map((step) => {
                    return (
                      <div
                        style={{
                          marginLeft: 25,
                          marginTop: 25,
                          fontWeight: 500,
                          fontSize: 28,
                          fontFamily: 'Helvetica Neue',
                          overflow: 'scroll',
                        }}
                      >
                        {step.instructions.replace(regex, '    ')}
                        <button style={{ color: 'primary' }}>
                          {step.duration.text}
                        </button>
                      </div>
                    );
                  })}
                </CardMedia>
              </Card>
            )}
          </div>
        </Grid>

        <Grid item xs={12} md={8}>
          <Map
            setChildClicked={setChildClicked}
            setBounds={setBounds}
            coords={coords}
            places={filteredPlaces.length ? filteredPlaces : places}
            setDirection2Location={setDirection2Location}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
