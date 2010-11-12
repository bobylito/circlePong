//Map.prototype.

function initModuleDraw() {

	/*
	   function cleanContext( func ){
	   return function(){
	   tx.saveContext();
	   func();
	   ctx.restoreContext();
	   }
	   }*/

	World.prototype.draw = function() {
		this.map.draw();
		for( var i = 0; i < this.balls.length ; i++ ) {
			this.balls[i].draw();	
		}
		for( var i = 0; i < this.rackets.length ; i++ ) {
			this.rackets[i].draw();	
		}
	}; 

	Map.prototype.draw = function() {
		var ctx = this.world.context;
		ctx.save();

		//draw a circle
		ctx.fillStyle = "#ffffff";
		ctx.beginPath();
		ctx.arc( MAP_WIDTH/2, MAP_WIDTH/2, MAP_RAY, 0, Math.PI*2, true );
//		ctx.rotate(p_deg * Math.PI / 180);
		ctx.closePath();
		ctx.fill();

		ctx.restore();
	};

	Hole.prototype.draw = function(){

	};

	Ball.prototype.draw = function(){
		var ctx = this.world.context;
		ctx.save();

		//draw a circle
		ctx.fillStyle = "#000000";
		ctx.beginPath();
		var bs2 = BALL_SIZE / 2;
		ctx.arc(this.x, this.y, BALL_SIZE, 0, Math.PI*2, true);
		ctx.closePath();
		ctx.fill();

		ctx.restore();
	};

	Racket.prototype.draw = function(){
		var ctx = this.world.context;
		ctx.save();

		var pstart = this.pos - RACKET_SIZE / 2;
		var pstop = this.pos + RACKET_SIZE / 2;
		var pstart_rad = pstart * Math.PI / 180;
		var pstop_rad = pstop * Math.PI / 180;

		ctx.strokeStyle = "#ff0000";
		ctx.fillStyle = ctx.strokeStyle;
		ctx.lineWidth = RACKET_WIDTH;
		ray = MAP_RAY - RACKET_WIDTH;

		pstart_x = MAP_WIDTH/2 + ray * Math.cos( pstart_rad );
		pstart_y = MAP_WIDTH/2 + ray * Math.sin( pstart_rad );
		pstop_x = MAP_WIDTH/2 + ray * Math.cos( pstop_rad );
		pstop_y = MAP_WIDTH/2 + ray * Math.sin( pstop_rad );

		ctx.beginPath();
		ctx.arc(MAP_WIDTH/2, MAP_HEIGHT/2, ray, pstop_rad, pstart_rad, true);
		ctx.moveTo(pstart_x, pstart_y);
		ctx.lineTo(pstop_x, pstop_y);
		ctx.stroke();
		ctx.fill();

		ctx.restore();
	};
}

