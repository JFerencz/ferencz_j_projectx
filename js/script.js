var controller;
var wHeight = $(window).outerHeight();
var wWidth = $(window).width();

$(window).load(function() {
	wHeight = $(window).outerHeight();
	wWidth = $(window).width();	
	splashResize();
	$("#loader").fadeOut();
});

$(document).ready(function($) {
	// init controller
	controller = new ScrollMagic();
	var splash =  $("#sectionOne");
	var wipeOut = TweenMax.to(splash,1.5,{opacity:"0"});
	var sceneOne = new ScrollScene({offset:10,duration:200});
	sceneOne.setTween(wipeOut).addTo(controller);
	
	var pin1 = new ScrollScene({triggerElement: "#sectionTwo",offset:0, triggerHook: 0,duration: 500,	reverse: true }).setPin("#sectionTwo .container-fluid"); 
	var pin2 = new ScrollScene({triggerElement: "#sectionThree",offset:0,triggerHook: 0, duration: 300,	reverse: true }).setPin("#sectionThree .container-fluid"); 
	var pin3 = new ScrollScene({triggerElement: "#sectionFour",offset: 0,triggerHook: 0, duration: 500,	reverse: true }).setPin("#sectionFour .container-fluid"); 
// 	var pin4 = new ScrollScene({triggerElement: "#sectionFive",offset: 0,triggerHook: 0, duration: 800,	reverse: true }).setPin("#sectionFive .container-fluid"); 
	
	

// Add Scenes to ScrollMagic Controller
controller.addScene([
  pin1,pin2,pin3
]);		



/* --- SECTION 2 --- */
	var sectionTwo = $("#sectionTwo");
	var sectionTwoObjects = $("#sectionTwo .headerText, #sectionTwo .blurb");
	
	console.log($(window).height()*2);
	
	basicScrollIn(sectionTwo,controller,-wHeight/3);	
		
/* --- SECTION 3 --- */
	var sectionThree = $("#sectionThree");
	var sectionThreeObjects = $("#sectionThree .headerText, #sectionThree .blurb");

	basicScrollOut(sectionTwoObjects,sectionThree,controller);
	basicScrollIn(sectionThree,controller,100);	
	
	
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
	var emphasisText = TweenMax.staggerTo("span.emphTxt", 0.5, {color:"#B1E4E3", ease:Back.easeIn}, 0.5);	
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

	var sceneRemovaltween = TweenMax.to(objects,1.5,{css:{opacity:0}});
	var sceneRemoval = new ScrollScene({triggerElement:trigger,duration:300}).setTween(sceneRemovaltween).addTo(controller);	

}
	  
function basicScrollIn(section,controller,offsetVal){


	var sectionBlurb = section.find("div.blurb");
	var sectionHeader = section.find("div.headerText"); 
	var sectionContainer = section.find("div.container-fluid"); 
	var headerTopPosition = 0;
	var blurbTopPosition = "30%";

	var headerEntry = TweenMax.from(sectionHeader,2,{css:{opacity:0}});
	var sceneHeader = new ScrollScene({triggerElement:section,duration:400,offset:offsetVal}).setTween(headerEntry).addTo(controller);	
	
	var blurbEntry = TweenMax.from(sectionBlurb,2,{css:{opacity:0}});
	var sceneBlurb = new ScrollScene({triggerElement:section,duration:400,offset:offsetVal}).setTween(blurbEntry).addTo(controller);	


}

function splashResize(){
    $("section").height(wHeight);
	
	elementOffset = $(window).height() - $('#splashTitle img').height();
    $("#splashTitle div").height(elementOffset/2);	
} 