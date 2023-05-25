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
function clickButton(index) {
  //fillButton(index, "x");

  var element = document.getElementById(index).innerHTML;
  console.log(element);
  const x = "X";
  const o = "O";
  const row1 = pushedButtons.some((button) => {
    (document.getElementById(1).innerHTML === "X" &&
      document.getElementById(2).innerHTML === "X" &&
      document.getElementById(3).innerHTML === "X") ||
      (document.getElementById(1).innerHTML === "O" &&
        document.getElementById(2).innerHTML === "O" &&
        document.getElementById(3).innerHTML === "O");
  });

  console.log(pushedButtons);
  const position = "id";
  const key = "value";
  if (row1) {
    winningAlert("someone wins");
  } //if
  else if (element == "") {
    if (pushedButtons.length === 0) {
      fillButton(index, "X");

      pushedButtons.push("X");
    } else if (pushedButtons[pushedButtons.length - 1] === "X") {
      fillButton(index, "O");
      pushedButtons.push("O");
    } else if (pushedButtons[pushedButtons.length - 1] === "O") {
      fillButton(index, "X");
      pushedButtons.push("X");
    }
  } //element == ""
  console.log(`Button number ${index} is clicked`);
}
// console.log(pushedButtons);
// if ((object.onclick = function () {})) {
// }

// }

/**
 * (Optional) It's always a good idea to make
 *  a function for every single purpose.
 */
// function checkWinner
//const row1 =
// function restartGame
