var arrayStringsAreEqual = function(word1, word2) {
  var arrayString1 = word1.join("");
  var arrayString2 = word2.join("");

  if (arrayString1 === arrayString2) {
    return true;
  } else {
    return false;
  }

}
