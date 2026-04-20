import { useEffect, useState } from "react";
import { Analytics } from '@vercel/analytics/react';

function App() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/predictions")
      .then(res => res.json())
      .then(data => setMatches(data.matches));
  }, []);

  return (
    <div>
      <h1>BetAI</h1>
      {matches.map((m, i) => (
        <div key={i}>
          {m.home} vs {m.away} - Tip: {m.tip} ({m.confidence}%)
        </div>
      ))}
      <Analytics />
    </div>
  );
}

export default App;
