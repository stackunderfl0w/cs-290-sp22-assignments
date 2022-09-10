/*
 * Write your routing code in this file.  Make sure to add your name and
 * @oregonstate.edu email address below.
 *
 * Name:
 * Email:
 */

var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var fs = require('fs');

var app = express();
var port = process.env.PORT || 3000;
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

var twitJson = fs.readFileSync('./twitData.json');
var twitData = JSON.parse(twitJson); //get the tweet data (text/authors)
app.get('/', function (req, res) {
  res.status(200).render('twitcontainer', {data: twitData, index: 1}); 
});
app.get('/twits/%3C:twit%3E', function (req, res){
  var index = req.params.twit;
  var twit = [];
  if((index > 0)&&(index < twitData.length)){ 
    twit.push(twitData[index]); 
    res.status(200).render('twitcontainer', {data: twit, index: 0}); 
  }
  else{ 
    res.status(404).render('404');
  }
});

app.use(express.static('public'));

app.get('*', function (req, res) {
  res.status(404).render('404');
});

app.listen(port, function () {
  console.log("== Server is listening on port", port);
});
