
var rowImages = [
        'images/water-block.png',   // Top row is water
        'images/stone-block.png',   // Row 1 of 3 of stone
        'images/stone-block.png',   // Row 2 of 3 of stone
        'images/stone-block.png',   // Row 3 of 3 of stone
        'images/grass-block.png',   // Row 1 of 2 of grass
        'images/grass-block.png'    // Row 2 of 2 of grass
    ],



var createBoard = function(numRows){
  for (row = 0; row < numRows; row++) {
    var numCols = 5;
    for (col = 0; col < numCols; col++) {
      ctx.drawImage(Resources.get(rowImages[row]), col 101, row * 83);
    }
  }
}

createBoard(6);
