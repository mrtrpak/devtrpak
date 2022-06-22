import React, { useState, useEffect } from 'react';
import { Table, TableCell, TableContainer, TableHead, TableRow, Paper, TableBody } from '@mui/material';

import { standingsTest } from '../testing';

import './soccer-table.css';


export default function SoccerTable() {
  // const [standings, setStandings] = useState();

  useEffect(() => {
    
    // fetch('/api/soccer')
    // .then(res => res.json())
    // .then(standings => setStandings(standings))
    // .catch(err => console.log(err));
  }, []);

  const tableRows = ["pos", "team", "crest", "pts", "gp", "won", "draw", "lost", "gf", "ga", "gd"];

  return (
    <TableContainer component={Paper} sx={{ overflow: 'hidden'}}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead className='header'>
          <TableRow>
          {
            tableRows.map(rowName => {
              return (
                <TableCell key={rowName} className='table-headers bold'>
                  { rowName.toUpperCase() }
                </TableCell>
              )
            })
          }
          </TableRow>
        </TableHead>
        <TableBody>
          {
            Object.entries(standingsTest).map((team, idx) => {
              const { name, crestUrl } = team[1].team;
              const { position, playedGames, won, draw, lost, points, goalsFor, goalsAgainst, goalDifference } = team[1];
              
              return (
                <TableRow key={idx} className={`${position}-place`}>
                  <TableCell align='center' className='position'>{position}</TableCell>
                  <TableCell align='center' className='team-name'>{name}</TableCell>
                  <TableCell align='center' className='image'><img src={crestUrl} alt="team crest"></img></TableCell>
                  <TableCell align='center' className='points'>{points}</TableCell>
                  <TableCell align='center' className='gp'>{playedGames}</TableCell>
                  <TableCell align='center' className='won'>{won}</TableCell>
                  <TableCell align='center' className='draw'>{draw}</TableCell>
                  <TableCell align='center' className='lost'>{lost}</TableCell>
                  <TableCell align='center' className='gf'>{goalsFor}</TableCell>
                  <TableCell align='center' className='ga'>{goalsAgainst}</TableCell>
                  <TableCell align='center' className='gd'>{goalDifference}</TableCell>
                </TableRow>
              )
            })
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
};
