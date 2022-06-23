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

  // const header = document.getElementById('header');
  // const sticky = header.offsetTop;
  // const stickyHeader = () => {
  //   window.pageYOffset > sticky ? 
  //     header.classList.add('sticky') : header.classList.remove('sticky');
  // }
  // window.onscroll = () => stickyHeader();


  const tableRows = ["pos", "crest", "team name", "pts", "gp", "won", "draw", "lost", "gf", "ga", "gd"];

  return (
    <TableContainer component={Paper} sx={{ overflow: 'hidden'}}>
      <Table aria-label="simple table">
        <TableHead className='tableHead'>
          <TableRow className='header'>
          {
            tableRows.map(rowName => {
              return (
                <TableCell align='center' key={rowName}>
                  { rowName.toUpperCase() }
                </TableCell>
              )
            })
          }
          </TableRow>
        </TableHead>
        <TableBody className='tableBody'>
          {
            Object.entries(standingsTest).map((team, idx) => {
              const { name, crestUrl } = team[1].team;
              const { position, playedGames, won, draw, lost, points, goalsFor, goalsAgainst, goalDifference } = team[1];
              
              return (
                <TableRow key={idx} className={`${position}-place`}>
                  <TableCell align='center' className='position'>{position}</TableCell>
                  <TableCell align='center'><img src={crestUrl} alt="team crest" className='image'></img></TableCell>
                  <TableCell align='center' className='team-name'>{name}</TableCell>
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
