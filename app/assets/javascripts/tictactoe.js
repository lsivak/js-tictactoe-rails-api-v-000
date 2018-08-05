// Code your JavaScript / jQuery solution here
const gameWinArray = [[0,1,2], [3,4,5], [6,7,8], [0,3,6],
          [1,4,7], [2,5,8], [0,4,8], [2,4,6]];

var currentGame = 0
var turn = 0
var player = () => turn % 2 ? 'O' : 'X';

function attachListeners() {
 
 // el.addEventListener("click", function(e) {
  // $('td').text((index, square) => {
 // 	document.querySelectorAll("td").forEach(function(square) {
 // 		square.addEventListener("click", function() {
 // 			doTurn(this)
	// 	});
	// 	});
   $('#games').on('click', function() {
		doTurn(this);
		})
		var el = document.getElementById("#button");
	$('#save').on('click', () => saveGame());
	$('#previous').on('click', () => showPreviousGames());
	$('#clear').on('click', () => resetBoard());

}
// }
// })
// 
// doTurn(square)
// }

function doTurn(square) {
		updateState(square);
		turn++;
		if (checkWinner() === true) {
			saveGame();
			clearBoard();
	} else	if (turn === 9) {
		message = "Tie game.";
		setMessage(message);
		clearBoard()
		currentGame = 0
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
function gameId() {
var getGameId = function(event) {	
  return $(event.target).data("gameid")	
}
}
function saveGame() {
	var gameInfo = []
	$('td').text((index, square) => {
		gameInfo.push(this);
});

var gameData = {gameInfo: state}
if (currentGame) {
	$.ajax({
		type: 'PATCH',
		url: `/games/${currentGame}`,
		data: gameData
	})
} else {
	$.post('/games', gameData, function(game) {
		currentGame = game.data.id;
		$('#games').append(`<button id="gameid-${game.data.id}">${game.data.id}</button><br>`)
		$("#gameid-" + game.data.id).on('click', () => showGame(game))
	})
}
}
	// $("#games").click(function(event) {
	// 	gameId(event)
	// })
	// $("#save").click(function() {
	// 	save()
	// })
// 
// }
function showGame(game) {
	return $('<li>', {'data-state': game.state, 'data-gameid': game.id, text: game.id})
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



