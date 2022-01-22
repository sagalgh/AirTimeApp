import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from '../Map/styles.js';

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
        background: '#eb8560',
        borderStyle: '1rem solid;',
        opacity: 2.5,
        marginRight: 20,
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
                <SearchIcon />
              </div>
              <InputBase
                placeholder='Choose your starting point…'
                classes={{ root: classes.inputRoot, input: classes.inputInput }}
              />
            </div>
          </Autocomplete>
          <Autocomplete
            onLoad={handleChangeEnd}
            onPlaceChanged={handleSelectEnd}
          >
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder='Choose your destination…'
                classes={{ root: classes.inputRoot, input: classes.inputInput }}
              />
            </div>
          </Autocomplete>
          <button onClick={handleSubmit}>Find your route!</button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
