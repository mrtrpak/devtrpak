import React from 'react';
import { Table, TableContainer, Paper } from '@mui/material';

import SoccerTableHeaders from '../../components/soccer-tableHeaders';
import SoccerTableBody from '../../components/soccer-tableBody';

import './index.css';

export default function SoccerPage() {

  return (
    <TableContainer component={Paper} >
      <Table aria-label="simple table" className='soccerPage'>
        <SoccerTableHeaders />
        <SoccerTableBody />
      </Table>
    </TableContainer>
  );
};
