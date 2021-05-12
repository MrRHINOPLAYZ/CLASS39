class Game{
constructor(){

}
getState(){
    var gameRef = database.ref('gameState')
    gameRef.on('value',function(data){
        gameState=data.val()

    })
}
update(state){
    database.ref('/').update({ gameState: state });

}
async start(){
    if (gameState===0){
        player=new Player()
        var playerRef=await database.ref('playerCount').once('value')
        if (playerRef.exists()){
playerCount=playerRef.val()
player.getCount()
        }
        form = new Form()
        form.display()
    }
    car1=createSprite(100,200)
    car2=createSprite(300,200)
    cars=[car1,car2]
}
play(){
    form.hide()
        text('gameStart',100,100)
        Player.getPlayerInfo()
        if(allPlayers!==undefined){
            var index=0
            var x=0
            var y=0
            var pos=150
            for (var plr in allPlayers){
                index=index+1
                x=x+200
                y=displayHeight-allPlayers[plr].distance
               
                cars[index-1].x=x
                cars[index-1].y=y
                
                if (index===player.index){
                    fill("red")
                    cars[index-1].shapeColor="RED"
                    camera.position.x=displayWidth/2
                    camera.position.y=cars[index-1].y
                }
                else{
                    fill("black")
                }
                text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,pos)
                pos+=20
                drawSprites()
            }
        }
        if(keyIsDown(UP_ARROW)&& player.index!==null){
            player.distance+=50
            player.update();

        }

}
}
