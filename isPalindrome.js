var isPalindrome = function(s) {
    var charsOnly = []; // = "";
    var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (var i = 0; i < s.length; i++) {
        if (alphabet.includes(s[i])) {
            charsOnly.push(s[i]); // charsOnly += s[i]
        }
    }
    var charsOnlyString = charsOnly.join("");

    return charsOnlyString === charsOnlyString.reverse();
}
