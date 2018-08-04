// Code your JavaScript / jQuery solution here
const gameWinArray = [[0,1,2], [3,4,5], [6,7,8], [0,3,6],
          [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
const squares = window.document.querySelectorAll('td');
const messageDiv = window.document.getElementById('message');
const gamesDiv = window.document.getElementById('games');
const saveButton = window.document.getElementById('save');
const previousButton = window.document.getElementById('previous');
const clearButton = window.document.getElementById('clear');
var currentGame = 0
function resetFixtures() {
  for (let i = 0; i < 9; i++) {
    squares[i].innerHTML = '';
  }
}
  window.turn *= 0;
  messageDiv.innerHTML = '';
  gamesDiv.innerHTML = '';


function populateBoard(arr) {
  for (let i = 0; i < 9; i++) {
    squares[i].innerHTML = arr[i];
  }
}


var player = () => turn % 2 ? 'O' : 'X';

function attachListeners() {
	var el = document.getElementById("td");
	el.addEventListener("click", () => { doTurn(square); }, false);

	$('#save').on('click', () => saveGame());
	$('#previous').on('click', () => showPreviousGames());
	$('#clear').on('click', () => resetBoard());
	}


function doTurn(square) {
		updateState(square)
		turn++;
		if (checkWinner() === true) {
			saveGame();
			clearBoard();
	} else	if (turn === 9) {
		message = "Tie game.";
		setMessage(message);
		clearBoard()
}
}

function setMessage(message) {
	document.getElementById('message').innerHTML = message;
 return message
}
function updateState(square) {
	var token = player()
$(square).text(token)
}

function clearBoard() {
	$('td').remove();
	turn = 0
}

function saveGame() {
	var games = []
	 $('td').text((index, square) => {
		 state.push(games);
});
}

function checkWinner() {
	var win = {}
	var winner = false;
 $('td').text((index, square) => win[index] = square);
 
 gameWinArray.some(function(opt) {
if (win[opt[0]] != "" && win[opt[0]] === win[opt[1]] && win[opt[1]] === win[opt[2]]) {
message = (`Player ${win[opt[0]]} Won!`)
setMessage(message);
return winner = true;
}
});
return winner;
}



