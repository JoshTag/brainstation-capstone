const express = require('express');
const cors = require('cors');
const itemHistory = require('./Routes/WowDataRoute')
const app = express();
const port = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


const corsConfig = {
  origin: ['http://localhost:3000', 'https://warcraftauctions.netlify.app']
}
app.use(cors(corsConfig));

app.use('/details', itemHistory);

app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
});
