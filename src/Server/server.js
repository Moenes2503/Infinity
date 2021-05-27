const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/login', (req, res) => {
  console.log(req.body)
  const { username, password } = req.body;
  console.log(username, password)
  const isAuthenticated = username === 'test@test.com' && password === 'test';
  if(isAuthenticated) {
    return res.send({
      token: 'test123'
    });
  }

  return  res.sendStatus(401);
});

app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));