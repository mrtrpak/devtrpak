import React from 'react';

export default function SoccerPage() {
  let [league, setLeague] = React.useState("BL1");
  let [standings, setStandings] = React.useState(null);

  React.useEffect(() => {
    fetch('/api/soccer')
    .then(res => res.json())
    .then(standings => setStandings(standings))
  }, []);
  
  return (
    <div>
      { standings }
    </div>
  );
};
