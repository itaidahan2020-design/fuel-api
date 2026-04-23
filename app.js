const express = require('express');
const app = express();

app.use('/api', require('./api/gas.js'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
