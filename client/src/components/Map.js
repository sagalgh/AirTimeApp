import React, { useState, useEffect } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import MapWithADirectionsRenderer from "./MapWithADirectionsRenderer";
import List from "./List/List"
import { getPlacesData } from '../api/travelAdvisorApi';
 


export const MapContainer = (props) => {
  
    // this.state = {
    //   // for google map places autocomplete
    //   address: "",
    //   startingLatLong: {},
    //   endingLatLong: {},
    //   startingAddress: "",
    //   endingAddress: "",
    //   pathCoordinates: [],

    //   showingInfoWindow: false,
    //   activeMarker: {},
    //   selectedPlace: {},

    //   mapCenter: {
    //     lat: 49.1966913,
    //     lng: -123.1815123,
    //   },
    // };
    const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState('');

  const [coords, setCoords] = useState({});
  const [bounds, setBounds] = useState(null);

  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [places, setPlaces] = useState([]);

  const [autocomplete, setAutocomplete] = useState(null);
  const [childClicked, setChildClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoords({ lat: latitude, lng: longitude });
    });
  }, []);

  useEffect(() => {
    const filtered = places.filter((place) => Number(place.rating) > rating);

    setFilteredPlaces(filtered);
  }, [rating]);

  useEffect(() => {
    if (bounds) {
      setIsLoading(true);

      getPlacesData(type, bounds.sw, bounds.ne)
        .then((data) => {
          setPlaces(data?.filter((place) => place.name && place.num_reviews > 0));
          setFilteredPlaces([]);
          setRating('');
          setIsLoading(false);
        });
    }
  }, [bounds, type]);

  const onLoad = (autoC) => setAutocomplete(autoC);

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();

    setCoords({ lat, lng });
  };
  

  const [startingLatLong, updateStartingLatLong] = useState({})
  const [endingLatLong, updateEndingLatLong] = useState({})

  const [startingAddress, updateStartingAddress] = useState("")
  const [endingAddress, updateEndingAddress] = useState("")
  const [pathCoordinates, updatePathCoordinates] = useState([])

  const [mapCenter, updateMapCenter] = useState({
    lat: 49.1966913,
    lng: -123.1815123,
  })



  const handleChangeStart = (addressParam) => {
    updateStartingAddress(addressParam);
  };

  const handleSelectStart = (addressParam) => {
    console.log("address", addressParam);

    updateStartingAddress(addressParam);
    geocodeByAddress(addressParam)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => {
        console.log("starting latLong", latLng);

        // update center state
        updateStartingLatLong(latLng);
        updateMapCenter(latLng );
      })
      .catch((error) => console.error("Error", error));
  };

  const handleChangeEnd = (endingAddress) => {
    updateEndingAddress(endingAddress);
  };

  const handleSelectEnd = (endingAddress) => {
    updateEndingAddress(endingAddress);
    geocodeByAddress(endingAddress)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => {
        console.log("ending latLong", latLng);

        // update center state
        updateEndingLatLong( latLng);

        updateMapCenter(latLng);
      })
      .catch((error) => console.error("Error", error));
  };

  const handleSubmit = () => {
    console.log("starting", startingLatLong, "ending", endingLatLong)
    updatePathCoordinates([startingLatLong, endingLatLong]
    );
  };

 
    return (
      <div id="googleMaps">
        <div className="placeholder-map"></div>

        {/* starting point */}
        <div className="map-container">
          <PlacesAutocomplete
            value={startingAddress}
            onChange={handleChangeStart}
            onSelect={handleSelectStart}
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
            value={endingAddress}
            onChange={handleChangeEnd}
            onSelect={handleSelectEnd}
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
          <button onClick={handleSubmit}>See your route!</button>

          <MapWithADirectionsRenderer
            pathCoordinates={pathCoordinates}
            // startingLatLong={this.state.startingLatLong}
            // endingLatLong={this.state.endingLatLong}
          />

          <List 
           isLoading={isLoading}
           childClicked={childClicked}
           places={filteredPlaces.length ? filteredPlaces : places}
           type={type}
           setType={setType}
           rating={rating}
           setRating={setRating}
          
          
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



export default GoogleApiWrapper({
  apiKey: "AIzaSyD_SFCAXBuXnQua8ixjsfOrnaaF2QwTl4I",
})(MapContainer);
