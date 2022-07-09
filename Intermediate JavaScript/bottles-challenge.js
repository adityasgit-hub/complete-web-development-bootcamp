var noOfBottles = 99;
while (noOfBottles >= 0) {
  
  if (noOfBottles == 1) {
    console.log(noOfBottles + " bottles of beer on the wall, " + noOfBottles + " bottles of beer.");
    console.log("Take one down and pass it around, no more bottles of beer on the wall.");
  }
  if (noOfBottles == 0) {
    console.log("No more bottles of beer on the wall, no more bottles of beer.");
    console.log("Go to the store and buy some more, 99 bottles of beer on the wall.");
  }
  else {
    console.log(noOfBottles + " bottles of beer on the wall, " + noOfBottles + " bottles of beer.");
    console.log("Take one down and pass it around, " + (noOfBottles - 1) + " bottles of beer on the wall.");
  }
  
  noOfBottles -= 1;
}
