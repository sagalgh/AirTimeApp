import React from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // for google map places autocomplete
      address: "",

      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},

      mapCenter: {
        lat: 49.1966913,
        lng: -123.1815123,
      },
    };
  }

  handleChange = (address) => {
    this.setState({ address });
  };

  handleSelect = (address) => {
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => console.log("Success", latLng))
      .catch((error) => console.error("Error", error));
  };

  render() {
    return (
      <div>
        <div id="google">
          <div className="placeholder-map"></div>
          <div className="map-container">
            <PlacesAutocomplete
              value={this.state.address}
              onChange={this.handleChange}
              onSelect={this.handleSelect}
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
                      placeholder: "Choose your Airport ...",
                      className: "location-search",
                    })}
                  />
                  <div className="autocomplete-dropdown-container">
                    {loading && <div>Loading...</div>}

                    {suggestions
                      .filter((suggestion) => {
                        return suggestion.description.includes("Airport");
                      })
                      .map((suggestion) => {
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
            <div className="about">
              <div className="container">
                <div className="row align-items-center my-5">
                  <div className="col-lg-7">
                    <img
                      className="img-fluid rounded mb-4 mb-lg-0"
                      src="http://placehold.it/900x400"
                      alt=""
                    />
                  </div>
                  <div className="col-lg-5">
                    <h1 className="font-weight-light">Home</h1>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="map-hidden">
              <Map
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
              </Map>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBef6rg4dKBT-wjQoVwlvMC1ok99koDm4U",
})(Home);
