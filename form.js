class Form{
    constructor(){
    
    
    }
    
       
    display(){
    var title = createElement("h2");
    title.html("Car Racing");
    var input = createInput("Type your Name here!")
    input.position(130,160);
    var button = createButton("Start Racing")
    button.position(250,200);
    var Greeting = createElement("h3")
    button.mousePressed(function(){
       input.hide();
       button.hide();
       var name = input.value();
       playerCount = playerCount + 1;
       console.log(playerCount)
       player.updateName(name);
       player.updateCount(playerCount);
       Greeting.html("Hello " + name);
       Greeting.position(130,160);
    });
    
    }
    }
    