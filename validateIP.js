function validateIP(ip) {

  var splitIP = ip.split(".");

  if (splitIP.length !== 4) return false;
  for (var i = 0; i < splitIP.length; i++) {
    var ele = parseInt(splitIP[i]);
    if (ele > 255 || ele < 0) {
      return false;
    }
  }
  return true;
}
