var lengthOfLastWord = function(s) {
  var splitted = s.split(" ");
  var lastIndex = splitted.length - 1;
  var lastWord = splitted[lastIndex];

  if (s === " ") {
    return 0;
  } else if (lastWord === "") {
    return splitted[lastIndex - 1].length;
  } else {
    return lastWord.length;
  }
}
