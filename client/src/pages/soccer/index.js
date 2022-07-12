import React from 'react';
import { Table, TableContainer } from '@mui/material';

import SoccerTableHeaders from '../../components/soccer-tableHeaders';
import SoccerTableBody from '../../components/soccer-tableBody';

import './index.css';

export default function SoccerPage() {

  return (
    <TableContainer height='99vh'>
      <Table aria-label="simple table">
        <SoccerTableHeaders />
        <SoccerTableBody />
      </Table>
    </TableContainer>
  );
};
