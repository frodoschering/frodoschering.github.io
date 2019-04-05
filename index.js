
$(document).ready(function() {
	// Create array with all elements of the logo
	elements = [];
	var i = 0;
	page = "home";
	logoScattered = true;
	rotatingLetters = true;

	$('#logo-big *').each(function(){
		i++;
		elements[i] = this;		
	})

	colorSchemes = [
		["#160827", "#620A2A", "#EE0023", "#9C0428"],
		["#041B74", "#1882FF", "#06FCFF", "#09ABE8"],
		["#741707", "#FF4D00", "#FF0E0D", "#E86E0C"]
	];

	function getNumber() {
	    var min = 0,
	        max = colorSchemes.length,
	        random;

	    do {
	        random = Math.floor(Math.random() * (max - min)) + min;
	    } while (random === getNumber.last);
	    getNumber.last = random;
	    return random;
	};

	// Get the svg bounding box and calculate svg to brower window factor ! Need to check as using 2nd element??!
	bbox = elements[2].getBoundingClientRect();
	var factorY = window.innerWidth/bbox.width;
	var factorX = window.innerHeight/bbox.height;

	// Move logo elements across screen
	TweenMax.set( elements[1], {xPercent: 7 * factorY , yPercent: 42 * factorX});
	TweenMax.set( elements[2], {xPercent: 20 * factorY , yPercent: -30 * factorX});
	TweenMax.set( elements[3], {xPercent: -10 * factorY , yPercent: 20 * factorX});
	TweenMax.set( elements[4], {xPercent: 20 * factorY , yPercent: 45 * factorX});
	TweenMax.set( elements[5], {xPercent: -10 * factorY , yPercent: -25 * factorX});
	TweenMax.set( elements[6], {xPercent: 50 * factorY , yPercent: -45 * factorX});
	TweenMax.set( elements[7], {xPercent: 5 * factorY , yPercent: 50 * factorX});
	TweenMax.set( elements[8], {xPercent: -5 * factorY , yPercent: 5 * factorX});
	TweenMax.set( elements[9], {xPercent: -15 * factorY , yPercent: -55 * factorX});
	TweenMax.set( elements[10], {xPercent: -7 * factorY , yPercent: -15 * factorX});
	TweenMax.set( elements[11], {xPercent: 12 * factorY , yPercent: 30 * factorX});
	TweenMax.set( elements[12], {xPercent: 2 * factorY , yPercent: 20 * factorX});
	TweenMax.set( elements[13], {xPercent: -10 * factorY , yPercent: -60 * factorX});
	TweenMax.set( elements[14], {xPercent: -18 * factorY , yPercent: 30 * factorX});
	TweenMax.set( elements[15], {xPercent: 1 * factorY , yPercent: 20 * factorX});



	// Create rotating timelines for loading
	timelines = [];

	for (i = 1; i < elements.length; i++) {
		rotationDirections = ["360_cw","360_ccw"];
		randomDirection = Math.floor(Math.random()*rotationDirections.length);
		timelines[i] = new TimelineMax({repeat: -1});
		timelines[i].to(elements[i], 60, {
			directionalRotation: rotationDirections[randomDirection],
			ease:Linear.easeNone,
			transformOrigin: "50%, 50%"
		});

		timelines[i].pause();
	}



	// Rotate logo elements every second
	k = 0;

	function rotateLetters() {
		k++;
		rotatingLetters = true;
		for (i = 1; i < timelines.length; i++) {
			timelines[i].progress(0.125* k);
		}
		
		// simulate page loading for now
		if(k==3){	
			randomNumber = getNumber();	
			changeColor(colorSchemes[randomNumber][0], colorSchemes[randomNumber][1], colorSchemes[randomNumber][2], colorSchemes[randomNumber][3]);
			formLogo();	
			rotatingLetters = false;
		}
	};

	// Interval manager to create second interval for rotating letters
	var intervalID = null;

	function intervalManager(flag, rotateLetters, time) {
	   if(flag)
	     intervalID =  setInterval(rotateLetters, time);
	   else
	     clearInterval(intervalID);
	}

	intervalManager(true, rotateLetters, 1000);

	// Animation to form the logo after loading
	function formLogo(){
		intervalManager(false);
			
		for (i = 1; i < elements.length; i++) {
			TweenMax.to(elements[i], 1, {xPercent: 0, yPercent: 0, directionalRotation:0, onComplete: setLogoScattered});
			TweenMax.to("header", 0.5, {opacity: 1, delay: 1});
			TweenMax.to("#introduction-text", 0.5, {opacity: 1, delay: 1});
		}

		function setLogoScattered (){
			logoScattered = false;
		}
	}

	//set log to formed position without tweening
	function setLogo(){
		for (i = 1; i < elements.length; i++) {
			TweenMax.set(elements[i], {xPercent: 0, yPercent: 0, directionalRotation:0});
		}
	}

	// Animation to scatter the logo for contact page
	function scatterLogo(){
		
		
		TweenMax.to( elements[1], 1, {xPercent: 7 * factorY , yPercent: 42 * factorX});
		TweenMax.to( elements[2], 1, {xPercent: 20 * factorY , yPercent: -30 * factorX});
		TweenMax.to( elements[3], 1, {xPercent: -10 * factorY , yPercent: 20 * factorX});
		TweenMax.to( elements[4], 1, {xPercent: 20 * factorY , yPercent: 45 * factorX});
		TweenMax.to( elements[5], 1, {xPercent: -10 * factorY , yPercent: -25 * factorX});
		TweenMax.to( elements[6], 1, {xPercent: 50 * factorY , yPercent: -45 * factorX});
		TweenMax.to( elements[7], 1, {xPercent: 5 * factorY , yPercent: 50 * factorX});
		TweenMax.to( elements[8], 1, {xPercent: -5 * factorY , yPercent: 5 * factorX});
		TweenMax.to( elements[9], 1, {xPercent: -15 * factorY , yPercent: -55 * factorX});
		TweenMax.to( elements[10], 1, {xPercent: -7 * factorY , yPercent: -15 * factorX});
		TweenMax.to( elements[11], 1, {xPercent: 12 * factorY , yPercent: 30 * factorX});
		TweenMax.to( elements[12], 1, {xPercent: 2 * factorY , yPercent: 20 * factorX});
		TweenMax.to( elements[13], 1, {xPercent: -10 * factorY , yPercent: -60 * factorX});
		TweenMax.to( elements[14], 1, {xPercent: -18 * factorY , yPercent: 30 * factorX});
		TweenMax.to( elements[15], 1, {xPercent: 1 * factorY , yPercent: 20 * factorX});
		TweenMax.to("#logo-big", 1, {
	      transform: 'rotate3d(0, 0, 0, 0deg)',
	      ease: Power2.easeOut
	    });		
		logoScattered = true;
	}

	// Change background and logo colors
	function changeColor(bgColor, color1, color2, color3){
		TweenMax.to("#background", 0.5, {backgroundColor: bgColor});
		TweenMax.to(".color1", 0.5, {fill: color1});
		TweenMax.to(".color2", 0.5, {fill: color2});
		TweenMax.to(".color3", 0.5, {fill: color3});
	}

	// Go to homepage
	$("#logo").on('click', function() {
		
		changeColor(colorSchemes[randomNumber][0], colorSchemes[randomNumber][1], colorSchemes[randomNumber][2], colorSchemes[randomNumber][3]);
			
		if(logoScattered){
			formLogo();
		}

		TweenMax.to("#email-address", 0.5, {autoAlpha: 0});
		TweenMax.to("#logo-container", 0.5, {autoAlpha: 1});
		TweenMax.to("#current-content", 0.5, {autoAlpha: 0});	
		TweenMax.to("#content", 1, {autoAlpha: 0, onComplete: switchContentDivs});
		TweenMax.to("#introduction-text", 1, {autoAlpha: 1});
		//changeColor("#741707", "#FF4D00", "#FF0E0D", "#E86E0C");		
		page = "home";	
		$("content").css("display", "none");
	})

	// Go to about page
	$("#about").on('click', function() {
		page = "about";
		$('#content').load('about.html', function(){		
			changeColor("#000", "#464A4F", "#1E2124", "#323539");
			TweenMax.to("#email-address", 0.5, {autoAlpha: 0});
			TweenMax.to("#introduction-text", 0.5, {autoAlpha: 0});
			TweenMax.to("#logo-container", 0.5, {autoAlpha: 0});
			TweenMax.to("#current-content", 0.5, {autoAlpha: 0});		
			TweenMax.to("#content", 1, {autoAlpha: 1, onComplete: switchContentDivs});		
		})	
		
	})	

	// Go to work page
	$("#work").on('click', function() {
		page = "work";
		$('#content').load('work.html', function(){
			changeColor("#000", "#464A4F", "#1E2124", "#323539");	
			TweenMax.to("#email-address", 0.5, {autoAlpha: 0});		
			TweenMax.to("#introduction-text", 0.5, {autoAlpha: 0});		
			TweenMax.to("#logo-container", 0.5, {autoAlpha: 0});
			TweenMax.to("#current-content", 0.5, {autoAlpha: 0});
			TweenMax.to("#content", 1, {autoAlpha: 1, onComplete: switchContentDivs});				
		})		
	})

	// Go to contact page
	$("#contact").on('click', function() {
		

		
			changeColor(colorSchemes[randomNumber][0], colorSchemes[randomNumber][1], colorSchemes[randomNumber][2], colorSchemes[randomNumber][3]);	
			TweenMax.to("#email-address", 0.5, {autoAlpha: 1});		
			TweenMax.to("#introduction-text", 0.5, {autoAlpha: 0});		
			TweenMax.to("#logo-container", 0.5, {autoAlpha: 1});
			TweenMax.to("#current-content", 0.5, {autoAlpha: 0});
			TweenMax.to("#content", 1, {autoAlpha: 0, onComplete: switchContentDivs});	
			scatterLogo();
			page = "contact";
	

		
	})

	function switchContentDivs(){
		var currentContent = document.getElementById('current-content');
		var content = document.getElementById('content');
		currentContent.id = 'content';
		content.id = 'current-content';
		$('#content *').remove();
	}

	//Change logo and background colors when background is clicked
	$('#background').click(function() {
		randomNumber = getNumber();
		
		changeColor(colorSchemes[randomNumber][0], colorSchemes[randomNumber][1], colorSchemes[randomNumber][2], colorSchemes[randomNumber][3]);
		
	});




	// Logo follows mouse movement
	var request = null;
	var mouse = {
	x: 0,
	y: 0
	};
	var cx = window.innerWidth / 2;
	var cy = window.innerHeight / 2;
	playmode = true;

	$('body').mousemove(function(event) {

		if(logoScattered == false){

	    mouse.x = event.pageX;
	    mouse.y = event.pageY;

	    cancelAnimationFrame(request);
	    request = requestAnimationFrame(update);
	}
	});

	function update() {
		if(logoScattered == false){
	    dx = mouse.x - cx;
	    dy = mouse.y - cy;

	    tiltx = (dy / cy);
	    tilty = -(dx / cx);
	    radius = Math.sqrt(Math.pow(tiltx, 2) + Math.pow(tilty, 2));
	    degree = (radius * 60);
	    TweenLite.to("#logo-big", 1, {
	      transform: 'rotate3d(' + tiltx + ', ' + tilty + ', 0, ' + degree + 'deg)',
	      ease: Power2.easeOut
	    });
	}
	  }

	$(window).resize(function() {
		cx = window.innerWidth / 2;
		cy = window.innerHeight / 2;
	});

/*
if (window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", function(event) {
        // alpha: rotation around z-axis
        var rotateDegrees = event.alpha;
        // gamma: left to right
        var leftToRight = event.gamma;
        // beta: front back motion
        var frontToBack = event.beta;

        handleOrientationEvent(frontToBack, leftToRight, rotateDegrees);
    }, true);
}

var handleOrientationEvent = function(frontToBack, leftToRight, rotateDegrees) {
   TweenLite.to("#logo-big", 1, {
	      transform: 'rotate3d(' + leftToRight + ', ' + frontToBack + ', 0, ' + rotateDegrees + 'deg)',
	      ease: Power2.easeOut
	    });
};
*/

	//setup a variable to store our last position
var last_position = {},
$output       = $('#output');

//note that `.on()` is new in jQuery 1.7 and is the same as `.bind()` in this case
$(document).on('mousemove', function (event) {

    //check to make sure there is data to compare against
    if (typeof(last_position.x) != 'undefined') {

        //get the change from last position to this position
        var deltaX = last_position.x - event.clientX,
            deltaY = last_position.y - event.clientY;

        //check which direction had the highest amplitude and then figure out direction by checking if the value is greater or less than zero
        if (Math.abs(deltaX) > Math.abs(deltaY) && deltaX > 0) {
            //left
            xDirection = "left";
        } else if (Math.abs(deltaX) > Math.abs(deltaY) && deltaX < 0) {
            //right
        
            xDirection = "right";
        } else if (Math.abs(deltaY) > Math.abs(deltaX) && deltaY > 0) {
            //up
          
            yDirection = "up";
        } else if (Math.abs(deltaY) > Math.abs(deltaX) && deltaY < 0) {
            //down     
            yDirection = "down";
        }
    }

    //set the new last position to the current for next time
    last_position = {
        x : event.clientX,
        y : event.clientY
    };
});
	
	var timestamp = 0;
	var mY = 0;
	$(document).mousemove(function(e) {
	    var now = Date.now();
	    currentmY = e.screenY;  
		
		var dt = now - timestamp;
	    var distance = Math.abs(currentmY - mY);
	    if(distance != 0){
	    	speed = Math.round(distance / dt * 1000);
	    }
	  console.log(dt, distance, speed);
	  	    
	    mY = currentmY;
	    timestamp = now;
	});

	$('#logo-big path').each(function(){

		/*

		Draggable.create(this,{
  type:'y',
  lockAxis : true ,
  trigger:$("#stage"),
  onDragEnd:function(){
   TweenMax.to( this, 1, {xPercent: "+=100",  yPercent: "+=100", ease:Power2.easeOut, rotation: rotate, onComplete: resetLogo});
  }
});*/

		this.onmouseover = function(){
			value = speed / 15;
		
			if(rotatingLetters == false){
				if(logoScattered == false ){
					if(xDirection == "right"){
						valueX = value;
						rotate = value
					}
					if(xDirection == "left"){
						valueX = -value;
						rotate = -value;
					}
					if(yDirection == "up"){
						valueY = -value;
						rotate = -value;
					}
					if(yDirection == "down"){
						valueY = value;
						rotate = value;
					}

					console.log(valueX);
					console.log(valueY);

					TweenMax.to( this, 1, {xPercent: valueX,  yPercent: valueY, ease:Power2.easeOut, rotation: rotate, onComplete: resetLogo});
					

				
				}else{
					if(xDirection == "right"){
						TweenMax.to( this, 1, {rotation: value+10});
					}

					if(xDirection == "left"){
						TweenMax.to( this, 1, {rotation: -value-10});
					}

					if(yDirection == "up"){
						TweenMax.to( this, 1, {rotation: value+10});
					}

					if(yDirection == "down"){
						TweenMax.to( this, 1, {rotation: -value-10});
					}
				}		
			}
		}

		/*
		this.onclick = function(){
			TweenMax.to( this, 1, {scale:0.5, ease:Power2.easeOut, onComplete: resetLogo, rotation:360});
		}
	*/
		
	})
	
	resetLogo = function(){
	
		if(logoScattered == false){
			TweenMax.to( this.target, 2, {scale:1,ease:Power2.easeIn, xPercent: "0", yPercent: "0", directionalRotation:"0"});
		}		
	}

})