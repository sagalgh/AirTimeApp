import { useState } from 'react';
import '../home.css';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Container, Typography, InputBase, Box, Card , Paper} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './style';
import { Link } from 'react-router-dom';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';


function Home() {
  const [autocomplete, setAutocomplete] = useState(null);
  const [coords, setCoords] = useState({});
  const classes = useStyles();

  const onLoad = (autoC) => setAutocomplete(autoC);

  // const onPlaceChanged = () => {
  //   const place = autocomplete.getPlace().types;

  //   // const lng = autocomplete.getPlace().geometry.location.lng();
  //   console.log('place', place);

  //   setCoords({ place });
  // };
  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();
    console.log('lat and lng', lat, lng);

    setCoords({ lat, lng });
  };

  const [address, setAddress] = useState('');

  const handleChange = (address) => {
    setAddress(address);
  };

  const handleSelect = (address) => {
    setAddress(address);
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => console.log('Success', latLng))
      .catch((error) => console.error('Error', error));
  };
  return (
    <div className='welcome'>
      <div className='container' style={{marginTop: '240px',  alignItems: 'center'}}>
      <Card id = 'homebox' elevation={6}>
          <h1 style={{fontSize: '80px', fontWeight: 300, marginBottom: '20px'}}>
            <svg style={{display: 'inline', marginTop: '15px'}}
              className='icon'
              xmlns='http://www.w3.org/2000/svg'
              width='70'
              height='70'
              fill='currentColor'
              class='bi bi-geo-alt'
              viewBox='0 0 16 16'
            >
              <path d='M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z' />
              <path d='M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z' />
            </svg>
            AirTime
          </h1>
          <h1 style={{marginTop: '20px', marginBottom: '20px', fontWeight: 300}}>The sky is waiting for you.</h1>
          <form className='flex-form' style={{left: '30%'}}>
            {/* <input type="search" placeholder="  Which Airport are you going to?" /> */}
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
                <div className='flex-form'>
                  <input
                    value={address}
                    {...getInputProps({
                      placeholder: 'Choose your Airport ...',
                      className: 'location-search',
                    })}
                  />
                  <div className='autocomplete-dropdown-container'>
                    {loading && <div>Loading...</div>}

                    {suggestions
                      .filter((suggestion) => {
                        return suggestion.description.includes('Airport');
                      })
                      .map((suggestion) => {
                        const className = suggestion.active
                          ? 'suggestion-item--active'
                          : 'suggestion-item';
                        // inline style for demonstration purpose
                        const style = suggestion.active
                          ? {
                              backgroundColor: '#ffffff',
                              cursor: 'pointer',
                              color: '#000000',
                              padding: '1rem',
                              borderRadius: '1rem',
                              marginTop: '0.5rem',
                            }
                          : {
                              backgroundColor: '#ffffff',
                              cursor: 'pointer',
                              color: '#000000',
                              padding: '1rem',
                              borderRadius: '1rem',
                              marginTop: '0.5rem',
                            };
                        return (
                          <div
                            {...getSuggestionItemProps(suggestion, {
                              className,
                              style,
                            })}
                          >
                            <span className='selections'>
                              {suggestion.description}
                            </span>
                          </div>
                        );
                      })}
                      
                  </div>
                  
                  </div>
                
              )}
            </PlacesAutocomplete>
            <Link to='/map' className='search-button-link'>
              <button type='submit' defaultValue='Search'>
                {' '}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='40'
                  fill='currentColor'
                  class='bi bi-search'
                  viewBox='0 0 16 16'
                >
                  <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
                </svg>
              </button>
            </Link>
          </form>
          </Card>
      
        <div id='splash'>
          <div className='anim'>
            <div id='loader'>
              <svg version='1.1' width='60px' height='70px' viewBox='0 0 60 70'>
                <defs>
                  <filter id='f1' x={0} y={0}>
                    <feGaussianBlur in='SourceGraphic' stdDeviation={2} />
                  </filter>
                </defs>
                <g id='airplane'>
                  <path
                    fill='#000'
                    d='M0.677,20.977l4.355,1.631c0.281,0.104,0.579,0.162,0.88,0.16l9.76-0.004L30.46,41.58c0.27,0.34,0.679,0.545,1.112,0.541
      h1.87c0.992,0,1.676-0.992,1.322-1.918l-6.643-17.439l6.914,0.002l6.038,6.037c0.265,0.266,0.624,0.412,0.999,0.418l1.013-0.004
      c1.004-0.002,1.684-1.012,1.312-1.938l-2.911-7.277l2.912-7.278c0.372-0.928-0.313-1.941-1.313-1.938h1.017
      c-0.375,0-0.732,0.15-0.996,0.414l-6.039,6.039h-6.915l6.646-17.443c0.354-0.926-0.33-1.916-1.321-1.914l-1.87-0.004
      c-0.439,0.004-0.843,0.203-1.112,0.543L15.677,17.24l-9.765-0.002c-0.3,0.002-0.597,0.055-0.879,0.16L0.678,19.03
      C-0.225,19.36-0.228,20.637,0.677,20.977z'
                    transform='translate(44,0) rotate(90 0 0)'
                  />
                </g>
                <g id='shadow' transform='scale(.9)'>
                  <path
                    fill='#000'
                    fillOpacity='0.3'
                    d='M0.677,20.977l4.355,1.631c0.281,0.104,0.579,0.162,0.88,0.16l9.76-0.004L30.46,41.58c0.27,0.34,0.679,0.545,1.112,0.541
      h1.87c0.992,0,1.676-0.992,1.322-1.918l-6.643-17.439l6.914,0.002l6.038,6.037c0.265,0.266,0.624,0.412,0.999,0.418l1.013-0.004
      c1.004-0.002,1.684-1.012,1.312-1.938l-2.911-7.277l2.912-7.278c0.372-0.928-0.313-1.941-1.313-1.938h1.017
      c-0.375,0-0.732,0.15-0.996,0.414l-6.039,6.039h-6.915l6.646-17.443c0.354-0.926-0.33-1.916-1.321-1.914l-1.87-0.004
      c-0.439,0.004-0.843,0.203-1.112,0.543L15.677,17.24l-9.765-0.002c-0.3,0.002-0.597,0.055-0.879,0.16L0.678,19.03
      C-0.225,19.36-0.228,20.637,0.677,20.977z'
                    transform='translate(64,30) rotate(90 0 0)'
                    filter='url(#f1)'
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className='covertwo' >

        </div>
      </div>
    </div>
  );
}

export default Home;
