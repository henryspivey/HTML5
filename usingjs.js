"use strict";


function getStuff()
{
	//document.querySelector
	var list = document.querySelectorAll("#tuna");
	// i see how this could be used to get all the selected
	// items from a page and then do something with them
	// on the backend.
	for (var i = 0; i < list.length; i++) {
		list[i].onclick=talk;
	};
}

function talk()
{
	alert("Hello world!");
}
window.onload = getStuff;
