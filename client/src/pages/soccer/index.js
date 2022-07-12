import React, { useEffect, useState } from 'react';
import { Table, TableContainer, TableBody, TableRow } from '@mui/material';

import SoccerTableHeaders from '../../components/soccer-tableHeaders';
import SoccerTableBody from '../../components/soccer-tableBody';

import './index.css';

export default function SoccerPage() {
  const [standings, setStandings] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/api/soccer')
    .then(res => res.json())
    .then(standings => setStandings(standings))
    .then(setIsLoading(false))
    .catch(err => console.log(err));
  }, []);

  return (
    <TableContainer height='99vh'>
      <Table aria-label="simple table">
        <SoccerTableHeaders />
        {
          isLoading ? 
          <TableBody><TableRow></TableRow></TableBody> :
          <SoccerTableBody standings={standings} />
        }
      </Table>
    </TableContainer>
  );
};
