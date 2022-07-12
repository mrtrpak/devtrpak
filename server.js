const axios = require('axios').default,
 express = require('express'),
 cors = require("cors"),
 path = require('path'),
 PORT = process.env.PORT || 3333,
 app = express();

const soccerKey = process.env.soccerKey;
const { soccerKeyDevelopment } = require('./secret');
 
 let leagueCode = "BL1";
 
app.use(cors());

//serve static files from react app
app.use(express.static(path.join(__dirname, '/client/build')));

app.get('/', (req, res) => {
  res.send("hello from root route");
});

app.get('/api/soccer',  async (req,res) => {
  try {
    const response = await axios({
      "url": `https://api.football-data.org/v2/competitions/${leagueCode}/standings`,
      "headers": {
        "X-Auth-Token": soccerKey || soccerKeyDevelopment,
        "Content-Type": "application/json"
      }
    })
    res.send(response.data.standings[0].table);
  } catch (err) {
    res.send(err);
  };
});

//catchall handler for any request that doesn't match above options
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.listen(PORT, () => console.log(`server live on http://localhost:${PORT}`));
