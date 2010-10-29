//Map.prototype.

function initModuleDraw() {

    function cleanContext( func ){
	return function(){
	    ctx.saveContext();
	    func();
	    ctx.restoreContext();
	}
    }

    Hole.prototype.draw= cleanContext( function(){

	});

    Ball.prototype.draw=cleanContext( function(){

	});

    Racket.prototype.draw=cleanContext( function(){

	});
}
