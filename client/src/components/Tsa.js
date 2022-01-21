import * as React from 'react';

import {
  Box,
  Button,
  Card,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip
} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { SeverityPill } from '/Users/sagalafrah/lighthouse/w11/AirTimeApp/client/src/components/helpers/severity-pill.js';

const orders = [
  {
    id: "Terminal 1",
    ref: 'Terminal 1',
    amount: 30.5,
    customer: {
      name: '9, 10, 11A-11B, 12A-12B, 13-15, 16A, 17A-17B'
    },
    createdAt: 1555016400000,
    status: 'pending'
  },
  {
    id: "Terminal 1",
    ref: 'Terminal 2',
    amount: 25.1,
    customer: {
      name: 'Hub for International Flights'
    },
    createdAt: 1555016400000,
    status: 'delivered'
  },
  {
    id: "Terminal 1",
    ref: 'Terminal 3',
    amount: 10.99,
    customer: {
      name: 'Only used by Delta Airlines.'
    },
    createdAt: 1554930000000,
    status: 'refunded'
  },
  {
    id: "Terminal 1",
    ref: 'Terminal 4',
    amount: 96.43,
    customer: {
      name: 'Only used by American Airlines'
    },
    createdAt: 1554757200000,
    status: 'pending'
  },
  {
    id: "Terminal 1",
    ref: 'Terminal 5',
    amount: 32.54,
    customer: {
      name: '50A, 50B, 51A, 51B, 53A, 53B, 54A, 54B, 55A, 56, 57, 58, 59'
    },
    createdAt: 1554670800000,
    status: 'delivered'
  },
  {
    id: "Terminal 1",
    ref: 'Terminal 6',
    amount: 16.76,
    customer: {
      name: '60, 63, 64A, 64B, 65A, 65B, 66, 67, 68A, 68B, 69A 69B'
    },
    createdAt: 1554670800000,
    status: 'delivered'
  }
];

export const Tsa = (props) => (
  <Card {...props}>
    <CardHeader title="Latest Orders" />
      <Box sx={{ minWidth: 800 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                Order Ref
              </TableCell>
              <TableCell>
                Customer
              </TableCell>
              <TableCell sortDirection="desc">
                <Tooltip
                  enterDelay={300}
                  title="Sort"
                >
                  <TableSortLabel
                    active
                    direction="desc"
                  >
                    Date
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
              <TableCell>
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow
                hover
                key={order.id}
              >
                <TableCell>
                  {order.ref}
                </TableCell>
                <TableCell>
                  {order.customer.name}
                </TableCell>
                <TableCell>
                </TableCell>
                <TableCell>
                  <SeverityPill
                    color={(order.status === 'delivered' && 'success')
                    || (order.status === 'refunded' && 'error')
                    || 'warning'}
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
        p: 2
      }}
    >
      <Button
        color="primary"
        endIcon={<ArrowRightIcon fontSize="small" />}
        size="small"
        variant="text"
      >
        View all
      </Button>
    </Box>
  </Card>
);


export default Tsa;