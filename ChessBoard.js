var size = 8;
var board = "";
for(var j = 0; j < size; j++){
	for (var i = 0; i < size; i++) {
 	 if ((i + j) % 2 == 0) {
    	board += "#";
  		}
  
  	else {
    	board += " ";
  		}
	}
  board += "\n";
}
console.log(board);