
const gameWinArray = [[0,1,2], [3,4,5], [6,7,8], [0,3,6],
          [1,4,7], [2,5,8], [0,4,8], [2,4,6]];

var currentGame = 0
var turn = 0
var player = () => turn % 2 ? 'O' : 'X';

function doTurn(square) {
		updateState(square);
		turn++;
		if (checkWinner()) {
			saveGame();
			clearBoard();
	} else	if (turn === 9) {
		message = ('Tie game.');
		setMessage(message);
		saveGame();
		clearBoard()
}
}

$(document).ready(function() {
  attachListeners();
});

function attachListeners() {

    $("tbody").click(function(event) {
      doTurn(square)
    });
    $("#save").click(function() {
  saveGame();
})
$("#previous").click(function() {
  getPreviousGames();
})
$("#clear").click(function() {
  clearBoard();
})
}

// 	$("td").click(function(event) {
// 	 doTurn(event)
//  });
// 	var el = document.getElementById("#button");
// 	$('#save').on('click', () => saveGame());
// 	$('#previous').on('click', () => showPreviousGames());
// 	$('#clear').on('click', () => clearBoard());
// }
// }
// })
//

// }

function setMessage(message) {
	document.getElementById('message').innerHTML = message;
 return message
}
function updateState(square) {
	var token = player()
$(square).html(token)
}

function clearBoard() {
	$('td').remove();
	turn = 0
	currentGame = 0
}
function gameId() {
var getGameId = function(event) {
  return $(event.target).data("gameid")
}
}
function saveGame() {
	var state = []
	$('td').text((index, square) => {
		state.push(this);
});

var gameData = {state: state}
if (currentGame) {
	$.ajax({
		type: 'PATCH',
		url: `/games/${currentGame}`,
		data: gameData
	})
} else {
	$.post('/games', gameData, function(game) {
		currentGame = data.game.id;
		$('#games').append(`<button id="gameid-${data.game.id}">${data.game.id}</button><br>`)
		$("#gameid-" + data.game.id).on('click', () => populateBoard(arr))
	})
}
}
//
function getPreviousGames() {
  $.getJSON("/games").done(function(response) {
  showGames(response.games)
})
}
var showGames = function(games) {

  games.each(function(game) {
  return $('<li>', {'data-state': game.state, 'data-gameid': game.id, text: game.id});
})
}
//


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
