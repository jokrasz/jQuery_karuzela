$(document).ready(function() {
   // Kod wykonywany, gdy DOM jest gotowy
 	var carouselList = $("#carousel ul");
 });

$(function(){	
	setInterval((changeSlide, 3000){ //every 3 seconds, it performs a function to change the slide
	 	changeSlides(function(){ 
	 		carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide); 
		});
	});
	moveFirstSlide (function(){ 	
	 	var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});
	});
 });