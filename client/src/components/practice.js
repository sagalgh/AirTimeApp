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
  
  

  const [address, setAddress] = useState("")


  const handleChange = (address) => {
    setAddressaddress });
  };

  const handleSelect = (address) => {
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => console.log("Success", latLng))
      .catch((error) => console.error("Error", error));
  };


     
 
    return (
      <div id="googleMaps">
        <div className="placeholder-map"></div>

        {/* starting point */}
        <div className="map-container">
          <PlacesAutocomplete
            value={address}
            onChange={handleChange}
            onSelect={handleSelect}
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

                  {suggestions.filter((suggestion) => {
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

    

          />
          
        </div>
      </div>
    );
  }



export default GoogleApiWrapper({
  apiKey: "AIzaSyD_SFCAXBuXnQua8ixjsfOrnaaF2QwTl4I",
})(MapContainer);