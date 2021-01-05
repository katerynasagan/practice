function fibonacciGenerator(n) {
  var output = [0, 1];

  if (n === 1) return output.slice(0, 1);
  else if (n === 2) return output;

  for (var i = output.length; i < n; i++) {
    var newEle = output[i - 2] + output[i - 1];
    output.push(newEle);
  }

  return output;
}
