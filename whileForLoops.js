var myArray = [];
var i = 5;
while(i >= 0) {
    myArray.push(i);
    i--;
}

var myArray = [];
for (var i = 1; i <= 5; i++) {
    myArray.push(i);
}

var myArray = [];
for(var i = 1; i <= 9; i += 2) {
    myArray.push(i);
}

var myArray = [];
for (var i = 9; i > 0; i -= 2) {
    myArray.push(i);
}

var myArr = [ 2, 3, 4, 5, 6];
var total = 0;
for (var i = 0; i < myArr.length; i++) {
    total += myArr[i];
}

function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
for (var i = 0; i < arr.length; i++) {
  for (var j = 0; j < arr[i].length; j++) {
    product *= arr[i][j];
  }
}
  // Only change code above this line
  return product;
}

multiplyAll([[1,2],[3,4],[5,6,7]]);


var myArray = [];
var i = 10;

// Only change code below this line
 do {
  myArray.push(i);
  i++;
} while (i < 5);
