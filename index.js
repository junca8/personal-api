var express = require('express');
var bodyParser = require('body-parser');
var mainCtrl = require('./controllers/mainCtrl.js');
var middleware = require('./controllers/middleware.js');
var app = express();

app.use(bodyParser.json());
app.use(middleware.addHeaders);

app.get('/secrets/:username/:pin', middleware.verifyUser, mainCtrl.getSecrets);
app.get('/name', mainCtrl.getName);
app.get('/location', mainCtrl.getLocation);
app.get('/occupations', mainCtrl.getOccupations);
app.get('/occupations/latest', mainCtrl.getLatestOccupation);
app.get('/hobbies', mainCtrl.getHobbies);
app.get('/hobbies/:type', mainCtrl.getHobbiesByType);
app.get('/skillz', mainCtrl.getSkillz);
app.post('/name', mainCtrl.postName);
app.post('/location', mainCtrl.postLocation);
app.post('/occupations', mainCtrl.postOccupations);
app.post('/hobbies', mainCtrl.postHobbies);
app.post('/skillz', middleware.generateId, mainCtrl.postSkillz);


app.listen(3000);
