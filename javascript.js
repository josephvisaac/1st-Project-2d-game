

document.querySelector('#start-button').onclick = function () { //Start button is clicked 
    this.remove()  //removes start button
    startGame() //calls startGame
}




var canvas = document.getElementById('canvas'); //calling canvas
var ctx = canvas.getContext('2d');
 

function startGame() {
    //making player object
    ctx.fillStyle="blue";

    //speed start
    ctx.speedY = 5;
    //
    ctx.x = 30;         //sizes
    ctx.y = 30;         
    ctx.px = 50;        //positions
    ctx.py = 245;       
    //
    ctx.fillRect(ctx.px, ctx.py, ctx.x, ctx.y);

}




ctx.newPos = function() {
    this.y += this.speedY;
  }

  function updateGameArea() {9
    ctx.newPos();
    ctx.update();
  }
  function moveup() {
    ctx.speedY -= 1;
  }
  
  function movedown() {
    ctx.speedY += 1;
  }
  


 
    
   window.requestAnimationFrame(updateGameArea)
