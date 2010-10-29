var CONSTANT={};

//Constants keys
var SIZE="SIZE";
var WORLD_DIAM="WORLD_DIAM";

CONSTANT[SIZE]=20;

function Map() {
}

function Hole(x,y) {
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

