const express = require('express');
const cors = require('cors');
const itemHistory = require('./Routes/wowData');
const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use('/items', itemHistory);

app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
});
