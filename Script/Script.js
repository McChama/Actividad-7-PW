/*Desaparecer el titulo*/
function Hide(){
	document.getElementById("Titulo").style.display = "none";
}

/*Mostrar el titulo*/
function Show(){
	document.getElementById("Titulo").style.display = "initial";
}

/*Cambiar fondo del banner*/
function CambiarFondo(){
	var Fondo = document.getElementById("Fondo").getAttribute("src");
	alert(Fondo);
	if(Fondo == "Media/1.PNG")
		document.getElementById("Fondo").setAttribute("src","Media/2.PNG");
	else if(Fondo == "Media/2.PNG")
		document.getElementById("Fondo").setAttribute("src","Media/1.PNG");
}

/*Cambiar color de fondo*/
function CambiarColor(){
	var R = Math.random() * (255 - 0);
	var G = Math.random() * (255 - 0);
	var B = Math.random() * (255 - 0);
	document.getElementById("Cuerpo").setAttribute("bgcolor","rgb("+R+","+G+","+B+")");

}
