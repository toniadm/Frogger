// Enemies our player must avoid
let Enemy = function(x, y) {

  // Set speed of enemies
  this.x = x;
  this.y = y;
  this.speed = Math.random() * 300;

  // Image sprite for our enemies
  this.sprite = "images/enemy-bug.png";
};

Enemy.prototype.update = function(dt) {

  // Movement and sped of enemy objects
  this.x += this.speed * dt;
  if (this.x > 500) {
    this.x = -50;
    this.speed = Math.floor(Math.random() * 175) + 150;
  }

  // Collision detection between player and enemies
  if (
    player.x < this.x + 65 &&
    player.x + 65 > this.x &&
    player.y < this.y + 65 &&
    65 + player.y > this.y
  ) {
    alert("Oops! Try again!");
    player.x = 210;
    player.y = 360;
  }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Initialize player variable for the game
let Player = function() {
  this.sprite = "images/char-pink-girl.png";
  this.x = 210;
  this.y = 360;
};

Player.prototype.update = function(dt) {

  //Ensure player does not go off left/right side of the screen
  if (player.x > 400) {
     player.x = 400;
  }

  if (player.x < 5) {
    player.x = 5;
  }

  // Ensure player does not go off bottom of the screen
  if (player.y > 400) {
    player.y = 400;
  }

  // When player reaches water go back to original position
  if (player.y < 10) {
    alert("You won the game!");
    player.x = 210;
    player.y = 380;
  }
};

// Draw the player on screen
Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Control movement of player
Player.prototype.handleInput = function(key) {
  switch (key) {
    case "left":
      this.x -= 35;
      break;

    case "right":
      this.x += 35;
      break;

    case "up":
      this.y -= 35;
      break;

    case "down":
      this.y += 35;
      break;
  }
};

// Initialize variable containing enemy objects as an array
let allEnemies = [new Enemy(250, 200), new Enemy(90, 60), new Enemy(25, 150)];

// Initialize variable containing player object
let player = new Player();

// This listens for key presses and sends the keys to player.handleInput
document.addEventListener("keyup", function(e) {
  let allowedKeys = {
    37: "left",
    38: "up",
    39: "right",
    40: "down"
  };

  player.handleInput(allowedKeys[e.keyCode]);
});
