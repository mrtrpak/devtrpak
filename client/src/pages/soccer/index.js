import React, { useEffect, useRef, useState } from 'react';
import { Table, TableContainer, Paper } from '@mui/material';

import SoccerTableHeaders from '../../components/soccer-tableHeaders';
import SoccerTableBody from '../../components/soccer-tableBody';

import './index.css';

export default function SoccerPage() {
  const [isSticky, setSticky] = useState(false);
  const ref = useRef(null);

  const handleScroll = () => {
    if (ref && ref.current) {
      setSticky(ref.current.getBoundingClientRect().top <= 0);
    };
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);

  return (
    <TableContainer component={Paper} >
      <Table aria-label="simple table" className={`soccerPage sticky-wrapper${isSticky ? ' sticky' : ''}`} ref={ref}>
        <SoccerTableHeaders />
        <SoccerTableBody />
      </Table>
    </TableContainer>
  );
};
