var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
var CampG = [
    { name : "Random" , image : "https://picsum.photos/200"},
    { name : "NRandom", image : "https://picsum.photos/200"},
    { name : "NNRandom", image : "https://picsum.photos/200"},
    { name : "NNRandom", image : "https://picsum.photos/200"},

    { name : "NNRandom", image : "https://picsum.photos/200"},

    { name : "NNRandom", image : "https://picsum.photos/200"},

    { name : "NNRandom", image : "https://picsum.photos/200"},

    { name : "NNRandom", image : "https://picsum.photos/200"},

    { name : "NNRandom", image : "https://picsum.photos/200"},

    { name : "NNRandom", image : "https://picsum.photos/200"},
    { name : "NNRandom", image : "https://picsum.photos/200"},
    { name : "NNRandom", image : "https://picsum.photos/200"},
    { name : "NNRandom", image : "https://picsum.photos/200"},
    { name : "NNRandom", image : "https://picsum.photos/200"}

    
];
app.get("/", function(req,res){

    res.render("landing");
});

app.get("/campgrounds" , function(req,res){


    res.render("campgrounds", {data : CampG} );
});
app.post("/campgrounds", function(req,res){
    var ng  = req.body.name ; 
    var ni = req.body.image;
    var newCampG =  { name : ng , image : ni };
    CampG.push(newCampG);
    res.redirect("/campgrounds");
      
});
app.get("/campgrounds/new",function(req,res){
      res.render("new");

});


app.listen(3128,function(){

    console.log("Here We GOOOO!!!!");
});
