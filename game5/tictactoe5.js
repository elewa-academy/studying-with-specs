// game 5 will
// 	like 4 but with a 'row' attribute on the 'tr's.  for better looping

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

