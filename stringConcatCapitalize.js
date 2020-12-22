// 1. Create a var that stores the name that users enters via prompt.

var name = prompt("What is your name?");

// 2. Capitalize the first letter of their name.

// a. isolate the first char

var firstChar = name.slice(0,1);

// b. turn the first chat to upper case

var upperCaseFirstChar = firstChar.toUpperCase();

// c. isolate the rest of the char

var restOfName = name.slice(1,name.length);

// d. turn the rest of the name to lower case

restOfName = restOfName.toLowerCase();

// e. concactenate the first char with the rest of the char

var capitalizedName = upperCaseFirstChar + restOfName;


// 3. Create an alert to greet a user with their capitalized name.

alert("Hello " + capitalizedName + "!");


// var yourName = prompt("What is your name?");

// alert("Hello, " + yourName.slice(0,1).toUpperCase() + yourName.slice(1).toLowerCase() + "!");
