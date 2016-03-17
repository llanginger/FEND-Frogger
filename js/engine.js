
var Engine = (function(global) {
    var doc = global.document,
        win = global.window,
        canvas = doc.createElement('canvas'),
        ctx = canvas.getContext('2d'),
        lastTime;

    canvas.width = 505; // x
    canvas.height = 750; // y
    doc.body.appendChild(canvas);

    function main() {
        var now = Date.now(),
            dt = (now - lastTime) / 1000.0;
        update(dt);
        render();
        lastTime = now;
        // console.log('called only once')
        allEnemies.forEach(function(enemy){
          enemy.resetPos();
        });
        floatingLog.resetPos();
        win.requestAnimationFrame(main);
    }

    function init() {
        reset();
        lastTime = Date.now();
        main();
    }

    function update(dt) {
        updateEntities(dt);
        checkCollisions();
        checkLogCollision();
    }

    function updateEntities(dt) {
        allEnemies.forEach(function(enemy) {
            enemy.update(dt);
        });
        player.update();
        floatingLog.update(dt);

    }

    function checkCollisions() {
      allEnemies.forEach(function(enemy) {
        if (player.x <= enemy.x + 70 && enemy.x <= player.x + 70 && player.y <= enemy.y +10 && enemy.y <= player.y + 10) {
          reset();
        }
      });
    }
    // var level = 1;
    function checkLogCollision() {
      if (player.x <= floatingLog.x + 70 && floatingLog.x <= player.x + 70 && player.y <= floatingLog.y +10 && floatingLog.y <= player.y + 10) {
        numRows++;
        level++;
        reset();
        beetleCreator();
      }
    }


    var numCols = 5;

    function render() {
        var rowImages = [
                'images/water-block.png',   // Top row is water
                'images/stone-block.png',   // Row 1 of 3 of stone
                'images/stone-block.png',   // Row 2 of 3 of stone
                'images/stone-block.png',   // Row 3 of 3 of stone
                'images/grass-block.png',   // Row 1 of 2 of grass
                'images/grass-block.png',
                'images/grass-block.png',
                'images/grass-block.png',
                'images/grass-block.png'    // Row 2 of 2 of grass
            ],
            // numRows = 7,
            // numCols = 5,
            row, col;

        for (row = 0; row < numRows; row++) {
            for (col = 0; col < numCols; col++) {
                ctx.drawImage(Resources.get(rowImages[row]), col * 101, row * 83);
            }
        }
        ctx.fillStyle = "rgb(250, 250, 250)";
        ctx.font = "24px Helvetica";
        ctx.textAlign = "left";
        ctx.textBaseline = "top";
        ctx.fillText("Level: " + level, 13, 60);

        renderEntities();
    }



    function renderEntities() {

        allEnemies.forEach(function(enemy) {
            enemy.render();
        });
        player.render();
        floatingLog.render();
    }

    function reset() {
      player.x = 200;
      if (numRows === 6){
        player.y = 405;
      }
      if (numRows === 7){
        player.y = 488;
      }
      if (numRows === 8){
        player.y = 571;
      }
    }

    Resources.load([
        'images/stone-block.png',
        'images/water-block.png',
        'images/grass-block.png',
        'images/enemy-bug.png',
        'images/Rock.png',
        'images/char-boy.png'
    ]);
    Resources.onReady(init);

    global.ctx = ctx;


})(this);
