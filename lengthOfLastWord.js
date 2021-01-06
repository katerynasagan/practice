var lengthOfLastWord = function(s) {
    var splitted = s.trim().split(" ");
    var lastIndex = splitted.length - 1;
    var lastWord = splitted[lastIndex];

   if (s === " ") {
       return 0;
   } else {
       return lastWord.length;
   }
}
