var controller;
var wHeight = $(window).height();
var wWidth = $(window).width();

$(window).load(function() {
    $("section").height(wHeight-10);
	splashResize();
});

$(document).ready(function($) {
	// init controller
	controller = new ScrollMagic();
	var splash =  $("#sectionOne");
	var wipeOut = TweenMax.to(splash,1.5,{opacity:"0"});
	var sceneOne = new ScrollScene({duration:200});
	sceneOne.setTween(wipeOut).addTo(controller);
	

/* --- SECTION 2 --- */
	var sectionTwoHeader = $("#sectionTwo .headerText");
	var sectionTwoBlurb = $("#sectionTwo .blurb");
	
	var sectionTwoObjects = $("#sectionTwo .headerText, #sectionTwo .blurb");
	
	var headerEntry = TweenMax.to(sectionTwoHeader,1.5,{css:{position:"fixed",top:"50px",left:"0px",right:"0px",opacity:1}});
	var sceneTwoHeader = new ScrollScene({triggerElement:"#sectionTwo",offset:-wHeight/4,duration:200});	
	sceneTwoHeader.setTween(headerEntry).addTo(controller);	
	
	var blurbEntry = TweenMax.to(sectionTwoBlurb,1.5,{css:{position:"fixed",top:"30%",left:"0px",right:"0px",opacity:1}});
	var sceneTwoHeader = new ScrollScene({triggerElement:"#sectionTwo",offset:-wHeight/5,duration:200});	
	sceneTwoHeader.setTween(blurbEntry).addTo(controller);	
	var sceneTwoBlurb = new ScrollScene({triggerElement:"#sectionTwo",offset:-wHeight/4,duration:200});

	
		
/* --- SECTION 3 --- */
	var sceneTwoRemovaltween = TweenMax.to(sectionTwoObjects,1.5,{css:{opacity:0,top:-100}});
	var sceneTwoRemoval = new ScrollScene({triggerElement:"#sectionThree",offset:-wHeight/4,duration:200});	
	
// 	var sceneThreeBG = TweenMax.to("body",0.5,{css:{"background-image":"url(./image/watercolour_bg_2b.jpg)"}})
	sceneTwoRemoval.setTween(sceneTwoRemovaltween).addTo(controller);	
	$(window).resize(function() {
		splashResize();
    });
    
    
    
/* --- SECTION 4 --- */
	var sectionFourHeader = $("#sectionFour .headerText");
	var sectionFourBlurb = $("#sectionFour .blurb");
	
	var sectionFourObjects = $("#sectionFour .headerText, #sectionFour .blurb");
	
	var headerEntry = TweenMax.to(sectionFourHeader,1.5,{css:{position:"fixed",top:"50px",left:"0px",right:"0px",opacity:1}});
	var sceneFourHeader = new ScrollScene({triggerElement:"#sectionFour",offset:-wHeight/4,duration:200});	
	sceneFourHeader.setTween(headerEntry).addTo(controller);	
	
	var blurbEntry = TweenMax.to(sectionFourBlurb,1.5,{css:{position:"fixed",top:"30%",left:"0px",right:"0px",opacity:1}});
	var sceneFourHeader = new ScrollScene({triggerElement:"#sectionFour",offset:-wHeight/5,duration:200});	
	sceneFourHeader.setTween(blurbEntry).addTo(controller);	
	var sceneFourBlurb = new ScrollScene({triggerElement:"#sectionFour",offset:-wHeight/4,duration:200});

	var sceneFourEmphText = new ScrollScene({triggerElement:"#sectionFour",offset:-wHeight/4+250});
	var emphasisText = TweenMax.staggerTo("span.emphTxt", 0.5, {color:"#004851", ease:Back.easeIn}, 0.5);
	sceneFourEmphText.setTween(emphasisText).addTo(controller);	
	
	var sceneFourEmphImg  = new ScrollScene({triggerElement:"#sectionFour",offset:-wHeight/4+250});
	var emphasisImg = TweenMax.staggerTo(".emph", 0.5, {opacity:"1", ease:Back.easeIn}, 0.5);
	sceneFourEmphImg.setTween(emphasisImg).addTo(controller);	
	  

	
});
function splashResize(){
	elementOffset = $(window).height() - $('#splashTitle img').height();
    console.log(elementOffset);
    $("#splashTitle div").height(elementOffset/2);	
} 