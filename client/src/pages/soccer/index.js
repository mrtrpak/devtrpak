import React, { useState, useEffect} from 'react';

export default function SoccerPage() {
  let [standings, setStandings] = useState({});

  useEffect(() => {
    fetch('/api/soccer')
    .then(res => res.json())
    .then(standings => setStandings({ standings }))
    .catch(err => console.log(err));
  }, []);

  console.log(standings, "log standings");

  return (
    <div>
      <h1>Here are soccer standings</h1>
    </div>
  );
};
