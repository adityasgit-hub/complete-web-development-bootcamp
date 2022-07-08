// Combining Comparators: &&, ||, and !.

var side1 = prompt("Enter the first side of the triangle: ");
var side2 = prompt("Enter the second side of the triangle: ");
var side3 = prompt("Enter the third side of the triangle: ");

if (((side1 + side2) > side3) && ((side2 + side3) > side1) && ((side3 + side1) > side2)) {
  if (side1 === side2 && side2 === side3) {
    console.log("Equilateral Triangle!");
  }
  else if (side1 === side2 || side2 === side3 || side3 === side1) {
    console.log("Isoceles Triangle!");
  }
  else {
    console.log("Scalene Triangle!");
  }
}
else {
  console.log("Invalid Triangle!");
}
