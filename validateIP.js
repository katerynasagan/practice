// Validate IP Address
// Validate an IP address (IPv4). An address is valid if and only if it is in the form "X.X.X.X", where each X is a number from 0 to 255.

// For example, "12.34.5.6", "0.23.25.0", and "255.255.255.255" are valid IP addresses, while "12.34.56.oops", "1.2.3.4.5", and "123.235.153.425" are invalid IP addresses.

// ---------------

ip1 = '192.168.0.1'
// output: true

ip2 = '0.0.0.0'
// output: true

ip3 = '123.24.59.99'
// output: true

ip4 = '192.168.123.456'
// output: false


function validateIP(ip) {
// split ip
var splitIP = ip.split(".");
// check array length
if (splitIP.length !== 4) return false;
// turn string to number

// check every array element/for loop
for (var i = 0; i < splitIP.length; i++) {
    var ele = splitIP[i]; // "192"

}
}

validateIP(ip1); // true
validateIP(ip2); // true
validateIP(ip3); // true
validateIP(ip4); // false
