let canvas = document.getElementById('snake');
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
let direction = "right";
snake [0] = {
    x: 8 * box, 
    y: 8 * box
    }

function criarbgb(){
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarCobrinha(){
    for(i=0; i < snake.length; i++){
        context.fillStyle = "green"
        context.fillRect(snake[i].x, snake[i].y, box, box)
    }
}

let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,	
    y: Math.floor(Math.random() * 15 + 1) * box
}

function drawfood(){
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box);

}

document.addEventListener('keydown', update);

function update(event){

    if(event.keyCode == 37 && direction != "right") direction = "left";
    if(event.keyCode == 38 && direction != "down") direction = "up";
    if(event.keyCode == 39 && direction != "left") direction = "right";
    if(event.keyCode == 40 && direction != "up") direction = "down";

}


function iniciarjogo(){
if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
if(snake[0].x < 0 * box && direction == "left") snake[0].x = 16 * box;
if(snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
if(snake[0].y < 0 * box && direction == "up") snake[0].y = 16 * box;
    
    criarbgb();
    criarCobrinha();
    drawfood();

    let snakex = snake[0].x;
    let snakey = snake[0].y;

    if(direction == "right") snakex += box;
    if(direction == "left") snakex -= box
    if(direction == "up") snakey -= box
    if(direction == "down") snakey += box
  
    

    let newHead = {
        x: snakex,
        y: snakey
    }

    if( snakex != food.x || snakey != food.y){
        snake.pop();
    }else{
    
        food.x = Math.floor(Math.random() * 15 + 1) * box,	
        food.y = Math.floor(Math.random() * 15 + 1) * box
    }

    snake.unshift(newHead);
}

var jogo = setInterval(iniciarjogo, 100);