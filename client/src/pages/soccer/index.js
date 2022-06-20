import React from 'react';

export default function SoccerPage() {
  let [standings, setStandings] = React.useState(null);

  React.useEffect(() => {
    fetch('/api/soccer')
    .then(res => res.json())
    .then(standings => setStandings({ standings }))
  }, []);

  return (
    <div>
      <h1>Here are soccer standings</h1>
      { standings }
    </div>
  );
};
