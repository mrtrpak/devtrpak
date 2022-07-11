import React, { useEffect, useState } from 'react';
import { TableBody, TableRow, TableCell } from '@mui/material';

// import { standingsTest } from '../testing';

import './soccer-tableBody.css';

export default function SoccerTableBody() {
  const [standings, setStandings] = useState();

  

  useEffect(() => {
    fetch('/api/soccer')
    .then(res => res.json())
    .then(standings => setStandings(standings))
    .catch(err => console.log(err));
    
  }, []);

  return (
    <TableBody className='soccer-tableBody'>
      {
        Object.entries(standings).map((team, idx) => {
          const { name, crestUrl } = team[1].team;
          const { position, playedGames, won, draw, lost, points, goalsFor, goalsAgainst, goalDifference } = team[1];
          
          return (
            <TableRow key={idx} className={`place-${position}`}>
              <TableCell align='center'><span className='position-text'>{position}</span></TableCell>
              <TableCell align='center'><img src={crestUrl} alt="team crest" className='image'></img></TableCell>
              <TableCell align='center'>{name}</TableCell>
              <TableCell align='center'><span className='points-text'>{points}</span></TableCell>
              <TableCell align='center'>{playedGames}</TableCell>
              <TableCell align='center'>{won}</TableCell>
              <TableCell align='center'>{draw}</TableCell>
              <TableCell align='center'>{lost}</TableCell>
              <TableCell align='center'>{goalsFor}</TableCell>
              <TableCell align='center'>{goalsAgainst}</TableCell>
              <TableCell align='center'>{goalDifference}</TableCell>
            </TableRow>
          )
        })
      }
    </TableBody>
  );
};