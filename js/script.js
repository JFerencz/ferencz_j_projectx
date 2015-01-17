var controller;
$(document).ready(function($) {
	// init controller
	controller = new ScrollMagic();
	var box =  $("#testBox");
	var turnGreen = TweenMax.to("#testBox",1.5,{backgroundColor:"green"});
	
	var sceneOne = new ScrollScene({triggerElement:"#trigger",duration:200});
	sceneOne.setTween(turnGreen).addTo(controller);
	
	sceneOne.addIndicators();
	
	
	
});