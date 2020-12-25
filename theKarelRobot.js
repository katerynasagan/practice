function main() {
  leftToRightLine();
  rightToLeftLine();
  leftToRightLine();
  rightToLeftLine();
  leftToRightEnd();
}


function leftToRightLine() {
  putBeeper();
  move();
  move();
  putBeeper();
  move();
  move();
  putBeeper();
  turnLeft();
  move();
}

function rightToLeftLine() {
  turnLeft();
  move();
  putBeeper();
  move();
  move();
  putBeeper();
  move();
  turnRight();
  move();
  turnRight();
}

function leftToRightEnd() {
  putBeeper();
  move();
  move();
  putBeeper();
  move();
  move();
  putBeeper();
}