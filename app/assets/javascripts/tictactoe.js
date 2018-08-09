const squares = window.document.querySelectorAll('td');

let index = 0;
   for (let y = 0; y < 3; y++) {
     for (let x = 0; x < 3; x++) {
      let square = document.querySelector(`[data-x="${x}"][data-y="${y}"]`)
       index++;
     }
   }
const gameWinArray = [[0,1,2], [3,4,5], [6,7,8], [0,3,6],
          [1,4,7], [2,5,8], [0,4,8], [2,4,6]];

var currentGame = 0
var turn = 0

$(document).ready(function() {
  attachListeners();
});
var player = () => turn % 2 ? 'O' : 'X';


function doTurn(square) {
		updateState(square);
		if (checkWinner() === true) {
			saveGame();
			clearBoard();
	} else	if (turn === 8 && !checkWinner()) {
    message = 'Tie game.';
   setMessage(message);
		saveGame();
		clearBoard()
} else if (turn <= 9) {
  turn += 1
}
}

// function tieGame() {
//   if (!checkWinner() && turn >= 8 ) {
//     message = 'Tie game.';
//    setMessage(message);
//   }
// }

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



function attachListeners() {
$("td").on('click', function() {
  doTurn(this)
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
	$('tbody').empty();
  turn = 0
  currentGame = 0
}

function gameId(event) {
   $(event.target).data("game.id")
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
      currentGame = game.id;
      $('#games').append(`<button id="gameid-${game.data.id}">${game.data.id}</button><br>`);
      $("#gameid-" + game.data.id).on('click', () => getPreviousGames());
    });
  }
  debugger
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
