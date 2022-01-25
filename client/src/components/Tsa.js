import * as React from 'react';
import '/Users/sagalafrah/lighthouse/w11/AirTimeApp/client/src/checkpoints.css'



import {
  Box,
  Fab,
  Typography,
  Button,
  Card,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip,
} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { SeverityPill } from './helpers/severity-pill';

const orders = [
  {
    id: 'Terminal 1',
    ref: 'Terminal 1',
    amount: 30.5,
    customer: {
      name: '9, 10, 11A-11B, 12A-12B, 13-15, 16A, 17A-17B',
    },
    createdAt: 'AVAILABLE',
    status: '15 minutes or less',
  },
  {
    id: 'Terminal 1',
    ref: 'Terminal 2',
    amount: 25.1,
    customer: {
      name: 'Hub for International Flights',
    },
    createdAt: 'TSA PRECHECK ONLY',
    status: '15 minutes or less',
  },
  {
    id: 'Terminal 1',
    ref: 'Terminal 3',
    amount: 10.99,
    customer: {
      name: 'Only used by Delta Airlines.',
    },
    createdAt: 'AVAILABLE',
    status: 'Longer than 40 minutes',
  },
  {
    id: 'Terminal 1',
    ref: 'Terminal 4',
    amount: 96.43,
    customer: {
      name: 'Only used by American Airlines',
    },
    createdAt: 'NO GLOBAL ENTRY',
    status: 'Between 20 and 45 minutes',
  },
  {
    id: 'Terminal 1',
    ref: 'Terminal 5',
    amount: 32.54,
    customer: {
      name: '50A, 50B, 51A, 51B, 53A, 53B, 54A, 54B, 55A, 56, 57, 58, 59',
    },
    createdAt: 'AVAILABLE',
    status: '15 minutes or less',
  },
  {
    id: 'Terminal 1',
    ref: 'Terminal 6',
    amount: 16.76,
    customer: {
      name: '60, 63, 64A, 64B, 65A, 65B, 66, 67, 68A, 68B, 69A 69B',
    },
    createdAt: 'AVAILABLE',
    status: 'Longer than 40 minutes',
  },
];

export const Tsa = (props) => (
  <div id ='tsabackground'>
  <div style={{display: 'flex', justifyContent: 'center',}}>
  <Card {...props} id='checkpoints' style={{marginTop: '60px'}} >
  <Typography variant= 'h1'>
    <CardHeader id= 'tsacardheader' title='Current Security Checkpoint Waiting Times' style={{textAlign: 'center', marginBottom: '40px', fontSize: 'large'}} />
    </Typography>
    <Box sx={{ minWidth: 600 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell style= {{color: '#FFF', fontSize:'30px'}}>Terminal</TableCell>
            <TableCell style= {{color: '#FFF', fontSize:'30px'}}>Checkpoint Information</TableCell>
            <TableCell style= {{color: '#FFF', fontSize:'30px'}}>Expedited Screening</TableCell>

            <TableCell style= {{color: '#FFF', fontSize:'30px'}}>Status                    <ErrorOutlineIcon style={{marginLeft: '10px', color: 'yellow'}}></ErrorOutlineIcon></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <TableRow hover key={order.id}>
              <TableCell style= {{color: '#FFF', fontSize:'20px', fontWeight: 600}}>{order.ref}</TableCell>
              <TableCell style= {{color: '#FFF', fontSize:'18px'}}>{order.customer.name}</TableCell>
              <TableCell>
              <Button variant='contained' style ={{
                backgroundColor:'#16587E',
                
                borderRadius: '25px'
              }}
              >
              {order.createdAt}</Button></TableCell>
              <TableCell >
                <SeverityPill 
                  color={
                    (order.status === '15 minutes or less' && 'success' ) ||
                    (order.status === 'Longer than 40 minutes' && 'error') ||
                    'warning' 
                  }
                >
                  {order.status}
                </SeverityPill>


              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        p: 2,
      }}
    >
      <Button
        color='primary'
        endIcon={<ArrowRightIcon fontSize='small' />}
        size='medium'
        variant='contained'
        style={{backgroundColor: '#912BF6', borderRadius: '25px'}}
      >
        Make it even shorter!
      </Button>
    </Box>
  </Card>
  </div>
  </div>
);

export default Tsa;
