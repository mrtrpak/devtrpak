import React, { useState, useEffect} from 'react';

export default function SoccerPage() {
  let [standings, setStandings] = useState({ table: {}});

  useEffect(() => {
    fetch('/api/soccer')
    .then(res => res.json())
    .then(standings => setStandings({ table: standings }))
    .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h1>Here are soccer standings</h1>
      { standings }
    </div>
  );
};
