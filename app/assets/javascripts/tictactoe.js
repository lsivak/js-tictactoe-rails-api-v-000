const squares = window.document.querySelectorAll('td');
var square =  Array.from(squares).map(s => s.innerHTML);
const gameWinArray = [[0,1,2], [3,4,5], [6,7,8], [0,3,6],
          [1,4,7], [2,5,8], [0,4,8], [2,4,6]];

var currentGame = 0
var turn = 0
var player = () => turn % 2 ? 'O' : 'X';

function doTurn(event) {
		updateState(event);
		turn++
		if (checkWinner()) {
			saveGame();
			clearBoard();
	} else	if (turn === 9) {
	   message = 'Tie game.';
		setMessage(message);
		saveGame();
		clearBoard()
}
}

$(document).ready(function() {
  attachListeners();
});

function attachListeners() {
$("td").click(function(event) {
  doTurn(event)
  });
$("#save").click(function() {
  saveGame();
});
$("#previous").click(function() {
  getPreviousGames();
});
$("#clear").click(function() {
  clearBoard();
});
}

function setMessage(message) {
	$('#message').text(message);

}
function updateState(square) {
  var token = player();
    $(square).text(token);
  }

function clearBoard () {
	$('td').remove();
}

function gameId(event) {
   $(event.target).data("gameid")
}
function saveGame() {
  var state = [];
  var gameData;

  $('td').text((index, square) => {
    state.push(square);
  });

  gameData = { state: state };

  if (currentGame) {
    $.ajax({
      type: 'PATCH',
      url: `/games/${currentGame}`,
      data: gameData
    });
  } else {
    $.post('/games', gameData, function(game) {
      currentGame = game.data.id;
      $('#games').append(`<button id="gameid-${game.data.id}">${game.data.id}</button><br>`);
      $("#gameid-" + game.data.id).on('click', () => populateBoard(arr));
    });
  }
}

//
function getPreviousGames() {

  $.get('/games', (game) => {
    $('#games').append(`<button id="gameid-${game.id}">${game.id}</button><br>`);
  $(`#gameid-${game.id}`).on('click', () =>  

 game = $('<li>', {'data-state': game.state, 'data-gameid': game.id, text: game.id},'</li>'));
 return game
  debugger
  });
}

function checkWinner() {
	var win = {}
	var winner = false;
 $('td').text((index, square) => win[index] = square);

 gameWinArray.some(function(opt) {
if (win[opt[0]] != "" && win[opt[0]] === win[opt[1]] && win[opt[1]] === win[opt[2]]) {
var message = (`Player ${win[opt[0]]} Won!`)
setMessage(message);
return winner = true;
}
});
return winner;
}
