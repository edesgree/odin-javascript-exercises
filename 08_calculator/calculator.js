const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  return array.reduce((a, b) => a + b, 0)
};

const multiply = function (array) {

  let prod = array[0];
  for (i = 1; i < array.length; i++) {
    prod = array[i] * prod;
  }
  return prod;
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (a) {
  let factor = [];
  if (a > 0) {
    // build array with numbers to factors (ex: a = 6 , array will be [1,2,3,4,5,6])
    for (let i = 0; i < a; i++) {
      factor[i] = i + 1;
    }
  } else {
    return 1;
  }
  //use the multiply function to multiply everynumber in array
  return multiply(factor);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
