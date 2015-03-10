window.onload = function(){
	var canvas = document.getElementById("workarea");
	var context = canvas.getContext('2d');
	context.fillStyle = "#99aa33";
	context.rect(0,0,canvas.width,canvas.height);
	context.fill();

	var dabbas = [];


	dabbas[0] = new dabba(20,20,100,80);

	dabbas[0].draw(context);

	var isDragging = false;


	canvas.addEventListener("mousedown", canvasOnMouseDown);
	canvas.addEventListener("mouseup", canvasOnMouseUp);
	canvas.addEventListener("mousemove", canvasOnMouseMove);
	//canvas.addEventListener("drag", canvasDrag);

	function canvasOnMouseMove(event){
		if(!isDragging){
			return;
		} else{
			if(dabbas[0].isClicked(context,event.x,event.y)){
				//console.log("dabbas[0] is being dragged");
				var effectiveMouseCoordinates = getEffectiveMouseCoordinates(event.x, event.y);
				var offset = getOffsetFromMouse(dabbas[0].x, dabbas[0].y,effectiveMouseCoordinates.x, effectiveMouseCoordinates.y);
				var reDrawAt = {
					x : effectiveMouseCoordinates.x - dabbas[0].width/2, // offset.x = effectiveMouseCoordinates.x - dabbas[0].x
					y : effectiveMouseCoordinates.y - dabbas[0].height/2
				};
				//console.log(temp);
				dabbas[0].setX(reDrawAt.x);
				dabbas[0].setY(reDrawAt.y);
				console.log(dabbas[0].x, dabbas[0].y)
				reDrawApp(context); // just sending the new coordinates of the object right now.
			}
		}
	};
	
	function canvasOnMouseDown(event){
		isDragging = true;
		//console.log("is Dragging = " + isDragging);
		//console.log("x : " + event.x + ", y : " + event.y + "++ canvasX : " + canvas.offsetLeft + ", canvasY : " + canvas.offsetTop);
	};

	function canvasOnMouseUp(){
		isDragging = false;
		//console.log("is Dragging = " + isDragging);
	};

	function getEffectiveMouseCoordinates(x,y){
		var obj = {
			x : x - canvas.offsetLeft,
			y : y - canvas.offsetTop
		};
		return obj;
	};

	function getOffsetFromMouse(x,y,mx,my){
		var obj = {
			x : mx - x,
			y : my - y
		};
		return obj;
	}

	function reDrawApp(x,y){
		context.fillStyle = "#99aa33";
		context.rect(0,0,canvas.width,canvas.height);
		context.fill();
		dabbas[0].draw(context)
	}
}
