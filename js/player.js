/**
 * Created by diana on 16. 12. 5.
 */
const Player = function(x, y, ctx) {
  var player = this;
  this.x = x;
  this.y = y;
  this.ctx = ctx;
  
  //for jump
  this.velY = 0;
  this.width = 100;
  this.height = 100;

  //for states
  this.states = 0;
  
  //for walk
  this.ticks = 0;
  this.spriteIndex = 1;
  
  this.sprites = [document.getElementById('walk1'),
                  document.getElementById('walk2'),
                  document.getElementById('stand'),
                  document.getElementById('stop')];
  
  document.addEventListener('keydown', function(e){
    if (player.states == 0 && e.keyCode == 32){
      player.states = 1;
      player.velY = -13;
    }
  });
};
Player.prototype.update = function(){
  this.ticks++;
  if (this.states == 0 && this.ticks % 10 === 0){
    this.spriteIndex = (this.spriteIndex+1) % 2;
  }
  else if (this.states == 1){
    this.spriteIndex = 2;
    this.y += this.velY;
    this.velY += 0.5;
    if (this.y >= 505){
      this.y = 505;
      this.states = 0;
    }
  }
};
Player.prototype.render = function(){
  var renderX = this.x - this.width/2;
  var renderY = this.y - this.height/2;
  this.ctx.drawImage(this.sprites[this.spriteIndex], renderX, renderY);
};