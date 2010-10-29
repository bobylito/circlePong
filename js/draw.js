//Map.prototype.

initModuleDraw(ctx){
	function cleanContext(func){
		return function(){
			ctx.saveContext();
			func();
			ctx.restoreContext();
		}
	}

	Hole.prototype.draw= cleanContext(function(){
		
	});
	
	Ball.prototype.draw=cleanContext(function(){
		
	});
	
	Racket.prototype.draw=cleanContext(function(){
	
	});
	/*
		this.x;
		this.y;
		this.size=CONSTANT[SIZE]+1;
	}

	function Ball(x,y) {
		this.x;
		this.y;
		this.size=CONSTANT[SIZE];
	}

	function Racket(initPos) {
		this.pos=initPos;
	}

*/

}
