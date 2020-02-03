
// document.getElementById('canvas').focus();

document.querySelector('#start-button').onclick = function () { //Start button is clicked 
    this.remove()  //removes start button
    startGame() //calls startGame
    startObstacles() // calls Obstacles
    window.requestAnimationFrame(animate)
}




var canvas = document.getElementById('canvas'); //calling canvas
var ctx = canvas.getContext('2d');
 

function startGame() {
    //making player object
    ctx.fillStyle="blue";

    //speed start
    ctx.speedY = 4;
    //
    ctx.x = 30;         //sizes
    ctx.y = 30;         
    ctx.px = 50;        //positions
    ctx.py = 300;       
    //
    ctx.fillRect(ctx.px, ctx.py, ctx.x, ctx.y);

}

let obstacles = [] // Obstacles

function drawObstacle(){
  obstacles.forEach(obstacle=>{
    ctx.fillStyle = 'green'
     
    if(obstacle.direction){
      ctx.fillRect(obstacle.x-=5, obstacle.y, obstacle.width, obstacle.height)
    } else {
      ctx.fillRect(obstacle.x-=5, obstacle.y, obstacle.width, obstacle.height)

    }
  })
}

function startObstacles(){
    setInterval(function(){
      let obs = {
        x:900,
        y:Math.random()*canvas.width,
        width: 30,
        height: 100,
        direction: Math.random() >= 0.5//randomly true or false 
      }
  
      obstacles.push(obs)
  
    }, 1000)
  }
  
  


                function newPos(){
                ctx.py === ctx.speedY;
            }
                function moveup() {
                ctx.speedY -= 5;
            }
  
                function movedown() {
                    ctx.speedY += 5;
                }

                document.onkeydown = function (e) {  
                   
                    switch (e.key) {  
                        
                        case 'ArrowUp':  moveup(); break;
                        case 'ArrowDown': movedown(); break;
                        
                    }


                }

            function animate () {
                let loop = window.requestAnimationFrame(animate)
                ctx.clearRect(0, 0, canvas.width, canvas.height)
                newPos()
                ctx.fillRect(ctx.px, ctx.py, ctx.x, ctx.y);
                drawObstacle()



                }
                
                
