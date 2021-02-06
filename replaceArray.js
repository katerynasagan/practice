//takes an array and returns new array where each element is
//multiplyed by 2 if even
//replaced with ? if ele is 0
//if ele is odd >>> add 10 to it;

//do both, for loop first and while after.

function replaceArray(array) {
  var newArray = [];

  for (var i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      newArray.push("?");

    } else if (array[i] % 2 === 0) {
      newArray.push(array[i] * 2);

    } else if (array[i] % 2 !== 0) {
      newArray.push(array[i] + 10);
    }
  }
  return newArray;
}



function replaceArray(array) {
  var newArray = [];
  idx = 0;

  while (count < array.length) {

    if (array[idx] === 0) {
      newArray.push("?");

    } else if (array[idx] % 2 === 0) {
      newArray.push(array[idx] * 2);

    } else {
      newArray.push(array[idx] + 10);
    }
    idx++;
  }
  return newArray;
}
