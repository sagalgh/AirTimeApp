import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box, Button } from '@material-ui/core';
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
        background: '#FFF',
        opacity: 2.5,
        marginRight: 20,
        marginTop: 150,
        width: '92%',
        borderRadius: '25px',
        marginBottom: '25px',
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
                <SearchIcon 
                  style={{ color: '#31Bacd' }}
                />
              </div>
              <InputBase
                placeholder='From'
                classes={{ root: classes.inputRoot, input: classes.inputInput }}
                style={{
        border: '2px solid #31Bacd',
        width: 280,
        borderRadius: '10px',
        opacity: 2.5,
        paddingLeft: "50px"
      }}
              />
            </div>
          </Autocomplete>
          <DirectionsWalkIcon style=
          {{ color: '#31Bacd',
          alignItems: 'bottom'}}
          />
          <Autocomplete
            onLoad={handleChangeEnd}
            onPlaceChanged={handleSelectEnd}
          >
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon 
                  style={{ color: '#31Bacd' }}
                />
              </div>
              <InputBase
                placeholder='To'
                classes={{ root: classes.inputRoot, input: classes.inputInput }}
                style={{
        border: '2px solid #31Bacd',
        width: 280,
        borderRadius: '10px',
        opacity: 2.5,
        paddingLeft: "50px"
      }}
              />
            </div>
          </Autocomplete>

          <Button
    style={{
        borderRadius: 100,
        backgroundColor: "#31Bacd",
        fontSize: "18px",
        marginLeft: "1px"
    }}
    variant="contained"
    >
          <FlightTakeoffIcon style={{ color: '#FFF' }}/>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
