import React from 'react';
import { TableHead, TableRow, TableCell } from '@mui/material';

import './soccer-tableHeaders.css';

export default function SoccerTableHeaders() {
  const tableRows = ["pos", "crest", "team", "pts", "gp", "won", "draw", "lost", "gf", "ga", "gd"];

  return (
    <TableHead className='soccer-tableHead'>
      <TableRow>
        {
          tableRows.map(rowName => {
            return (
              <TableCell align='center' key={rowName}>
                <span className='soccer-headerText'>
                  { rowName.toUpperCase() }
                </span>
              </TableCell>
            )
          })
        }
      </TableRow>
    </TableHead>
  );
};
