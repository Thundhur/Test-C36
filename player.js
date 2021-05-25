class Player{
    constructor(){
    
    
    }
    getCount(){
     var playerCountRef = database.ref("playerCount");
     playerCountRef.on("value",function(data){
     playerCount = data.val();
     })
    }
    updateCount(c){
       database.ref("/").update({
           playerCount: c
       })}
    updateName(n){
    var playerIndex = "Player" + playerCount;   
    database.ref(playerIndex).set({
    Name : n
    })}  
    
    }
    