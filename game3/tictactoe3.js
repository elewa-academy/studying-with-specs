// game 3 will 
// 	have populateBoard from 1d array

var nextPlayer = true;

var boardState = [
	null, null, null,
	null, null, null,
	null, null, null
	];

function play(box) {
	if(boardState[box.id] == null) {	
		if(nextPlayer) {
			boardState[box.id] = 'x';
		} else {
			boardState[box.id] = 'o';
		}
		nextPlayer = !nextPlayer;
		// redraw board only if it was changed?
		populateBoard();
	} else {
		alert('grow up. you can\'t do that')
	};
	// redraw board even if it wasn't changed?
	// populateBoard();
};

function populateBoard() {
	for(var i = 0; i < 9; i++) {
		document.getElementById(i).innerHTML = boardState[i];
	};
};