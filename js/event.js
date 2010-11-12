//Map.prototype.

function initModuleEvent() {

	World.prototype.update = function() {
		// console.log("World.update - " + this);
		// console.log("World.update -- start !");
		
		// get all registered objects & update everybody
		for( var i = 0; i < this.balls.length ; i++ ) {
			this.balls[i].update();	
		}
		// console.log("World.update -- stop !");

		// draw
		this.draw();
	};

	Map.prototype.update = function() {
	};

    Hole.prototype.update = function(){

	};

    Ball.prototype.update = function() {
		this.x += this.dx;
		this.y += this.dy;
	};

    Racket.prototype.update = function(){

	};
}

