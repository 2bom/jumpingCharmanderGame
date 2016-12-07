/**
 * Created by diana on 16. 12. 5.
 */
const Hurdle = function(type, x, speed, ctx){
  this.x = x;
  this.y = 555;
  this.ctx = ctx;
  this.speed = speed;
  // sprites > name > imgURL, imgWidth, imgHeight, levelNum
  this.sprites =
      {
        "stoneS" : {"img" : document.getElementById('stoneS'),
          "width" : 50,
          "height" : 45,
          "level" : 0},
        "tree" : {"img" : document.getElementById('tree'),
          "width" : 55,
          "height" : 70,
          "level" : 0}
      };
  this.sprite = this.sprites[Object.keys(this.sprites)[type]];
};

Hurdle.prototype.update = function(){
  if(this.x + this.sprite["width"] >= 0){
    this.x -= this.speed;
  }
};
Hurdle.prototype.render = function(){
  var renderY = this.y - this.sprite["height"];
  this.ctx.drawImage(this.sprite["img"], this.x, renderY);
};