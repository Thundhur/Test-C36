var hypnoticBall, database;
var position;
var GameStateLocal = 0;
var playerCount = 0;
var form;
var player;
var game;


function setup(){
  database = firebase.database();
  createCanvas(500,500);
  game = new Game();
  game.readState();
  game.start();
}

function draw(){
  background("white");
  
    drawSprites();
  
}
