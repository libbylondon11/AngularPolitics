var express=require('express');
var path=require('path');
var app=express();

var democrats=['Hillary Clinton', 'Bernie Sanders', 'Martin O\'Malley', 'Elizabeth Warren', 'Jill Stein', 'Lucy Florez', 'Winona LaDuke', 'Al Franken'];
var republicans=['Donald Drumpf', 'Ted Cruz', 'John Kasich', 'Jeb Bush', 'Carly Fiorina', 'Rick Santorum', 'Marco Rubio', 'Gary Johnson'];
var totalPoliticians=[];

app.use(express.static('server/public'));

for(var i=0; i < democrats.length; i++){
  console.log(democrats[i]);
  totalPoliticians.push(democrats[i]);
  totalPoliticians.push(republicans[i]);
}
app.get('/', function(request, response){
  console.log(__dirname);
  response.sendFile(__dirname + '/public/index.html');
});

app.get('/democrats', function(request, response){
  console.log('Hit democrats end point');
  response.send(democrats);
});
app.get('/republicans', function(request, response){
  console.log('Hit republicans end point');
  response.send(republicans);
});

app.get('/winner', function(request, response){
  console.log('Hit winner end point');
  var random=totalPoliticians[Math.floor(totalPoliticians.length * Math.random())];
  response.send(random);
});

var server=app.listen(3000, function() {
var port=server.address().port
console.log('Listening on port', port);
});
