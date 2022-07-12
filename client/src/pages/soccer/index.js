import React, { useEffect, useState } from 'react';
import { Table, TableContainer } from '@mui/material';

import SoccerTableHeaders from '../../components/soccer-tableHeaders';
import SoccerTableBody from '../../components/soccer-tableBody';

import './index.css';

export default function SoccerPage() {
  const [standings, setStandings] = useState();

  useEffect(() => {
    fetch('/api/soccer')
    .then(res => res.json())
    .then(standings => setStandings(standings))
    .catch(err => console.log(err));
  }, []);

  return (
    <TableContainer height='99vh'>
      <Table aria-label="simple table">
        <SoccerTableHeaders />
        <SoccerTableBody standings={standings} />
      </Table>
    </TableContainer>
  );
};
