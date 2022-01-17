import React, { Component } from "react";

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
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyAYJawNoAZKPJUqM64EzRwryux8G-4rlk8&v=3.exp&libraries=geometry,drawing,places",
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
  <GoogleMap
    defaultZoom={15}
    defaultCenter={
      new google.maps.LatLng(43.69406708247738, -79.55762619955958)
    }
  >
    {props.directions && <DirectionsRenderer directions={props.directions} />}
  </GoogleMap>
));

<MapWithADirectionsRenderer />;

export default MapWithADirectionsRenderer;
