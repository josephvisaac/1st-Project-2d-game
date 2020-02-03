

document.querySelector('#start-button').onclick = function () { //Start button is clicked 
    this.remove()  //removes start button
    startGame() //calls startGame
    window.requestAnimationFrame(animate)
}




var canvas = document.getElementById('canvas'); //calling canvas
var ctx = canvas.getContext('2d');
 

function startGame() {
    //making player object
    ctx.fillStyle="blue";

    //speed start
    ctx.speedY = 0;
    //
    ctx.x = 30;         //sizes
    ctx.y = 30;         
    ctx.px = 50;        //positions
    ctx.py = 300;       
    //
    ctx.fillRect(ctx.px, ctx.py, ctx.x, ctx.y);

}




                function newPos(){
                ctx.py += ctx.speedY;
            }
                function moveup() {
                ctx.speedY -= 1;
            }
  
                function movedown() {
                    ctx.speedY += 1;
                }


            function animate () {
                let loop = window.requestAnimationFrame(animate)
                ctx.clearRect(0, 0, canvas.width, canvas.height)
                newPos()
                ctx.fillRect(ctx.px, ctx.py, ctx.x, ctx.y);


                }
                
                
