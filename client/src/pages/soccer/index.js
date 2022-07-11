import React, { useEffect, useRef, useState } from 'react';
import { Table, TableContainer, Paper } from '@mui/material';

import SoccerTableHeaders from '../../components/soccer-tableHeaders';
import SoccerTableBody from '../../components/soccer-tableBody';

import './index.css';

export default function SoccerPage() {

  return (
    <TableContainer component={Paper} className='soccer-tableContainer'>
      <Table aria-label="simple table" className='soccer-table'>
        <SoccerTableHeaders className='sticky' />
        <SoccerTableBody />
      </Table>
    </TableContainer>
  );
};
