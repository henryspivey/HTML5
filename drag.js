function doFirst()
{
	myPic = document.getElementById('facepic');
	myPic.addEventListener("dragstart",startDrag, false);
	myPic.addEventListener("dragend", enddrag, false);
	leftbox = document.getElementById("leftbox");
	leftbox.addEventListener("dragenter",function(e){
		e.preventDefault(); //don't do anything
		leftbox.style.background  = "SkyBlue";
		leftbox.style.border  = "3px solid red";
	} ,false);
	leftbox.addEventListener("dragleave",function(e){
		e.preventDefault();
		leftbox.style.background= "White";
		leftbox.style.border = "3px solid blue";
	} ,false);
	leftbox.addEventListener("dragover",function(e){
		e.preventDefault();
	} ,false);
	leftbox.addEventListener("drop",function(e){
		e.preventDefault();
		leftbox.innerHTML = e.dataTransfer.getData('Text');
	},false);
}
function enddrag(e)
{
	pic = e.target;
	pic.style.visibility = 'hidden';
}
function startDrag(e)
{
	var code = '<img id="facepic" src="/Users/spivotron/Desktop/ionic-logo-blog.png">';
	e.dataTransfer.setData('Text',code);
}
window.onload = doFirst;