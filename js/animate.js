function scrol (id){
	const elemToScroll="container"+id
	const elem=document.getElementsByClassName(elemToScroll)[0]
	elem.scrollIntoView({ behavior: 'smooth' });
	console.log(elem)
	
}


function myFunction(x) {
	x.classList.toggle("change");
	var x = document.getElementById("menu");
	if (x.style.display === "block") {
	  x.style.display = "none";
	} else {
	  x.style.display = "block";
	}
  }