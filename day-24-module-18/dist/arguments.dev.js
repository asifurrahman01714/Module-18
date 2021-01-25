"use strict";

function add(a, b) {
  var sum = 0;

  for (var i = 0; i < arguments.length; i++) {
    var number = arguments[i];
    sum = sum + number;
  }

  return sum;
}

var result = add(1, 2, 3, 4, 5);
console.log(result);