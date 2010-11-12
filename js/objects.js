MAP_WIDTH = 300;
MAP_HEIGHT = 300;
BALL_SIZE = 20;
BALL_SPEED = 20;
HOLE_SIZE = 21;

function World() {
    this.balls = [];
    this.holes = [];
    this.rackets = [];
    this.map = null;
    this.context = "";

    this.addCollider = function( elem ) {
		this.colliders[ this.colliders.length ] = elem;
    }
    this.addBall = function( elem ){
		this.balls[ this.balls.length ] = elem;
    }
    this.addHole = function( elem ){
		this.holes[ this.holes.length ] = elem;
    }
    this.addRacket = function( elem ){
		this.rackets[ this.rackets.length ] = elem;
    }
}

function Map( world, container ) {
    this.world = world;
    this.width = MAP_WIDTH;
    this.height = MAP_HEIGHT;
    this.container = document.getElementById( container );
    this.container.style.width = MAP_WIDTH;
    this.container.style.height = MAP_HEIGHT;
    this.container.width = MAP_WIDTH;
    this.container.height = MAP_HEIGHT;
    world.map = this;
    world.context = this.container.getContext('2d');
}

function Hole( world, x,y ) {
    this.world = world;
    this.x = x;
    this.y = y;
    this.size = BALL_SIZE;
    world.addHole( this );
}

function Ball( world, x, y ) {
    this.world = world;
    // initial position
    this.x = MAP_WIDTH / 2;
    this.y = MAP_HEIGHT / 2;
    // initial movement
	// FIXME: accelerate ball with time
	angle = Math.random() * 2 * Math.PI;
    this.dx = Math.cos( angle ) * BALL_SPEED;
    this.dy = Math.sin( angle) * BALL_SPEED;
    this.size = BALL_SIZE;
	console.log( "Ball.new( x = " + this.x + " ; y = " + this.y + " ; dx = " + this.dx + " ; dy = " + this.dy + " )");
    world.addBall( this );
}

function Racket( initPos ) {
    this.world = world;
    this.pos = initPos;
    world.addRacket( this );
}

window.onload = function(){
    // load modules for drawing/etc.
	initModuleDraw();
	initModuleCollision();
	initModuleEvent()

    var world = new World();
    var ball = new Ball( world );
    var map = new Map( world, "map");
	var interval = setInterval( function() { world.update(); }, 40 );
}

