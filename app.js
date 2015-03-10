window.onload = function(){
	var canvas = document.getElementById("workarea");
	var context = canvas.getContext('2d');
	context.fillStyle = "#99aa33";
	context.rect(0,0,canvas.width,canvas.height);
	context.fill();

	var dabba1 = new dabba(20,20,100,80);
	dabba1.draw(context);

	var isDragging = false;


	canvas.addEventListener("mousedown", canvasOnMouseDown);
	canvas.addEventListener("mouseup", canvasOnMouseUp);
	canvas.addEventListener("mousemove", canvasOnMouseMove);
	//canvas.addEventListener("drag", canvasDrag);

	function canvasOnMouseMove(event){
		if(!isDragging){
			return;
		} else{
			if(dabba1.isClicked(context,event.x,event.y)){
				console.log("dabba1 is being dragged");
			}
		}
	};
	
	function canvasOnMouseDown(event){
		isDragging = true;
		console.log(isDragging);
		console.log("x : " + event.x + ", y : " + event.y + "++ canvasX : " + canvas.offsetLeft + ", canvasY : " + canvas.offsetTop);
		var RMC = getRealMouseCoordinates(event.x, event.y);
		//canvas.log(" Real Coordinates " + RMC.x + " " + RMC.y);
		canvas.log(RMC);
	};

	function canvasOnMouseUp(){
		isDragging = false;
		console.log(isDragging);
	};

	function getRealMouseCoordinates(x,y){
		var obj = {
			var1 : x - canvas.offsetLeft,
			var2 : y - canvas.offsetTop
		};
		return obj;
	};
}
