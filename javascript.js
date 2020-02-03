
// document.getElementById('canvas').focus();

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
    ctx.speedY = 3;
    //
    ctx.x = 30;         //sizes
    ctx.y = 30;         
    ctx.px = 50;        //positions
    ctx.py = 300;       
    //
    ctx.fillRect(ctx.px, ctx.py, ctx.x, ctx.y);

}




                function newPos(){
                        
                        if(ctx.py <= 0 ){
                            ctx.speedY = 2;
                            ctx.py = 1;
                        }
                     else if(ctx.py >= 460 ){
                        ctx.speedY = -2;
                        ctx.py = 458;
                    }
                      ctx.py += ctx.speedY;
                    
            }

                function moveup() {
                        if(ctx.speedY <= 3 && ctx.speedY > 0){ ctx.speedY -= 4}
                         
                         else if(ctx.speedY == -3){ ctx.speedY = ctx.speedY}
                         else ctx.speedY = -2
                        
                        
                        
                        
                    
                
            }
  
                function movedown() {
                    if(ctx.speedY <= 3){ ctx.speedY = 2}
                    else ctx.speedY += 2;
                }

                document.onkeydown = function (e) {  
                   
                    switch (e.key) {  
                        
                        case 'ArrowUp':  moveup(); break;
                        case 'ArrowDown': movedown(); break;
                        
                    }


                }




                function getRandomArbitrary(min, max) { return Math.random() * (max - min) + min; }
let r = getRandomArbitrary(240, 550)
let x = 0;

let empty = [];
function stamp() {
    empty.forEach(sq => {
        
        // ctx.fillStyle = sq.color
        ctx.fillRect(sq.x--, sq.y, sq.width, sq.height);
    })

}

function redo() {
    setInterval(() => {
        let sq = {
            x: 860,
            y: getRandomArbitrary(0, 480),
            width: 45,
            height: 300,
            color: 'red'
        }
        empty.push(sq)
    }, 4000)

}
redo()










































            function animate () {
                let loop = window.requestAnimationFrame(animate)
                ctx.clearRect(0, 0, canvas.width, canvas.height)
                newPos()
                ctx.fillRect(ctx.px, ctx.py, ctx.x, ctx.y);
                
                stamp()

                }
                
                
