var toGoatLatin = function(S) {
  var splittedS = S.split(" ");
  var vowel = "AEIOUaeiou";
  var newArray = [];
  var a = "a";

  for (var i = 0; i < splittedS.length; i++) {
    var word = splittedS[i];
    var firstChar = word[0];

    if (vowel.includes(firstChar)) {
      var newWord = word + "ma";
      newArray.push(newWord + a.repeat(i + 1));
    } else {
      var newWord = word.slice(1) + firstChar + "ma";
      newArray.push(newWord + a.repeat(i + 1));
    }
  }
  var newS = newArray.join(" ");

  return newS;
}
