
var dabba = function(x,y,width,height,index){
	this.x = x || 200 ;
	this.y = y || 200;
	this.width = width || 40;
	this.height = height || 100;
	this.synth = new Tone.AMSynth();
	this.synth.toMaster();
	this.isSynthPlaying = false;
	this.nam = 'gif'+index;
	this.gif = new SuperGif({
		gif  : document.getElementById(this.nam),
		autoplay : true
	})
	console.log(this.gif);
	//this.gifCanvas;
	//this.gif.load(function(){
	//	console.log('this gif is loaded');
	//})
};

/**
 * [draw draws the dabba object]
 * @param  {[context is a 2d canvas context]}
 * @param  {[color accepted by canvas in the hex format. eg - #FFAD77]}
 * @return {[type]}
 */
dabba.prototype.draw = function(context,color){
	context.fillStyle = color || "#CC5544";
	context.fillRect(this.x, this.y, this.width, this.height);
};

/**
 * [isClicked checks if dabba is clicked]
 * @param  {[context is a 2d canvas context]}
 * @param  {[x is the mouse pointer's x coordinate]}
 * @param  {[y is the mouse pointer's y coordinate]}
 * @return {Boolean, true if dabba is clicked, false otherwise}
 */
dabba.prototype.isClicked = function(context,x,y){
	context.beginPath();
	context.rect(this.x, this.y, this.width, this.height);

	if(context.isPointInPath(x,y)){
		return true;
	} else{
		return false;
	}
}

/**
 * [setX sets the x coordinate of Dabba]
 * @param {[integer]}
 */
dabba.prototype.setX = function(x){
	this.x = x;
}

/**
 * [setY sets the y coordinate of Dabba]
 * @param {[integer]}
 */
dabba.prototype.setY = function(y){
	this.y = y;
}

/**
 * [playNote triggers an attack of the synth if its not playing already]
 * @return {[none]}
 */
dabba.prototype.playNote = function(){
	if(!this.isSynthPlaying){
		isSynthPlaying = true;
		this.synth.triggerAttack(220);
	}
}

/**
 * [stopNote triggers a release of the synth if its playing]
 * @return {[type]}
 */
dabba.prototype.stopNote = function(){
	this.isSynthPlaying = false;
	this.synth.triggerRelease();
}