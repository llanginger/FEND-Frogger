function Player(){this.x=200,this.y=405,this.sprite="images/char-boy.png",this.render=function(){ctx.drawImage(Resources.get(this.sprite),this.x,this.y)}}var Enemy=function(t){this.x=0,this.y=t,this.sprite="images/enemy-bug.png",this.speed=this.randomSpeed()};Enemy.prototype.update=function(t){this.x+=this.speed*t},Enemy.prototype.render=function(){ctx.drawImage(Resources.get(this.sprite),this.x,this.y)},Enemy.prototype.randomSpeed=function(){return Math.floor(300*Math.random())+100},Enemy.prototype.resetPos=function(){this.x>510&&(this.x=-100,this.speed=this.randomSpeed())},Player.prototype.update=function(t){},Player.prototype.handleInput=function(t){"left"===t&&this.x>=30&&(this.x-=100),"right"===t&&this.x<=380&&(this.x+=100),"up"===t&&this.y>=30&&(this.y-=83),"down"===t&&this.y<=360+83*(numRows-6)&&(this.y+=83)};var FloatingLog=function(){this.speed=150,this.x=0,this.y=-20,this.sprite="images/Rock.png",this.render=function(){ctx.drawImage(Resources.get(this.sprite),this.x,this.y)}};FloatingLog.prototype.update=function(t){this.x+=this.speed*t},FloatingLog.prototype.resetPos=function(){this.x>510&&(this.x=-100)};var allEnemies=[],player=new Player,floatingLog=new FloatingLog,level=1,numRows=6,beetleCreator=function(){for(var t=65,e=0;numRows-2>e;e++)allEnemies[e]=new Enemy(t),t+=83};beetleCreator(),document.addEventListener("keyup",function(t){var e={37:"left",38:"up",39:"right",40:"down"};player.handleInput(e[t.keyCode])});