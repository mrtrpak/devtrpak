import React, { useState, useEffect } from 'react';
import { Table, Tablebody, TableCell, TableContainer, TableHead, TableRow, Paper, TableBody } from '@mui/material';

export default function SoccerTable() {
  let [standings, setStandings] = useState({});

  useEffect(() => {
    fetch('/api/soccer')
    .then(res => res.json())
    .then(standings => setStandings({ standings }))
    .catch(err => console.log(err));
  }, []);

  // eslint-disable-next-line no-undef
  const tableRows = [pos, team, crest, pts, won, draw, lost, gf, ga, gd];

  return (
    <TableContainer>
      <Table stickyHeader aria-label="simple table">
        <TableHead>
          <TableRow>
          {
            tableRows.map(rowName => {
              return (
                <TableCell className='table-headers'>
                  { rowName.toUpperCase() }
                </TableCell>
                )
              })
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {
            Object.entries(standings).map((team, idx) => {
              const { name, crestUrl } = team[1].team;
              const { position, playedGames, won, draw, lost, points, goalsFor, goalsAgainst, goalDifference } = team[1];
              
              
            })
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
};
