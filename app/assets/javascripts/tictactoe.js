// Code your JavaScript / jQuery solution here

let player1 = "X"
let player2 = "O"

function player(turn) {
	if (turn%2 === 0) {
		return 'X';
	} else {
		return 'O';
}
}
function attachListeners() {
	var el = document.getElementById("squares");
	el.addEventListener("click", () => { doTurn().innerHTML; }, false);
}

function doTurn(player) {
		turn += 1
		updateState()
		checkWinner()
}

function setMessage(checkWinner) {
	if (checkWinner == true) {
	return "Player #{player} Won!"
}
}
function updateState() {
  const squares = window.document.querySelectorAll('td');
  square = player(turn);
var el = document.getElementById("games");
el.addEventListener("click", () => { updateState(squares).innerHTML; }, false);

$(document).ready (function () {
$(".js-save-game").on("click", function(e) { 
  alert('listener for game, "game saved"');
})
})
}


function checkWinner() {
	const squares = window.document.querySelectorAll('tr')

if (squares[0]==squares[1] && squares[1]==squares[2] || squares[3]==squares[4] && squares[4]==squares[5] || squares[6]==squares[7] && squares[7]==squares[8]) {
return true;

	setMessage()
}
}

