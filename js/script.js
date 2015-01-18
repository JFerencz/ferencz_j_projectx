var controller;
var wHeight = $(window).height();
var wWidth = $(window).width();

$(window).load(function() {
	splashResize();
	$("#loader").fadeOut();
});

$(document).ready(function($) {
	// init controller
	controller = new ScrollMagic();
	var splash =  $("#sectionOne");
	var wipeOut = TweenMax.to(splash,1.5,{opacity:"0"});
	var sceneOne = new ScrollScene({duration:200});
	sceneOne.setTween(wipeOut).addTo(controller);
	

/* --- SECTION 2 --- */
	var sectionTwo = $("#sectionTwo");
	var sectionTwoObjects = $("#sectionTwo .headerText, #sectionTwo .blurb");
	
	basicScrollIn(sectionTwo,controller,-wHeight/3);	
		
/* --- SECTION 3 --- */
	var sectionThree = $("#sectionThree");
	var sectionThreeObjects = $("#sectionThree .headerText, #sectionThree .blurb");

	basicScrollOut(sectionTwoObjects,sectionThree,controller);
	basicScrollIn(sectionThree,controller,0);	
	
	
	var bgTransition = TweenMax.to("#staticBG",2,{css:{"opacity":"0"}});
	var sceneThreeBG = new ScrollScene({triggerElement:"#sectionThree",offset:-wHeight/3,duration:400}).setTween(bgTransition).addTo(controller);
	
	$(window).resize(function() {
		splashResize();
    });
    
/* --- SECTION 4 --- */
	var sectionFour = $("#sectionFour");
	var sectionFourObjects = $("#sectionFour .headerText, #sectionFour .blurb");
	
	basicScrollOut(sectionThreeObjects,sectionFour,controller);
	basicScrollIn(sectionFour,controller,0);		
	
	//Additional Actions (beyond basic actions)
	var emphasisText = TweenMax.staggerTo("span.emphTxt", 0.5, {color:"#004851", ease:Back.easeIn}, 0.5);	
	var sceneFourEmphText = new ScrollScene({triggerElement:"#sectionFour",offset:400}).setTween(emphasisText).addTo(controller);
	
	var emphasisImg = TweenMax.staggerTo(".emph", 0.5, {opacity:"1", ease:Back.easeIn}, 0.5);
	var sceneFourEmphImg  = new ScrollScene({triggerElement:"#sectionFour",offset:400}).setTween(emphasisImg).addTo(controller);	

/* --- SECTION 5 --- */

	var sectionFive = $("#sectionFive");
	var sectionFiveObjects = $("#sectionFive,#sectionFive .headerText, #sectionFive .blurb");

	basicScrollOut(sectionFourObjects,sectionFive,controller);
	basicScrollIn(sectionFive,controller,0);	


$(window).resize(function() {
	splashResize();
});
	
});

function basicScrollOut(objects,trigger,controller){
	var sceneRemovaltween = TweenMax.to(objects,1.5,{css:{opacity:0,top:-300}});
// 	var sceneRemovaltween = TweenMax.to(objects,1.5,{css:{position:"relative"}});
	var sceneRemoval = new ScrollScene({triggerElement:trigger,duration:300}).setTween(sceneRemovaltween).addTo(controller);	
}
	  
function basicScrollIn(section,controller,offsetVal){
	var sectionBlurb = section.find("div.blurb");
	var sectionHeader = section.find("div.headerText"); 

	var headerTopPosition = 0;
	var blurbTopPosition = "30%";
		
	var headerEntry = TweenMax.to(sectionHeader,2,{css:{position:"fixed",top:headerTopPosition,left:"0px",right:"0px",opacity:1}});
	var sceneHeader = new ScrollScene({triggerElement:section,duration:400,offset:offsetVal}).setTween(headerEntry).addTo(controller);	
	
	var blurbEntry = TweenMax.to(sectionBlurb,2,{css:{position:"fixed",top:blurbTopPosition,left:"0px",right:"0px",opacity:1},delay:0});
	var sceneBlurb = new ScrollScene({triggerElement:section,duration:400,offset:offsetVal}).setTween(blurbEntry).addTo(controller);	
}

function splashResize(){
    $("section").height(wHeight);
	
	elementOffset = $(window).height() - $('#splashTitle img').height();
    $("#splashTitle div").height(elementOffset/2);	
} 