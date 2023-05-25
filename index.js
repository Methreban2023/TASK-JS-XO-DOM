// ❗️ DON'T TOUCH THESE 2 FUNCTIONs
// Pre-made function that will fill the button with its number.
// First button top left is called 1, last button bottom right is 9
function fillButton(index, text) {
  // This function fills the button of the send index
  document.getElementById(index).innerHTML = text;
}
// pre-made a function. You can use this function
// to present an alert to say someone wins
function winningAlert(winner) {
  if (confirm(`Horraaay, ${winner} wins!`)) {
    restartGame();
    // The code here will be exectued if you press on OK
    // button that will pop on the window
  }
}

// SAMPLE CODE: This code fills the 1st and 9th
// button with X
// and O initially
// ❗️ Delete this code once you are done testing
// fillButton(1, "X");
// fillButton(9, "O");

/**
 *
 * THE MAIN FUNCTION
 * This function gets executed every time
 * the user clicks the button
 * Add your code here, since this is going
 *  to be your main function
 * That interacts with the UI
 */
const pushedButtons = [];
const board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
function clickButton(index) {
  //fillButton(index, "x");

  var element = document.getElementById(index).innerHTML;
  // console.log(element);

  // console.log(pushedButtons);

  if (element == "") {
    if (pushedButtons.length === 0) {
      fillButton(index, "X");

      pushedButtons.push("X");

      board[index - 1] = "X";
    } else if (
      pushedButtons[pushedButtons.length - 1] === "X" &&
      board[index - 1] === 0
    ) {
      fillButton(index, "O");
      pushedButtons.push("O");
      board[index - 1] = "O";
    } else if (
      pushedButtons[pushedButtons.length - 1] === "O" &&
      board[index - 1] === 0
    ) {
      fillButton(index, "X");
      pushedButtons.push("X");
      board[index - 1] = "X";
    }
  } //element == ""
  console.log(`Button number ${index} is clicked`);
  console.log(board);
  checkWinner();
}

/**
 * (Optional) It's always a good idea to make
 *  a function for every single purpose.
 */
function checkWinner() {
  var result = 0;
  if (
    (board[0] === "X" && board[1] === "X" && board[2] === "X") ||
    (board[3] === "X" && board[4] === "X" && board[5] === "X") ||
    (board[6] === "X" && board[7] === "X" && board[8] === "X") ||
    (board[0] === "X" && board[3] === "X" && board[6] === "X") ||
    (board[1] === "X" && board[4] === "X" && board[7] === "X") ||
    (board[2] === "X" && board[5] === "X" && board[8] === "X") ||
    (board[0] === "X" && board[4] === "X" && board[8] === "X") ||
    (board[2] === "X" && board[4] === "X" && board[6] === "X")
  ) {
    winningAlert("X");
  } else if (
    (board[0] === "O" && board[1] === "O" && board[2] === "O") ||
    (board[3] === "O" && board[4] === "O" && board[5] === "O") ||
    (board[6] === "O" && board[7] === "O" && board[8] === "O") ||
    (board[0] === "O" && board[3] === "O" && board[6] === "O") ||
    (board[1] === "O" && board[4] === "O" && board[7] === "O") ||
    (board[2] === "O" && board[5] === "O" && board[8] === "O") ||
    (board[0] === "O" && board[4] === "O" && board[8] === "O") ||
    (board[2] === "O" && board[4] === "O" && board[6] === "O")
  ) {
    winningAlert("O");
  }
}
//const row1 =
function restartGame() {
  for (i = 1; i < board.length; i++) {
    // document.getElementById(i).reset();
    fillButton(i, "");
  }
  pushedButtons = [];
  board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
}
