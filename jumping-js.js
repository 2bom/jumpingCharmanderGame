/**
 * Created by diana on 16. 11. 21.
 */
window.onload = function() {
  var canvas = document.getElementById("canvas"),
      c = canvas.getContext("2d");
      
  c.fillStyle = "#661666";
  c.beginPath();
  c.moveTo(100,100);
  c.lineTo(150,200);
  c.lineTo(200,200);
  c.lineTo(200,250);
  c.lineTo(100,250);
  c.closePath();
};
