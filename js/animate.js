function scrol (id){
	const elemToScroll="container"+id
	const elem=document.getElementsByClassName(elemToScroll)[0]
	elem.scrollIntoView({ behavior: 'smooth' });
	console.log(elem)
	
}

$(document).ready(function(){
	$('.your-class').slick({
	  setting-name: setting-value
	});
  });