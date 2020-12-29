var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];

var name = prompt ("What is your name?");

if (guestList.includes(name)) {
    alert("Welcome!")
} else {
    alert("Sorry, maybe next time.")
}
