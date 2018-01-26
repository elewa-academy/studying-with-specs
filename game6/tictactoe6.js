// game 6 will
// 	start with an empty "ticTacBoard" div in the html and generate the board dynamically
// 	have an on load listener to generate the first board when the page is loaded


var nextPlayer = true;

var boardState = [
	[null, null, null],
	[null, null, null],
	[null, null, null]
	];

function play(box) {
	var row = box.parentElement.getAttribute('row');
	var column = box.getAttribute('column');
	if(boardState[row][column] == null) {	
		if(nextPlayer) {
			boardState[row][column] = 'x';
		} else {
			boardState[row][column] = 'o';
		};
		nextPlayer = !nextPlayer;
		// did someone win? 
		// if they did, change the state and redraw
		populateBoard();
	} else {
		alert('grow up. you can\'t do that')
	};
};


function populateBoard() {
	var board = document.getElementById('ticTacBoard').children[0].children;
	var row;
	var column;
	for(var i = 0; i < 3; i++) {
		row = board[i].children;
		for(var j = 0; j < 3; j++) {
			column = row[j];
			column.innerHTML = boardState[i][j];
		};
	};
};

function buildBoard() {
	var board = document.getElementById('ticTacBoard');
	var row;
	var cell;
	for(var i = 0; i < 3; i++) {
		row = board.insertRow(i);
		row.setAttribute('row', i);
		for(var j = 0; j < 3; j++) {
			cell = row.insertCell(j); 
			// why not set it to null directly?
			// because what if you want to finish a saved game?
			cell.innerHTML = boardState[i][j];
			cell.setAttribute('column', j);
			cell.setAttribute('onclick', 'play(this)');
		};
	};
};

window.addEventListener('DOMContentLoaded', function() {
	buildBoard();
});


