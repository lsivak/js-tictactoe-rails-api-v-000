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


var player = () => turn % 2 ? 'O' : 'X';

function attachListeners() {
	var el = document.getElementById("squares[i]");
	el.addEventListener("click", () => { doTurn(player); }, false);
}

function doTurn(square) {
	if (turn <=7) {
		updateState(square)
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
el.addEventListener("click", () => { squares[i].innerHTML= this.player(); }, false);


$(document).ready (function () {
$("saveButton").on("click", function() { 
  var gameId=parseInt($("saveButton").attr("data-id")) + 1;
	$.getJSON("/games/" + gameId + ".json", function(data) {
	$(".state").text(data["state"]);
	 $("saveButton").attr("data-id", data["id"]);
})
})
})
}

$(document).ready(function(){
    $("clearButton").click(function(){
			if ($(this).val() == "clearButton")
	        $(this).val("")
	});
})
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


