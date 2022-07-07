import React, { useEffect, useState } from 'react';
import { TableBody, TableRow, TableCell } from '@mui/material';

import { standingsTest } from '../testing';

import './soccer-tableBody.css';

export default function SoccerTableBody() {
  // const [standings, setStandings] = useState();

  useEffect(() => {
    // fetch('/api/soccer')
    // .then(res => res.json())
    // .then(standings => setStandings(standings))
    // .catch(err => console.log(err));
  }, []);

  return (
    <TableBody className='soccer-tableBody'>
      {
        Object.entries(standingsTest).map((team, idx) => {
          const { name, crestUrl } = team[1].team;
          const { position, playedGames, won, draw, lost, points, goalsFor, goalsAgainst, goalDifference } = team[1];
          
          return (
            <TableRow key={idx} className={`place-${position}`}>
              <TableCell align='center' className='position'><span className='position-text'>{position}</span></TableCell>
              <TableCell align='center'><img src={crestUrl} alt="team crest" className='image'></img></TableCell>
              <TableCell align='center' className='team-name'>{name}</TableCell>
              <TableCell align='center' className='points'><span className='points-text'>{points}</span></TableCell>
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
  );
};
