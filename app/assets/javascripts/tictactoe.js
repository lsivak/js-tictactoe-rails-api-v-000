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
		var message = 'Tie game.';
		setMessage(message);
    debugger
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
})
$("#previous").click(function() {
  getPreviousGames();
})
$("#clear").click(function() {
  clearBoard();
})
}

function setMessage(message) {
	document.getElementById('message').innerHTML = message;

}
function updateState(event) {

$(event).html(player())
debugger
}

var clearBoard  = function () {

	$('td').remove();
}
function gameId() {
var getGameId = function(event) {
   $(event.target).data("gameid")
}
}
var saveGame = function() {
  var url, method;
  if(currentGame) {
    url = "/games/" + currentGame
    method = "PATCH"
  } else {
    url = "/games"
    method = "POST"
  }
   $.ajax({
    url: url,
    method: method,
    dataType: "json",
    data: {
      game: {
        state: {}
      }
    },
    success: function(data) {
      if(currentGame) {
        currentGame = data.game.id;
      } else {
        currentGame = undefined
      }
    }
  })
}
//
function getPreviousGames(gameId) {
  const xhr = new XMLHttpRequest;
  xhr.overrideMimeType('application/json');
  xhr.open('GET', '/games', true);
  xhr.onload = () => {
    const data = JSON.parse(xhr.responseText).data;
    const id = data.id;
    const state = data.attributes.state;



  return $('<li>', {'data-state': game.state, 'data-gameid': game.id, text: game.id},'</li>');
}
}

//


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
