import React from 'react';
import { Table } from '@mui/material';
import TableScrollBar from 'react-table-scrollbar';

import SoccerTableHeaders from '../../components/soccer-tableHeaders';
import SoccerTableBody from '../../components/soccer-tableBody';

import './index.css';

export default function SoccerPage() {

  return (
    <TableScrollBar height='99vh'>
      <Table aria-label="simple table">
        <SoccerTableHeaders />
        <SoccerTableBody />
      </Table>
    </TableScrollBar>
  );
};
