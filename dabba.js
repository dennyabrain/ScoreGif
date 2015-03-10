var dabba = function(x,y,width,height){
	this.x = x || 200 ;
	this.y = y || 200;
	this.width = width || 40;
	this.height = height || 100;
};

dabba.prototype.draw = function(context,color){
	context.fillStyle = color || "#CC5544";
	context.fillRect(this.x, this.y, this.width, this.height);
};

dabba.prototype.isClicked = function(context,x,y){
	context.beginPath();
	context.rect(this.x, this.y, this.width, this.height);

	if(context.isPointInPath(x,y)){
		return true;
	}
}