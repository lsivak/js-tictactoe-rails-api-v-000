// Code your JavaScript / jQuery solution here
const squares = window.document.querySelectorAll('td');
const messageDiv = window.document.getElementById('message');
const gamesDiv = window.document.getElementById('games');
const saveButton = window.document.getElementById('save');
const previousButton = window.document.getElementById('previous');
const clearButton = window.document.getElementById('clear');

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


function player() {
	if (turn%2 === 0) {
		return 'X';
	} else {
		return 'O';
}
}
function attachListeners() {
	var el = document.getElementById("squares[i]");
	el.addEventListener("click", () => { doTurn(player).innerHTML; }, false);
}

function doTurn(player) {
	if (turn <=7) {
		updateState()
		if (checkWinner() == true) {
			turn += 1
		}
	} else {
		message = "Tie game."
		setMessage(message)
		resetFixtures()
		turn = 0
}
}

function setMessage(message) {
	document.getElementById('message').innerHTML = message;
 return message
}
function updateState() {
  const squares = window.document.querySelectorAll('td');
  square = player();
var el = document.getElementById("games");
el.addEventListener("click", () => { updateState(squares[i]).innerHTML; }, false);

$(document).ready (function () {
$(".js-save-game").on("click", function(e) { 
  alert('listener for game, "game saved"');
})
})
}


function checkWinner() {
	const squares = window.document.querySelectorAll('td')
if (squares[0].innerHTML==squares[1].innerHTML && squares[1].innerHTML==squares[2].innerHTML || squares[3].innerHTML==squares[4].innerHTML && squares[4].innerHTML==squares[5].innerHTML || squares[6].innerHTML==squares[7].innerHTML && squares[7].innerHTML==squares[8].innerHTML ||
squares[0].innerHTML==squares[3].innerHTML && squares[3].innerHTML==squares[6].innerHTML || squares[1].innerHTML==squares[4].innerHTML && squares[4].innerHTML==squares[7].innerHTML || squares[2].innerHTML==squares[5].innerHTML && squares[5].innerHTML==squares[8].innerHTML ||
squares[0].innerHTML==squares[4].innerHTML && squares[4].innerHTML==squares[8].innerHTML || squares[2].innerHTML==squares[4].innerHTML && squares[4].innerHTML==squares[6].innerHTML) {

return true;
message = "Player #{squares.innerHTML} Won!"
setMessage(message);
 } else {
return false;
}
}


