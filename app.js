// Express toevoegen aan Node.js
const express = require('express');
const app = express();

// bibliotheek inladen om paden naar folder te maken
const path = require('path');

// applicatiepoort instellen
const port = 5000;

// EJS configureren
app.set('view engine', 'ejs');
app.set('views',  path.resolve(__dirname, 'views'));

// vertel aan webserver waar de publieke bestanden zitten
app.use(express.static('public'));


// databestand inladen
const data = require('./data/kunst.json');

// route naar "homepagina" laten werken
app.get("/", function(request, response){
  response.render("home",{
    kunst: data.kunstwerken
  });
});

app.get("/art", function(request, response){
  response.render("art",{
    kunst: data.kunstwerken
  });
});

app.get("/detail", function(request, response){
  response.render("detail",{
    kunst: data.kunstwerken
  });
});

app.get("/contact", function(request, response){
  response.render("contact");
});


app.set('port', (process.env.PORT || 5000));
// app luisteren naar applicatiepoort
app.listen(app.get('port'));
