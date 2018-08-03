// Code your JavaScript / jQuery solution here

let player1 = "O"
let player2 = "X"
let turn = 1
function player(turn) {
	if(turn%2 === true);
		return 'X';
	if(turn%2 === false);
		return 'O';
	
}

window.attachListeners = () => {
	function doTurn(player) {
		turn += 1
	}

function updateState() {
  var square = document.getElementById("data-x", "data-y");
  square = player(turn);
var el = document.getElementById("games");
el.addEventListener("click", () => { updateState(square); }, false);
}
}

