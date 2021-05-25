class Game{
constructor(){


}
readState(){
 var gamestateref = database.ref("GameState");
 gamestateref.on("value",function(data){
GameStateLocal = data.val();
 })
}
updateState(s){
   database.ref("/").update({
       GameState: s
   })}

start(){
if(GameStateLocal === 0){
  player = new Player()
  player.getCount()
  form = new Form()
  form.display();

}
   }
}
