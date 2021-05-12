var gameState = 0
var playerCount = 0
var database 
var form,player,game
var allPlayers
var car1
var car2
var cars
function setup (){
    createCanvas(displayWidth,displayHeight)
    database = firebase.database()
    game=new Game()
    game.getState()
    game.start()
}
function draw(){
if(playerCount===2){
    game.update(1)
}
if (gameState===1){
    clear()
        game.play()
}
}
