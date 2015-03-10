window.onload = function(){
	var canvas = document.getElementById("workarea");
	var context = canvas.getContext('2d');

	//Just styling and setting up canvas to fit full screen
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	context.fillStyle = "#99aa33";
	context.rect(0,0,canvas.width,canvas.height);
	context.fill();

	var dabbas = [];

	for(i=0; i<5;i++){
		dabbas[i] = new dabba(1+i*200,100, 180, 250);
		dabbas[i].draw(context);
	}
	for(i=0; i<5;i++){
		dabbas[i+5] = new dabba(1+i*200,300, 180, 250);
		dabbas[i+5].draw(context);
	}

	var isDragging = false;


	canvas.addEventListener("mousedown", canvasOnMouseDown);
	canvas.addEventListener("mouseup", canvasOnMouseUp);
	canvas.addEventListener("mousemove", canvasOnMouseMove);
	//canvas.addEventListener("drag", canvasDrag);

	function canvasOnMouseMove(event){
		if(!isDragging){
			return;
		} else{
			for(i=0;i<dabbas.length;i++){
				if(dabbas[i].isClicked(context,event.x,event.y)){
					dabbas[i].playNote();
					//console.log("dabbas[" + i + "] is being dragged");
					//console.log("dabbas[0] is being dragged");
					var effectiveMouseCoordinates = getEffectiveMouseCoordinates(event.x, event.y);
					var offset = getOffsetFromMouse(dabbas[i].x, dabbas[i].y,effectiveMouseCoordinates.x, effectiveMouseCoordinates.y);
					var reDrawAt = {
						x : effectiveMouseCoordinates.x - dabbas[i].width/2, // lazy hack. needs to be fixed.
						y : effectiveMouseCoordinates.y - dabbas[i].height/2
					};
					//console.log(temp);
					dabbas[i].setX(reDrawAt.x);
					dabbas[i].setY(reDrawAt.y);
					//console.log(dabbas[i].x, dabbas[i].y)
					reDrawApp(context); // just sending the new coordinates of the object right now.
				} else{
					dabbas[i].stopNote();
				}
			}
		}
	};
	
	function canvasOnMouseDown(event){
		isDragging = true;
		//console.log("is Dragging = " + isDragging);
		//console.log("x : " + event.x + ", y : " + event.y + "++ canvasX : " + canvas.offsetLeft + ", canvasY : " + canvas.offsetTop);
	};

	function canvasOnMouseUp(event){
		console.log(event);
		isDragging = false;
		//console.log("is Dragging = " + isDragging);
		for(i=0;i<dabbas.length;i++){
			dabbas[i].stopNote();
		}
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
		for(i=0;i<dabbas.length;i++){
			dabbas[i].draw(context);
		}
	}
}
