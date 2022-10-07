const ftoc = function(number) {
  //x °F ≘ (x − 32) ×   5 / 9 °C
  result = (number - 32) * 5/9;
  result = Math.round(result * 10) / 10;
  return result;
};

const ctof = function(number) {
  //x °C ≘ (x ×  9 / 5 + 32) °F
  result = (number *  9 / 5 + 32);
  result = Math.round(result * 10) / 10;
  return result;
};

console.log(ctof(100));
// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
