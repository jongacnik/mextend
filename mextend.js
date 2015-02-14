var mextend = function(target, source){
  target = target || {};
  for (var prop in source) {
    if (typeof source[prop] === 'object') {
      target[prop] = mextend(target[prop], source[prop]);
    } else {
      target[prop] = source[prop];
    }
  }
  return target;
};

module.exports = mextend;