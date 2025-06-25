const game= document.getElementById("dodger");

function moveDodgerLeft(){
   
   game.style.backgroundColor =  "red";
   const leftNumbers = game.style.left.replace("px", "");
   const left = parseInt(leftNumbers, 10);
   if (left > 0){
    game.style.left = `${left - 1}px`;

   }

}
game.addEventListener("keydown", function(event){
    if(event.key === "ArrowLeft") {
        moveDodgerLeft();
    }
})
function moveDodgerRight(){
    const rightNumbers = game.style.left.replace("px", "");
    const left = parseInt(rightNumbers, 10);
    if (left >= 0){
        game.style.left = `${left + 1}px`;
    }
}
game.addEventListener("keydown", function(event){
    if (event.key === "ArrowRight"){
        moveDodgerRight();
    }
})