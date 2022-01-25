import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '/Users/sagalafrah/lighthouse/w11/AirTimeApp/client/src/components/SignIn.js';
import { typography } from '@mui/system';

const theme = createTheme();

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component='main' sx={{ height: '200vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#912BF6',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className='planecontainer'>
            <div id='main-window' className='window-wrapper window'>
              <div className='window-view'>
                <div className='window-border window'>
                  <div className='window-border-inside window'>
                    <div className='sky window'>
                      <div className='moon'></div>
                      <div className='cloud-wrapper'>
                        <div className='cloud'>
                          <div className='cloud-part' />
                        </div>
                        <div className='cloud'>
                          <div className='cloud-part' />
                        </div>
                        <div className='cloud'>
                          <div className='cloud-part' />
                        </div>
                        <div className='stars'>
                          <div className='star' />
                          <div className='star' />
                          <div className='star' />
                          <div className='star' />
                          <div className='star' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Typography
            component='h1'
            variant='h2'
            style={{
              color: '#FFF',
              opacity: 0.9,
              fontWeight: 400,
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            Ready for take-off?
          </Typography>{' '}
        </Grid>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar
              sx={{ m: 5, bgcolor: 'secondary.main', width: 60, height: 60 }}
            >
              <LockOutlinedIcon />
            </Avatar>
            <Typography component='h1' variant='h5' style={{ color: '#000' }}>
              Sign in
            </Typography>
            <Box
              component='form'
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin='normal'
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                autoComplete='email'
                autoFocus
              />
              <TextField
                margin='normal'
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='current-password'
              />
              <FormControlLabel
                control={<Checkbox value='remember' color='primary' />}
                label='Remember me'
              />
              <Button
                type='submit'
                href='/'
                fullWidth
                variant='contained'
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href='#' variant='body2'>
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href='/register' variant='body2'>
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
