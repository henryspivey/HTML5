function doFirst()
{
	var button = document.getElementById('button');
	button.onclick = function()
	{
		var one = document.getElementById('one').value;
		var two = document.getElementById('two').value;
		sessionStorage.setItem(one,two);
		display();
		document.getElementById('one').value= "";
		document.getElementById('two').value= "";
	}
	display()

}
function display()
{
	var rightBox = document.getElementById('rightbox');
	rightBox.innerHTML = "";
	for (var i = 0; i < sessionStorage.length; i++) {
		var a = sessionStorage.key(i)
		var b = sessionStorage.getItem(a);
		rightbox.innerHTML += a+ " - "+b+"<br />";
	}
}
window.onload = doFirst;
