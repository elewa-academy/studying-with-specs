// game 4 will
// 	have nested arrays -> use elem.getAttribute()
// 	a populateBoard function that writes the boardState into the html
// 	each td will have a 'row' and a 'column' attribute


var nextPlayer = true;

var boardState = [
	[null, null, null],
	[null, null, null],
	[null, null, null]
	];

function play(box) {
	var row = box.getAttribute('row');
	var column = box.getAttribute('column');
	if(boardState[row][column] == null) {	
		if(nextPlayer) {
			boardState[row][column] = 'x';
		} else {
			boardState[row][column] = 'o';
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
	var elementID = 0;
	for(var i = 0; i < 3; i++) {
		for(var j = 0; j < 3; j++) {
			document.getElementById(elementID).innerHTML = boardState[i][j];
			elementID++;
		};
	};
};