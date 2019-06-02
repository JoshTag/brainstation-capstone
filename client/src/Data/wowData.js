const csv = require('csv-parser');  
const fs = require('fs');

const itemHistory = [];

fs.createReadStream('./WoWData.csv')  
  .pipe(csv())
  .on('data', (row) => {
    console.log(row);
    itemHistory.push(row);
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
  });

module.exports = itemHistory;