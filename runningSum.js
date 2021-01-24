function even(array) {
  var count = 0;

  for (i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      count++;
    }
  }
  return count;
}
