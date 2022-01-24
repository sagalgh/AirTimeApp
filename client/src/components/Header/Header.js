import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Box,
  Button,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import useStyles from '../Map/styles.js';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import { bottomNavigationActionClasses } from '@mui/material';

const Header = ({
  handleChangeStart,
  handleSelectStart,
  handleChangeEnd,
  handleSelectEnd,
  handleSubmit,
}) => {
  const classes = useStyles();

  return (
    <AppBar
      position='static'
      className={classes.appbar}
      style={{
        background: '#1C2E4A',
        opacity: 2.5,
        marginRight: 20,
        marginTop: 10,
        width: '57.3vw',
        borderRadius: '25px',
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        marginBottom: 0,
        opacity: 2.5,
      }}
    >
      <Toolbar className={classes.toolbar}>
        <Box display='flex'>
          <Typography variant='h6' className={classes.title}></Typography>
          <Autocomplete
            onLoad={handleChangeStart}
            onPlaceChanged={handleSelectStart}
          >
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon style={{ color: '#EAD7D7' }} />
              </div>
              <InputBase
                placeholder='From'
                classes={{ root: classes.inputRoot, input: classes.inputInput }}
                style={{
                  width: 400,
                  fontSize: 22,
                  color: 'white',
                  opacity: 2.5,
                  paddingLeft: '50px',
                }}
              />
            </div>
          </Autocomplete>
          <DirectionsWalkIcon style={{ color: '#EAD7D7', marginTop: 7.3 }} />
          <Autocomplete
            onLoad={handleChangeEnd}
            onPlaceChanged={handleSelectEnd}
          >
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon style={{ color: '#EAD7D7' }} />
              </div>
              <InputBase
                placeholder='To'
                classes={{ root: classes.inputRoot, input: classes.inputInput }}
                style={{
                  width: 400,
                  fontSize: 22,
                  color: 'white',
                  opacity: 2.5,
                  paddingLeft: '50px',
                }}
              />
            </div>
          </Autocomplete>

          <Button
            onClick={handleSubmit}
            style={{
              borderRadius: '100px',
              padding: '5px',
              backgroundColor: '#EAD7D7',
              fontSize: '18px',
              marginLeft: '1px',
            }}
            variant='contained'
          >
            <FlightTakeoffIcon style={{ color: '#68436B' }} />
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
