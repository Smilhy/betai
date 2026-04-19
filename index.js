import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/api/predictions', (req, res) => {
  res.json({
    matches: [
      {
        home: "Manchester City",
        away: "Arsenal",
        tip: "Manchester City",
        confidence: 62,
        odds: "1.80"
      }
    ]
  });
});

app.listen(3001, () => console.log("Backend running on 3001"));
