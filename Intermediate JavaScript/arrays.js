var guests = ["Bhuvanyu", "Sawan", "Anurag", "Utkarsh", "Ujjwal"];
// console.log(guests);
var name = prompt("What is your name?");

if (guests.includes(name)) {
  alert("Welcome! " + name);
}
else {
  alert("Sorry! Your name is not in the list.");
}
