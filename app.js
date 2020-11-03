const express = require("express");
const app = express();

 app.get('/:num1/:num2', (req, res, next) => {
  const num1 = parseInt(req.params.num1, 10);
  if (isNaN(num1)) { return res.status(400).send('Not an integer'); }
  const num2 = parseInt(req.params.num2, 10);
  if (isNaN(num2)) { return res.status(400).send('Not an integer'); }
  const result = num1 + num2;
  return res.json({sum: result.toString()});
 });

app.get('/:num', (req, res, next) => {
  const parsed = parseInt(req.params.num, 10);
  if (isNaN(parsed)) { return res.status(400).send('Not an integer'); }
  const result = parsed + 10;
  return res.json({sum: result.toString()});
 });

app.listen(process.env.PORT || 3000, () => {
 console.log('Server running on port 3000');
});
