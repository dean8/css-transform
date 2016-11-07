/**
 * [transform]
 * @param  {[type]} options [description]
 * @param  {[type]} angle   [description]
 * @return {[type]}         [description]
 */
var transform = module.exports = function (options, angle) {
  var x = options.x,
      y = options.y,
      width = options.width,
      height = options.height;
  var r = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2)) / 2;
  var a = Math.round(Math.atan(height / width) * 180 / Math.PI);
  var tlbra = 180 - angle - a;
  var trbla = a - angle;
  var topLeft = {
    x: x + width / 2 + r * Math.cos(tlbra * Math.PI / 180),
    y: y + height / 2 - r * Math.sin(tlbra * Math.PI / 180)
  };
  var topRight = {
    x: x + width / 2 + r * Math.cos(trbla * Math.PI / 180),
    y: y + height / 2 - r * Math.sin(trbla * Math.PI / 180)
  };
  var bottomRight = {
    x: x + width / 2 - r * Math.cos(tlbra * Math.PI / 180),
    y: y + height / 2 + r * Math.sin(tlbra * Math.PI / 180)
  };
  var bottomLeft = {
    x: x + width / 2 - r * Math.cos(trbla * Math.PI / 180),
    y: y + height / 2 + r * Math.sin(trbla * Math.PI / 180)
  };
  var minX = Math.min(topLeft.x, topRight.x, bottomRight.x, bottomLeft.x);
  var maxX = Math.max(topLeft.x, topRight.x, bottomRight.x, bottomLeft.x);
  var minY = Math.min(topLeft.y, topRight.y, bottomRight.y, bottomLeft.y);
  var maxY = Math.max(topLeft.y, topRight.y, bottomRight.y, bottomLeft.y);
  return {
    point: {
      topLeft,
      topRight,
      bottomLeft,
      bottomRight,
    },
    width: maxX - minX,
    height: maxY - minY,
    left: minX,
    right: maxX,
    top: minY,
    bottom: maxY
  }
}
