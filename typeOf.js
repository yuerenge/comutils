/**
 * @desc   判断类型
 * @param  {String,Array....} obj
 */
var typeOf = function typeOf(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1);
};

module.exports = typeOf;