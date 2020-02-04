
// document.getElementById('canvas').focus();

document.querySelector('#start-button').onclick = (e) => { //Start button is clicked 
    console.log(e.target, this);
    e.target.remove()  //removes start button
    startGame(); //calls startGame
    window.requestAnimationFrame(animate)
}




var canvas = document.getElementById('canvas'); //calling canvas
var ctx = canvas.getContext('2d');







function startGame() {
    console.log('bla')
    //making player object
    empty = [];

    //speed start
    ctx.speedY = 4;
    //
    ctx.x = 30;         //sizes
    ctx.y = 30;
    ctx.px = 50;        //positions
    ctx.py = 300;
    //
    //ctx.fillRect(ctx.px, ctx.py, ctx.x, ctx.y);
    drawBlueSquare()
    redo()
    
}   





function drawBlueSquare(){
    ctx.fillStyle = "blue";
    ctx.fillRect(ctx.px, ctx.py, ctx.x, ctx.y);
}
function newPos() {

    if (ctx.py <= 0) {
        ctx.speedY = 4;
        ctx.py = 1;
    }
    else if (ctx.py >= 460) {
        ctx.speedY = -4;
        ctx.py = 458;
    }
    ctx.py += ctx.speedY;

}

function moveup() {
    ctx.speedY = -4
}

function movedown() {
    
     ctx.speedY = 4;
}

document.onkeydown = function (e) {

    switch (e.key) {

        case 'ArrowUp': moveup(); break;
        case 'ArrowDown': movedown(); break;

    }


}




function getRandomArbitrary(min, max) { return Math.random() * (max - min) + min; }
let r = getRandomArbitrary(240, 550)
let x = 0;

// let empty = [];

// function checkCollision(sq){
//     console.log(sq, ctx.px, ctx.py, ctx.x, ctx.y)
//     if(sq.x < ctx.px + ctx.x && )
//     // if (rect1.x < rect2.x + rect2.width &&
// //     rect1.x + rect1.width > rect2.x &&
// //     rect1.y < rect2.y + rect2.height &&
// //     rect1.y + rect1.height > rect2.y) {


// }

function stamp(){
    empty.forEach(sq=>{
        ctx.fillStyle = sq.color
        ctx.fillRect(sq.x -=2,sq.y,sq.width, sq.height)
        checkCollision(sq)
    })
    
  
}
let sq = {
    x: 860,
    y: getRandomArbitrary(0, 400),
    width: 5,
    height: 110,
    color:'red'
}
function redo() {
    console.log('called')
    setInterval(() => {
        let sq = {
            x: 860,
            y: getRandomArbitrary(0, 400),
            width: 5,
            height: 110,
            color:'red'
        }
        empty.push(sq)
    }, 1750)
console.log(sq)
   
}

// if (rect1.x < rect2.x + rect2.width &&
//     rect1.x + rect1.width > rect2.x &&
//     rect1.y < rect2.y + rect2.height &&
//     rect1.y + rect1.height > rect2.y) {






function animate() {
    let loop = window.requestAnimationFrame(animate)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    newPos()
    
    drawBlueSquare()
    stamp()
    
   
}


