/* var name = "Aditya";
name = name.toUpperCase();
name = name.toLowerCase(); */

// Angela's Code:

// 1. Create a variable that stores the name that the user enters via prompt.

var name = prompt("What is your name?");

// 2. Capitalise the first letter of their name.

// a. Isolate the first character.
var firstChar = name.slice(0, 1);

// b. Turn the first character to Upper Case.
var upperCaseFirstChar = firstChar.toUpperCase();

// c. Isolate the rest of the name.
var restOfName = name.slice(1, name.length);

// d. Change the rest of the name to Lower Case.
restOfName = restOfName.toLowerCase();

// e. Concatenate the first character with the rest of the character.
var capitaliseName = upperCaseFirstChar + restOfName;

// 3. We use the capitalised version of their name to greet then using an alert.
alert("Hello, " + capitaliseName);


// My Code:
var name = prompt("What is your name?");
var first_char = (name.slice(0, 1)).toUpperCase();
var rest_chars = (name.slice(1, name.length)).toLowerCase();
name = first_char + rest_chars;
alert("Hello, " + name);
