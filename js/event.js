//Map.prototype.

KEY_LEFT = 37;
KEY_RIGHT = 39;
KEY_UP = 38;
KEY_DOWN = 40;


function initModuleEvent() {

	// FIXME: register keyboard events somewhere ...
		
	World.prototype.keydown = function( e ){
		var e = window.event || e;
		//alert("keycode " + e.keyCode);
		this.keys[e.keyCode] = 1;
	}

	World.prototype.keyup = function( e ){
		var e = window.event || e;
		//alert("keycode " + e.keyCode);
		this.keys[e.keyCode] = 0;
	}

	World.prototype.tick = function() {
		this.update();
		this.draw();
	}


	World.prototype.update = function() {
		// console.log("World.update - " + this);
		// console.log("World.update -- start !");
		
		// get all registered objects & update everybody
		// console.log("World.update -- stop !");

		this.map.update();
		for( var i = 0; i < this.balls.length ; i++ ) {
		//	this.balls[i].update();	
		}
		for( var i = 0; i < this.rackets.length ; i++ ) {
			this.rackets[i].update();	
		}
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
		if ( this.world.keys[KEY_LEFT] == 1 ) {
			this.pos -= RACKET_STEP;
		} else if ( this.world.keys[KEY_RIGHT] == 1 ) {
			this.pos += RACKET_STEP;
		}
	};
}

