const ftoc = function(f) {
  retval = (f - 32) * (5/9);
  retval = Math.round(retval * 10);
  return retval / 10;

};

const ctof = function(c) {
  retval = c * (9/5) + 32;
  retval = Math.round(retval * 10);
  return retval / 10;

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
