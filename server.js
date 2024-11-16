const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Example data table (array of objects)
const dataTable = [
  { id: 1, name: 'Item 1', value: 100 },
  { id: 2, name: 'Item 2', value: 200 },
  { id: 3, name: 'Item 3', value: 300 }
];

// Endpoint to get the table data
app.get('/data', (req, res) => {
  res.json(dataTable);  // Sends the table data as JSON
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
