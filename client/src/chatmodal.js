import  React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import '/Users/sagalghelle/Desktop/finalAirTimeApp/client/src/chatlogin.css'



const style = {
  fontFamily: 'Helvetica',
  position: 'absolute',
  borderRadius: '25px',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 900,
  height: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ChatModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant='contained' style={{borderRadius: '25px', backgroundColor: '#D36DFF', fontFamily:'Helvetica', fontWeight: 300,}} onClick={handleOpen}>Need Instructions?</Button>
      <Modal className='chatmodal'
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>

            <div className='progress'>
              <Typography>
                <div className='progress_inner'>
                  <div className='progress_inner__step'>
                    <label htmlFor='step-1'>Create a Username.</label>
                  </div>
                  <div className='progress_inner__step'>
                    <label htmlFor='step-2'>Enter your flight number.</label>
                  </div>
                  <div className='progress_inner__step'>
                    <label htmlFor='step-3'>Enter the chat room!</label>
                  </div>
                  <div className='progress_inner__step'>
                    <label htmlFor='step-4'>Log out </label>
                  </div>
                  <div className='progress_inner__step'>
                    <label htmlFor='step-5'>Have Fun!</label>
                  </div>
                  <input
                    defaultChecked='checked'
                    id='step-1'
                    name='step'
                    type='radio'
                  />
                  <input id='step-2' name='step' type='radio' />
                  <input id='step-3' name='step' type='radio' />
                  <input id='step-4' name='step' type='radio' />
                  <input id='step-5' name='step' type='radio' />
                  <div className='progress_inner__bar' />
                  <div className='progress_inner__bar--set' />
                  <div className='progress_inner__tabs'>
                    <div className='tab tab-0'>
                      <Typography
                        component='h1'
                        variant='h2'
                        style={{
                          color: '#2E0093',
                          fontFamily: 'Helvetica',
                          opacity: 0.9,
                          fontWeight: 900,
                          display: 'flex',
                          justifyContent: 'center',
                        }}
                      >
                        Create a Username.
                      </Typography>
                      <h5>
                        You can use any username you want with numbers and
                        letters. Be ask creative as you like and feel free to
                        use a nickname!
                      </h5>
                    </div>
                    <div className='tab tab-1'>
                      <Typography
                        component='h1'
                        variant='h2'
                        style={{
                          color: '#2E0093',
                          fontFamily: 'Helvetica',
                          opacity: 0.9,
                          fontWeight: 900,
                          display: 'flex',
                          justifyContent: 'center',
                        }}
                      >
                        Enter Your Flight #.
                      </Typography>
                      <h5>
                        Please enter the letters and the numbers on your flight
                        number. The format is usually 2 letters and 3-4 numbers.
                        Check your boarding pass if you're unsure!
                      </h5>
                    </div>
                    <div className='tab tab-2'>
                      <Typography
                        component='h1'
                        variant='h2'
                        style={{
                          color: '#2E0093',
                          fontFamily: 'Helvetica',
                          opacity: 0.9,
                          fontWeight: 900,
                          display: 'flex',
                          justifyContent: 'center',
                        }}
                      >
                        Enter The Chat Room.
                      </Typography>
                      <h5>
                        You will be placed with people on your flight. You
                        cannot join any other chat rooms, but feel free to get
                        to know other adventurers. Who knows, maybe you'll make
                        a friend!{' '}
                      </h5>
                    </div>
                    <div className='tab tab-3'>
                      <Typography
                        component='h1'
                        variant='h2'
                        style={{
                          color: '#2E0093',
                          fontFamily: 'Helvetica',
                          opacity: 0.9,
                          fontWeight: 900,
                          display: 'flex',
                          justifyContent: 'center',
                        }}
                      >
                        Log Out.
                      </Typography>
                      <h5>
                        Self-Explanatory. If you do logout, you won't lose your
                        precious pins! Log back in to see all the cool places
                        you want to travel to in the future.
                      </h5>
                    </div>
                    <div className='tab tab-4'>
                      <Typography
                        component='h1'
                        variant='h2'
                        style={{
                          color: '#2E0093',
                          fontFamily: 'Helvetica',
                          opacity: 0.9,
                          fontWeight: 900,
                          display: 'flex',
                          justifyContent: 'center',
                        }}
                      >
                        Have Fun!
                      </Typography>
                      <h5>
                        .....And be safe. Please do not share details of your
                        trip such as hotels, hostels, and AirBnb's with
                        strangers! You can always pull people to the side to
                        chat 🤪{' '}
                      </h5>
                    </div>
                  </div>
                </div>
              </Typography>
            </div>

        </Box>
      </Modal>
    </div>
  );
}
