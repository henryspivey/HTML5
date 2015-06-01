function doFirst()
{
	var x = document.getElementById('canvas');
	canvas = x.getContext("2d");
	/*canvas.fillStyle = "blue";
	canvas.strokeStyle="red";
	canvas.strokeRect(10, 10, 100, 100);
	canvas.fillRect(10, 120, 100, 100);

	//canvas.fillRect("red")
	canvas.clearRect(20,130, 45,65);
	
	var g = canvas.createLinearGradient(0,0,100,100);
	g.addColorStop(.0,"blue");
	g.addColorStop(.5,"orange")
	g.addColorStop(1,"red")
	canvas.fillStyle=g;
	canvas.fillRect(0,0,100,100);
	

	canvas.beginPath();
	canvas.moveTo(50,50);
	canvas.lineTo(70,250);
	canvas.lineTo(300,250);
	canvas.closePath();
	canvas.stroke();
	
	canvas.shadowOffsetX = 4;
	canvas.shadowOffsetY = 4;
	canvas.shadowBlur = 6;
	canvas.shadowColor = "rgba(0,0,255,.5)";
	canvas.font = "bold 33px Tahoma";
	canvas.textAlign="end";
	canvas.fillText("omgwtfbbq", 300, 100);
	

	canvas.font="bold 22px Tahoma";
	canvas.textAlign = "start";
	canvas.fillText("Start", 10, 30);
	canvas.translate(100,150);
	canvas.fillText("After translate", 0,0);
	canvas.rotate(1.618);
	canvas.fillText("after rotate",0,0);
	canvas.scale(1.5, 4);
	canvas.fillText("after scale",0,20);
	

	canvas.font= "bold 22px Tahoma";
	canvas.textAlign = "start";
	canvas.save();
	canvas.fillText("let's begin", 10, 30);

	canvas.rotate(1);
	canvas.fillText("after rotate", 60,10);
	canvas.restore();
	canvas.fillText("after restoring",10,30);
	
	var pic = new Image();
	pic.src= "/Users/spivotron/Desktop/ionic-logo-blog.png";
	pic.addEventListener("load", function(){ 
		canvas.drawImage(pic,0,0,x.width,x.height);
	}, false)
	*/
	window.addEventListener("mousemove", function(e){
		//canvas.clearRect(0,0,x.width, x.height);
		var xPos = e.clientX;
		var yPos = e.clientY;
		console.log(xPos, yPos)
		canvas.fillRect(xPos,yPos,100, 100);
	}, false)

}

window.onload = doFirst;