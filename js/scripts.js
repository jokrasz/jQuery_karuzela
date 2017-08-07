window.onload = function() {
  console.log('The page is fully loaded.');
  // the rest of the script
}

$(document).ready(function() {
   // Kod wykonywany, gdy DOM jest gotowy	
 });

$(function(){	
	var carouselList = $("#carousel ul");
	setInterval(changeSlides, 3000); //every 3 seconds, it performs a function to change the slide
	function changeSlides(function){ 
		carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide); 
	}
	
	function moveFirstSlide (function){ 	
	 	var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});
	}
 });