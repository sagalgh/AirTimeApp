import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import MapWithADirectionsRenderer from "./MapWithADirectionsRenderer";

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // for google map places autocomplete
      address: "",
      startingLatLong: {},
      endingLatLong: {},
      startingAddress: "",
      endingAddress: "",
      pathCoordinates: [],

      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},

      mapCenter: {
        lat: 49.1966913,
        lng: -123.1815123,
      },
    };
  }

  handleChangeStart = (startingAddress) => {
    this.setState({ startingAddress });
  };

  handleSelectStart = (startingAddress) => {
    console.log("address", startingAddress);

    this.setState({ startingAddress });
    geocodeByAddress(startingAddress)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => {
        console.log("starting latLong", latLng);

        // update center state
        this.setState({ startingLatLong: latLng });
        this.setState({ mapCenter: latLng });
      })
      .catch((error) => console.error("Error", error));
  };

  handleChangeEnd = (endingAddress) => {
    this.setState({ endingAddress });
  };

  handleSelectEnd = (endingAddress) => {
    this.setState({ endingAddress });
    geocodeByAddress(endingAddress)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => {
        console.log("ending latLong", latLng);

        // update center state
        this.setState({ endingLatLong: latLng });

        this.setState({ mapCenter: latLng });
      })
      .catch((error) => console.error("Error", error));
  };

  handleSubmit = () => {
    this.setState({
      pathCoordinates: [this.state.startingLatLong, this.state.endingLatLong],
    });
  };

  render() {
    return (
      <div id="googleMaps">
        <div className="placeholder-map"></div>

        {/* starting point */}
        <div className="map-container">
          <PlacesAutocomplete
            value={this.state.startingAddress}
            onChange={this.handleChangeStart}
            onSelect={this.handleSelectStart}
          >
            {({
              getInputProps,
              suggestions,
              getSuggestionItemProps,
              loading,
            }) => (
              <div>
                <input
                  {...getInputProps({
                    placeholder: "Choose your starting point ...",
                    className: "location-search-input",
                  })}
                />
                <div className="autocomplete-dropdown-container">
                  {loading && <div>Loading...</div>}

                  {suggestions.map((suggestion) => {
                    const className = suggestion.active
                      ? "suggestion-item--active"
                      : "suggestion-item";
                    // inline style for demonstration purpose
                    const style = suggestion.active
                      ? { backgroundColor: "#fafafa", cursor: "pointer" }
                      : { backgroundColor: "#ffffff", cursor: "pointer" };
                    return (
                      <div
                        {...getSuggestionItemProps(suggestion, {
                          className,
                          style,
                        })}
                      >
                        <span>{suggestion.description}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </PlacesAutocomplete>

          <PlacesAutocomplete
            value={this.state.endingAddress}
            onChange={this.handleChangeEnd}
            onSelect={this.handleSelectEnd}
          >
            {({
              getInputProps,
              suggestions,
              getSuggestionItemProps,
              loading,
            }) => (
              <div>
                <input
                  {...getInputProps({
                    placeholder: "Choose your destination ...",
                    className: "location-search-input",
                  })}
                />
                <div className="autocomplete-dropdown-container">
                  {loading && <div>Loading...</div>}

                  {suggestions.map((suggestion) => {
                    const className = suggestion.active
                      ? "suggestion-item--active"
                      : "suggestion-item";
                    // inline style for demonstration purpose
                    const style = suggestion.active
                      ? { backgroundColor: "#fafafa", cursor: "pointer" }
                      : { backgroundColor: "#ffffff", cursor: "pointer" };
                    return (
                      <div
                        {...getSuggestionItemProps(suggestion, {
                          className,
                          style,
                        })}
                      >
                        <span>{suggestion.description}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </PlacesAutocomplete>
          <button onClick={this.handleSubmit}>See your route!</button>

          <MapWithADirectionsRenderer
            pathCoordinates={this.state.pathCoordinates}
            // startingLatLong={this.state.startingLatLong}
            // endingLatLong={this.state.endingLatLong}
          />
          {/* <Map
            google={this.props.google}
            zoom={16}
            containerStyle={{
              position: "relative",
            }}
            initialCenter={{
              lat: this.state.mapCenter.lat,
              lng: this.state.mapCenter.lng,
            }}
            center={{
              lat: this.state.mapCenter.lat,
              lng: this.state.mapCenter.lng,
            }}
          >
            <Marker
              position={{
                lat: this.state.mapCenter.lat,
                lng: this.state.mapCenter.lng,
              }}
            />
          </Map> */}
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBef6rg4dKBT-wjQoVwlvMC1ok99koDm4U",
})(MapContainer);
