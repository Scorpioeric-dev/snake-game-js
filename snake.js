const cvs = document.getElementById("snake");
const ctx = cvs.getContext("2d");

//the unit
const box = 32;

//Images
const ground = new Image();
ground.src = "img/ground.png";

const foodImg = new Image();
foodImg.src = "img/food.png";

//create Snake
const snake = [];
snake[0] = {
  x: 9 * box,
  y: 10 * box,
};

//create Food
const food = {
  x: Math.floor(Math.random() * 17 + 1) * box,
  y: Math.floor(Math.random() * 15 + 3) * box,
};

//create Score
const score = 0;

//Draw Function
const draw = () => {
  ctx.drawImage(ground, 0, 0);
  for (let i = 0; i < snake.length; i++) {
    ctx.fillStyle = i == 0 ? "green" : "white";
    ctx.fillRect(snake[i].x, snake[i].y, box, box);

    ctx.strokeStyle = "red";
    ctx.strokeRect(snake[i].x, snake[i].y, box, box);
  }
  ctx.drawImage(foodImg, food.x, food.y);

  let snakeX = snake[0].x;
  let snakeY = snake[o].y;

  snake.pop()
  //Direction of snake controls
  if()

  ctx.fillStyle = "white";
  ctx.font = "45px Pixel";
  ctx.fillText(score, 2 * box, 1.6 * box);
};

//call draw every 100 ms
const game = setInterval(draw, 100);
