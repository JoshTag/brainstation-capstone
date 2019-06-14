const express = require('express');
const cors = require('cors');
const itemHistory = require('./Routes/WowDataRoute')
const app = express();
const port = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use('/details', itemHistory);

app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
});
