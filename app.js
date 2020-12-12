const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.render('top.ejs');
});
app.use(express.static(__dirname));
app.listen(3000);
