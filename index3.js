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
// let pushedBoard = [
//                   ["","",""],
//                   ["","",""],
//                   ["","",""],]

function clickButton(index) {
  //fillButton(index, "x");

  var element = document.getElementById(index).innerHTML;
  console.log(element);

  console.log(pushedButtons);
  const position = "id";
  const key = "value";
  console.log(index);
  if (element == "") {
    if (pushedButtons.length === 0) {
      fillButton(index, "X");

      pushedButtons.push({
        id: index,
        value: "X",
      });
    } else if (pushedButtons[pushedButtons.length - 1].value === "X") {
      fillButton(index, "O");
      // pushedButtons.push("O");
      pushedButtons.push({
        id: index,
        value: "O",
      });
    } else if (pushedButtons[pushedButtons.length - 1].value === "O") {
      fillButton(index, "X");
      // pushedButtons.push("X");
      pushedButtons.push({
        id: index,
        value: "X",
      });
    }
  } //element == ""
  console.log(`Button number ${index} is clicked`);
  checkWinner();
}
// console.log(pushedButtons);
// if ((object.onclick = function () {})) {
// }

// }

/**
 * (Optional) It's always a good idea to make
 *  a function for every single purpose.
 */
const row1 = [];
const row2 = [];
const row3 = [];
const col1 = [];
const col2 = [];
const col3 = [];
const daig1 = [];
const daig2 = [];
function checkWinner() {
  let result = 0;
  if (pushedButtons.LENGTH >= 5) {
    row1.push(
      pushedButtons.filter((row) => {
        row.id === "1" || row.id === "2" || row.id === "3";

        return row;
      })
    );
    row2.push(
      pushedButtons.filter((row) => {
        row.id === "4" || row.id === "5" || row.id === "6";
        return row;
      })
    );
    row3.push(
      pushedButtons.filter((row) => {
        row.id === "7" || row.id === "8" || row.id === "9";
        return row;
      })
    );
    col1.push(
      pushedButtons.filter((col) => {
        col.id === "1" || col.id === "4" || col.id === "7";
        return col;
      })
    );
    col2.push(
      pushedButtons.filter((col) => {
        col.id === "2" || col.id === "5" || col.id === "8";
        return col;
      })
    );
    col3.push(
      pushedButtons.filter((col) => {
        col.id === "3" || col.id === "6" || col.id === "9";
        return col;
      })
    );
    daig1.push(
      pushedButtons.filter((daig) => {
        daig.id === "1" || daig.id === "5" || daig.id === "9";
        return daig;
      })
    );
    daig2.push(
      pushedButtons.filter((daig) => {
        daig.id === "3" || daig.id === "5" || daig.id === "7";
        return daig;
      })
    );

    if (
      row1 !== [] ||
      row2 !== [] ||
      row3 !== [] ||
      col1 !== [] ||
      col2 !== [] ||
      col3 !== [] ||
      daig1 !== [] ||
      daig1 !== []
    ) {
      if ((row1[0].value === row1[1].value) === row1[2].value)
        result = row1[0].value;
      else if ((row2[0].value === row2[1].value) === row2[2].value)
        result = row2[0].value;
      else if ((row3[0].value === row3[1].value) === row3[2].value)
        result = row3[0].value;
      else if ((col1[0].value === col1[1].value) === col1[2].value)
        result = col1[0].value;
      else if ((col2[0].value === col2[1].value) === col2[2].value)
        result = col2[0].value;
      else if ((col3[0].value === col3[1].value) === col3[2].value)
        result = col1[0].value;
      else if ((daig1[0].value === daig1[1].value) === daig1[2].value)
        result = daig1[0].value;
      else if ((daig2[0].value === daig2[1].value) === daig2[2].value)
        result = daig2[0].value;
    }

    if (result !== 0) {
      winningAlert(result);
      result = 0;
    } //result !== 0
  }
}

function restartGame() {
  pushedButtons = [];
  document.getElementById("myform").reset();
}
