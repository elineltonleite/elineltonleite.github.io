window.onload = function(){
	slideUm()
}
function slideUm(){
	document.getElementById('slide-img').innerHTML='<img src="./img/slide-1.jpg">'
	setTimeout(slideDois,5000)
	
}
function slideDois(){
	document.getElementById('slide-img').innerHTML='<img src="./img/slide-2.jpg">'
	setTimeout(slideTres,5000)
}
function slideTres(){
	document.getElementById('slide-img').innerHTML='<img src="./img/slide-3.jpg">'
	setTimeout(slideUm,5000)
}