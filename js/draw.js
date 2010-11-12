//Map.prototype.

function initModuleDraw() {

    function cleanContext( func ){
		return function(){
			ctx.saveContext();
			func();
			ctx.restoreContext();
		}
    }

	World.prototype.draw = cleanContext( function() {

	}); 

    Hole.prototype.draw = cleanContext( function(){

	});

    Ball.prototype.draw = cleanContext( function(){

	});

    Racket.prototype.draw = cleanContext( function(){

	});
}

