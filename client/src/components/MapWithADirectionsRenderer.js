import React, { Component } from "react";
import { CssBaseline, Grid } from '@material-ui/core';
import "./style"
import { Paper, Typography, useMediaQuery } from '@material-ui/core';


const { compose, withProps, lifecycle } = require("recompose");

const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer,
} = require("react-google-maps");

// const google = window.google;
/*global google*/

const MapWithADirectionsRenderer = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyD_SFCAXBuXnQua8ixjsfOrnaaF2QwTl4I&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap,
  lifecycle({
    componentWillReceiveProps() {
      console.log("props", this.props);
      
      const DirectionsService = new google.maps.DirectionsService();

      DirectionsService.route(
        {
          origin: this.props.pathCoordinates[0],
          destination: this.props.pathCoordinates[1],
          travelMode: google.maps.TravelMode.WALKING,
        },
        (result, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            this.setState({
              directions: result,
            });
          } else {
            console.error(`error fetching directions ${result}`);
          }
        }
      );
    },
  })
)((props) => (

<div className="mapContainer"> <GoogleMap
    defaultZoom={17.5}
    margin={[50, 50, 50, 50]}
    defaultCenter={
      new google.maps.LatLng(33.9416, -118.4085)
    }


  >
    {props.directions && <DirectionsRenderer directions={props.directions} />}
  </GoogleMap>
  </div> 
));

<MapWithADirectionsRenderer />;

export default MapWithADirectionsRenderer;
