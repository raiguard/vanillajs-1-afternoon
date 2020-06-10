let board = [];
let currentPlayer = "X";
let gameFinished = false;
let turns = 0;

const winningCombinations = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8]
];

const indicatorContainer = document.getElementById("indicator-container");
const playerIndicator = document.getElementById("player");

function play(index) {
  if (!gameFinished && !board[index]) {
    // update board status
    document.getElementById(index).innerText = currentPlayer;
    board[index] = currentPlayer;

    // increment turns counter
    turns++;

    // check for full board
    if (turns >= 9) {
      playerIndicator.innerText = "It's a draw!";
    } else {
      // check win conditions
      let won = false;
      for (let i = 0; i < winningCombinations.length; i++) {
        let slots = winningCombinations[i];
        let matches = slots.reduce((matches, slotIndex) => {
          let slot = board[slotIndex];
          if (slot && slot === currentPlayer) {
            return matches + 1;
          } else {
            return matches;
          }
        }, 0);

        if (matches === 3) {
          won = true;
          break;
        }
      }

      if (won) {
        // game finished alert
        gameFinished = true;
        alert(`Player ${currentPlayer} won!`);

        // update status
        playerIndicator.innerText = "Congratulations!";
      } else {
        // flip active player
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        playerIndicator.innerText = `Player ${currentPlayer}'s turn`;
      }
    }
  }
}

function reset() {
  // reset data
  board = [];
  currentPlayer = "X";
  gameFinished = false;
  turns = 0;

  // reset board
  for (let i = 0; i < 9; i++) {
    document.getElementById(i).innerText = "";
  }
  playerIndicator.innerText = "Player X's turn";
}
