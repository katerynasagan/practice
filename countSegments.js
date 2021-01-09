var countSegments = function(s) {
  if (s === "") {
    return 0;
  } else {
    var res = s.trim().split(" ");
    return res.length;
  }
}
