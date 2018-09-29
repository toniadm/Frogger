// Enemies our player must avoid

var Enemy = function(x, y) {
  // Variables applied to each of our instances go here,
  this.x = x;
  this.y = y;
  this.speed = Math.random() * 300;
  // we've provided one for you to get started

  // The image/sprite for our enemies, this uses
  // a helper we've provided to easily load images
  this.sprite = "images/enemy-bug.png";
};

Enemy.prototype.update = function(dt) {
  // movement and sped of enemy objects
  this.x += this.speed * dt;
  if (this.x > 500) {
    this.x = -50;
    this.speed = 100 + Math.floor(Math.random() * 260);
  }

  //Collision detection between player and enemies
  if (
    player.x < this.x + 80 &&
    player.x + 80 > this.x &&
    player.y < this.y + 60 &&
    60 + player.y > this.y
  ) {
    player.x = 202;
    player.y = 405;
  }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// The player for the game
var Player = function() {
  this.sprite = "images/char-pink-girl.png";
  this.x = 100;
  this.y = 400;
};

Player.prototype.update = function(dt) {
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.
  if (this.x < 0) {
    this.x = 300;
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
var allEnemies = [new Enemy(250, 200), new Enemy(90, 60), new Enemy(25, 150)];
allEnemies.forEach(function() {});

// Initialize variable containing player object
var player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener("keyup", function(e) {
  var allowedKeys = {
    37: "left",
    38: "up",
    39: "right",
    40: "down"
  };

  player.handleInput(allowedKeys[e.keyCode]);
});
