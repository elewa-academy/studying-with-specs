// game 1 will
// 	alternately write x's and o's
// 	it will over write old x's and o's
// 	state is stored directly in the board

var nextPlayer = true;

function play(box) {
	if(nextPlayer) {
		box.innerHTML = 'x';
	} else {
		box.innerHTML = 'o';
	};
	nextPlayer = !nextPlayer;
}