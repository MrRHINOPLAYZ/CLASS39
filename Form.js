class Form{
    constructor(){
        this.title = createElement('H1')
        this.title2 = createElement('H3')
       this.input = createInput()
       this. greeting = createElement ('h4')
       this.button = createButton('RIDE!')
    }
    hide(){
        this.input.hide()
        this.button.hide()
        this.greeting.hide()
    }
    
   
    display(){
   
        this.title.html('SIMPLE RIDER')
        this.title.position(displayWidth/2,0)
        this.title2.html("ENTER UR NAME :)")
        this.title2.position(displayWidth/2-300,displayHeight/2-120)
        this.input.position (displayWidth/2,displayHeight/2-100)
        this.button.position(displayWidth/2,displayHeight/2)
        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
player.name = this.input.value()
playerCount+=1
player.index=playerCount
player.updateCount(playerCount)

this.greeting.html('NAME'+player.name)
this.greeting.position(300,150)
    })

    }
    
    
}