import { useState, useEffect, useRef } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from 'google-map-react';
import {
  Paper,
  Typography,
  useMediaQuery,
  CssBaseline,
} from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';
import mapStyles from './mapStyles';
import useStyles from './styles.js';
// import './MapWithADirectionRenderer';
import Header from '../Header/Header';

/*global google*/

function DirectionRenderer(props) {
  const [directionsRenderer, setDirectionsRenderer] = useState(
    new google.maps.DirectionsRenderer()
  );

  async function getRoute(origin, destination) {
    const directionsService = new google.maps.DirectionsService();
    return new Promise(function (resolve, reject) {
      directionsService.route(
        {
          origin: origin,
          destination: destination,
          travelMode: google.maps.TravelMode.WALKING,
        },
        (result, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            console.log('results', result);

            resolve(result);
          } else {
            reject(result);
          }
        }
      );
    });
  }

  async function renderRoute() {
    const directions = await getRoute(props.origin, props.destination);
    console.log('direction__________', directions);
    console.log('steps__________', directions.routes[0].legs[0].steps);
    props.setDirection2Location(directions.routes[0].legs[0].steps);

    directionsRenderer.setDirections(directions);
    directionsRenderer.setPanel(props.panel.current);
  }

  useEffect(() => {
    directionsRenderer.setMap(props.map);
    console.log('setMap', props.map);
  }, [props.map]);

  useEffect(() => {
    renderRoute().catch((err) => {
      console.log(err);
    });
  }, [props.origin, props.destination]);

  return null;
}

const Map = ({
  coords,
  places,
  setCoords,
  setBounds,
  setChildClicked,
  setDirection2Location,
}) => {
  const matches = useMediaQuery('(max-width:1000px)');
  const classes = useStyles();

  const [startPoint, setStartPoint] = useState(null);
  const [startLatLng, setStartLatLng] = useState({});
  const [startLatLngSubmit, setStartLatLngSubmit] = useState({});
  const [endLatLngSubmit, setEndLatLngSubmit] = useState({});
  const [mapCenter, updateMapCenter] = useState({
    lat: 33.94407320929345,
    lng: -118.40405015962253,
  });
  const panel = useRef();

  const [endPoint, setEndPoint] = useState(null);
  const [endLatLng, setEndLatLng] = useState({});

  const handleChangeStart = (start) => setStartPoint(start);

  const handleSelectStart = () => {
    const lat = startPoint.getPlace().geometry.location.lat();
    const lng = startPoint.getPlace().geometry.location.lng();
    console.log('starting and ending', lat, lng);
    updateMapCenter({ lat, lng });

    setStartLatLng({ lat, lng });
  };

  const handleChangeEnd = (end) => setEndPoint(end);

  const handleSelectEnd = () => {
    const lat = endPoint.getPlace().geometry.location.lat();
    const lng = endPoint.getPlace().geometry.location.lng();
    console.log('starting and ending', lat, lng);
    updateMapCenter({ lat, lng });

    setEndLatLng({ lat, lng });
  };

  const handleSubmit = () => {
    setStartLatLngSubmit(startLatLng);
    setEndLatLngSubmit(endLatLng);
  };

  const [map, setMap] = useState(null);

  function handleApiLoaded(mapInstance, google) {
    setMap(mapInstance);
  }

  return (
    <div className='header-map'>
      <Header
        handleSelectStart={handleSelectStart}
        handleChangeStart={handleChangeStart}
        handleSelectEnd={handleSelectEnd}
        handleChangeEnd={handleChangeEnd}
        handleSubmit={handleSubmit}
      />

      <div
        className={classes.mapContainer}
        style={{
          borderRadius: 40,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          overflow: 'hidden',
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
        }}
      >
        <div
          className='directions-panel'
          style={{
            maxHeight: 1080,
            float: 'right',
            width: '420px',
            overflow: 'scroll',
            position: 'relative',
            fontSize: 28,
            fontFamily: 'Helvetica Neue',
            borderRadius: '5px',
            color: '#000',
            fontWeight: '200px',
            zIndex: 5,
            paddingLeft: '10px',
            paddingRight: '20px',
            borderRadius: '15px',
            opacity: 0.9,
            backgroundColor: '#DFDFF0',
          }}
          ref={panel}
        ></div>

        <GoogleMapReact
          bootstrapURLKeys={{
            key: 'AIzaSyD_SFCAXBuXnQua8ixjsfOrnaaF2QwTl4I',
          }}
          defaultCenter={coords}
          center={mapCenter}
          defaultZoom={17}
          margin={[50, 50, 50, 50]}
          options={{
            disableDefaultUI: true,
            zoomControl: true,
            styles: mapStyles,
          }}
          onChange={(e) => {
            console.log('e.margin', e.marginBounds);
            setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
          }}
          onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
          onChildClick={(child) => setChildClicked(child)}
        >
          {map && (
            <DirectionRenderer
              map={map}
              origin={startLatLngSubmit}
              destination={endLatLngSubmit}
              setDirection2Location={setDirection2Location}
              panel={panel}
            />
          )}

          {places.map((place, i) => (
            <div
              className={classes.markerContainer}
              lat={Number(place.latitude)}
              lng={Number(place.longitude)}
              key={i}
            >
              {!matches ? (
                <LocationOnOutlinedIcon color='primary' fontSize='large' />
              ) : (
                <Paper
                  elevation={3}
                  variant='outlined'
                  className={classes.paper}
                >
                  <Typography
                    className={classes.typography}
                    variant='subtitle2'
                    gutterBottom
                  >
                    {' '}
                    {place.name}
                  </Typography>
                  <img
                    className={classes.pointer}
                    src={
                      place.photo
                        ? place.photo.images.medium.url
                        : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'
                    }
                  />
                  <Rating
                    name='read-only'
                    size='small'
                    value={Number(place.rating)}
                    readOnly
                  />
                </Paper>
              )}
            </div>
          ))}
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default Map;
