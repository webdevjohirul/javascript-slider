setInterval(function(){

if(document.getElementsByClassName("sliderItem")[0].classList.contains("active")){
	
	document.getElementsByClassName("sliderItem")[1].classList.add("active");
	document.getElementsByClassName("sliderItem")[0].classList.remove("active");

}else if(document.getElementsByClassName("sliderItem")[1].classList.contains("active")){

	document.getElementsByClassName("sliderItem")[2].classList.add("active");
	document.getElementsByClassName("sliderItem")[1].classList.remove("active");

}else if(document.getElementsByClassName("sliderItem")[2].classList.contains("active")){

	document.getElementsByClassName("sliderItem")[3].classList.add("active");
	document.getElementsByClassName("sliderItem")[2].classList.remove("active");

}else if(document.getElementsByClassName("sliderItem")[3].classList.contains("active")){

	document.getElementsByClassName("sliderItem")[4].classList.add("active");
	document.getElementsByClassName("sliderItem")[3].classList.remove("active");

}else if(document.getElementsByClassName("sliderItem")[4].classList.contains("active")){

	document.getElementsByClassName("sliderItem")[5].classList.add("active");
	document.getElementsByClassName("sliderItem")[4].classList.remove("active");

}else if(document.getElementsByClassName("sliderItem")[5].classList.contains("active")){

	document.getElementsByClassName("sliderItem")[6].classList.add("active");
	document.getElementsByClassName("sliderItem")[5].classList.remove("active");

}else if(document.getElementsByClassName("sliderItem")[6].classList.contains("active")){

	document.getElementsByClassName("sliderItem")[7].classList.add("active");
	document.getElementsByClassName("sliderItem")[6].classList.remove("active");

}else if(document.getElementsByClassName("sliderItem")[7].classList.contains("active")){

	document.getElementsByClassName("sliderItem")[8].classList.add("active");
	document.getElementsByClassName("sliderItem")[7].classList.remove("active");

}else if(document.getElementsByClassName("sliderItem")[8].classList.contains("active")){

	document.getElementsByClassName("sliderItem")[0].classList.add("active");
	document.getElementsByClassName("sliderItem")[8].classList.remove("active");

}

},4000);