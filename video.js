"use strict";
	
function doFirst()
{	
	var barSize = 600;
	var myMovie = document.getElementById('myMovie');
	var playButton = document.getElementById("playButton");
	var bar = document.getElementById("defaultBar");
	var progressBar = document.getElementById("progressBar");

	playButton.addEventListener('click', playOrPause, false);
	bar.addEventListener('click', clickedBar, false);

}

function playOrPause()
{
	if(!myMovie.paused && !myMovie.ended)
	{
		myMovie.pause();
		playButton.innerHTML = "Play";
		window.clearInterval(updateBar); //stop updating
	} else {
		myMovie.play();
		playButton.innerHTML = "Pause";
		var updateBar = setInterval(update, 500);
	}
}

function update()
{
	if(!myMovie.ended)
	{
		var size = parseInt(myMovie.currentTime*600/myMovie.duration);
		progressBar.style.width = size +'px';
	} else
	{
		progressBar.style.width= 0+'px';
		playButton.innerHTML = "Play";
		window.clearInterval(updateBar);
	}
}

function clickedBar(e)
{
	// determine where the mouse is
	if(!myMovie.paused && !myMovie.ended)
	{
		var mouseX = e.pageX-bar.offsetLeft;
		var newTime = mouseX*myMovie.duration/600;
		myMovie.currentTime = newTime;
		progressBar.style.width = mouseX+'px';
	}
}

window.addEventListener('load', doFirst, false)










