// ❗️ DON'T TOUCH THESE 2 FUNCTIONs
// Pre-made function that will fill the button with its number.
// First button top left is called 1, last button bottom right is 9
function fillButton(index, text) {
    // This function fills the button of the send index
    document.getElementById(index).innerHTML = text;
  }
  // pre-made a function. You can use this function to present an alert to say someone wins
  function winningAlert(winner) {
    if(confirm(`Horraaay, ${winner} wins!`)){
       // The code here will be exectued if you press on OK button that will pop on the window 
    }
  }
  
  // SAMPLE CODE: This code fills the 1st and 9th button with X and O initially
  // ❗️ Delete this code once you are done testing
  fillButton(1, "X");
  fillButton(9, "O");
  
  /**
   *
   * THE MAIN FUNCTION
   * This function gets executed every time the user clicks the button
   * Add your code here, since this is going to be your main function
   * That interacts with the UI
   */
  function clickButton(index) {
    console.log(`Button number ${index} is clicked`);
   


    // Your main code here.
  }if (isWinner()) {
    alert(`${currentPlayer} wins!`);
  /**
   * (Optional) It's always a good idea to make a function for every single purpose.
   */
  // function checkWinner
  // function restartGame


//-------------------------------------------------------------------------

        function changeColors(element, symbol) {
            if (symbol === 'X') {
              element.style.color ='';
            } else if (symbol === 'O') {
              element.style.color = '#e74c3c'; 
            }
          }
          //----------------------------------------------------------------

          if (checkWinConditions()) {
            alert(`${currentPlayer} wins!`)};

            //---------------------------------------------------------------

            if (checkWinConditions()) {
                alert(`${currentPlayer} wins!`);
                resetGame();
              } else if (isBoardFull()) {
                alert("It's a draw!")};
                resetGame();