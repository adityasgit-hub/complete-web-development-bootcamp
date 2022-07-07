/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
 
function main() {
  putBeeperOnDiagonal();
  putBeeperOnDiagonal();
  putBeeperOnDiagonal();
  putBeeperOnDiagonal();
  putBeeper();
}

function putBeeperOnDiagonal() {
  putBeeper();
  move();
  turnLeft();
  move();
  turnRight();
}
