var Enemy = function(y) {
    this.x = 0;
    this.y = y;
    this.sprite = 'images/enemy-bug.png';
    this.speed = this.randomSpeed();
};

Enemy.prototype.update = function(dt) {
    this.x += this.speed * dt;
};

Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Enemy.prototype.randomSpeed = function () {
  return Math.floor(Math.random() * (400 - 100)) + 100;
};

Enemy.prototype.resetPos = function() {
  if (this.x > 510){
    this.x = -100;
    this.speed = this.randomSpeed();
  }
};

function Player() {
  this.x = 200;
  this.y = 405;
  this.sprite = "images/char-boy.png";
  this.render = function(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  };
  // this.speed = 150;
}
Player.prototype.update = function(dt) {
  // this.x += this.speed * dt;
};

Player.prototype.handleInput = function(direction){
  if (direction === "left" && this.x >= 30) {
    this.x -= 100;
  }
  if (direction === "right" && this.x <= 380) {
    this.x += 100;
  }
  if (direction === "up" && this.y >= 30) {
    this.y -= 83;
  }
  if (direction === "down" && this.y <= 360 + ((numRows-6)*83)) {
    this.y += 83;
  }
};

var FloatingLog = function(){
  this.speed = 150;
  this.x = 0;
  this.y = -20;
  this.sprite = 'images/Rock.png';
  this.render = function() {
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  };
}
FloatingLog.prototype.update = function(dt) {
  this.x += this.speed * dt;
};
FloatingLog.prototype.resetPos = function() {
  if (this.x > 510){
    this.x = -100;
  }
};



var allEnemies = [];

var player = new Player();
var floatingLog = new FloatingLog();

var level = 1;

var numRows = 6;
var beetleCreator = function() {
  var beetle_pos = 65;
  for (var i = 0; i < numRows-2; i++){
    allEnemies[i] = new Enemy(beetle_pos);
    beetle_pos += 83;
  }
};

beetleCreator();

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
