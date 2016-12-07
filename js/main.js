/**
 * Created by diana on 16. 12. 5.
 */
window.onload= function (){
  const c = document.getElementById('canvas');
  c.width = window.innerWidth;
  c.height = 600;
  const hurdleTypeLen = document.getElementsByClassName('hurdles').length;
  
  const ctx = c.getContext('2d');
  
  var over = false;
  
  const environment = new Environment(c, ctx);
  const player = new Player(180, 505, ctx);
  //type, x, speed, ctx
  const hurdles = [];
  var interval1 = Math.floor(Math.random()*5+1)*100 + 2000;
  var interval2 = Math.floor(Math.random()*5+6)*100 + 2000;
  setInterval(function(){
    var hurdleSet = generateRandomHurdles(0, c.width, hurdleTypeLen, ctx);
    hurdles.push(hurdleSet);
  }, interval1);
  setInterval(function(){
    var hurdleSet = generateRandomHurdles(0, c.width, hurdleTypeLen, ctx);
    hurdles.push(hurdleSet);
  }, interval2);
  gameLoop();
  
  
  /** MAIN GAME LOOP */
  ctx.fillStyle ="#FFFFFF";
  function gameLoop() {
    ctx.fillRect(0,0,c.width,c.height);
    environment.update();
    environment.render();
    hurdles.forEach(function(hurdle){
      hurdle.update();
      hurdle.render();
    });
    player.update();
    player.render();
    window.requestAnimationFrame(gameLoop);
  }
};

function generateRandomHurdles(level, x, hurdleTypeLen, ctx) {
  var type = Math.floor(Math.random()*hurdleTypeLen);
  var speed = 0;
  if(level == 0){
    speed = 3;
  }
  
  var hurdle = new Hurdle(type, x, speed, ctx);
  return hurdle;
}