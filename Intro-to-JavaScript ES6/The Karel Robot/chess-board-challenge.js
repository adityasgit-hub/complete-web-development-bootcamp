/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
 
function main() {
   twoLines();
   twoLines();
   putBeeperOnOddLine();
   putBeeperOnOddLine();
   putBeeper();
}

function putBeeperOnOddLine() {
  putBeeper();
  move();
  move();
}

function putBeeperOnEvenLine() {
   move();
   putBeeper();
   move();
}

function moveUpRight() {
   turnLeft();
   move();
   turnLeft();
}

function moveUpLeft() {
   turnRight();
   move();
   turnRight();
}

function twoLines() {
   putBeeperOnOddLine();
   putBeeperOnOddLine();
   putBeeper();
   moveUpRight();
   putBeeperOnEvenLine();
   putBeeperOnEvenLine();
   moveUpLeft();
}
