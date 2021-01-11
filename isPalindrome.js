var isPalindrome = function(s) {
  var charsOnly = [];
  var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  for (var i = 0; i < s.length; i++) {
    if (alphabet.includes(s[i])) {
      charsOnly.push(s[i]);
    }
  }

  return charsOnly.join("").toLowerCase() === charsOnly.reverse().join("").toLowerCase();
}
