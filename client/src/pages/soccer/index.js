import React from 'react';
import { Paper } from '@mui/material';

import SoccerTable from '../../components/soccer-table';

import './index.css';

export default function SoccerPage() {

  return (
    <div className='soccerPage'>
      <SoccerTable component={Paper} />
    </div>
  );
};
