const cells = document.querySelectorAll('.cell');
const resetButton = document.getElementById('reset-button');
const winnerDisplay = document.getElementById('winner');

let currentPlayer = 'X';
let gameActive = true;
const boardState = Array(9).fill(null);

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function checkWinner() {
  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
      gameActive = false;
      winnerDisplay.textContent = `Player ${currentPlayer} Wins!`;
      return;
    }
  }

  if (!boardState.includes(null)) {
    gameActive = false;
    winnerDisplay.textContent = "It's a Draw!";
  }
}

function handleCellClick(e) {
  const cell = e.target;
  const index = cell.getAttribute('data-index');

  if (boardState[index] || !gameActive) return;

  boardState[index] = currentPlayer;
  cell.textContent = currentPlayer;
  cell.classList.add('taken');

  checkWinner();

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function resetGame() {
  boardState.fill(null);
  gameActive = true;
  currentPlayer = 'X';
  cells.forEach(cell => {
    cell.textContent = '';
    cell.classList.remove('taken');
  });
  winnerDisplay.textContent = '';
}

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
resetButton.addEventListener('click', resetGame);
