$( document ).ready(function() {

	$("#campingJourney").click(function() {
		$("#exploreJourney").css("background-image", "url('http://vignette4.wikia.nocookie.net/have-fun/images/1/11/The_dark_creepy_sowy_road.jpg/revision/latest?cb=20130425220158')");
		$("#goRight1").hide();
		$("#goBack").hide();
		$("#goRight-Straight1").show();
		$("#goRight-Right2").hide();
	});

	$("#goStraight1	").click(function() {
		$("#exploreJourney").css("background-image", "url('http://bicycletouringpro.com/blog/wp-content/uploads/2014/04/scary.jpg-588x392.jpg')");
		$("#goRight-Straight1").hide();
		$("#goRight-Straight2").show();
	});

	$("#goLeft1").click(function() {
		$("#exploreBody").css("background-image", "url('http://bicycletouringpro.com/blog/wp-content/uploads/2014/04/scary.jpg-588x392.jpg')");
		$("#goRight-Straight2").hide();
		$("#goRight-Straight3").show();
	});

	$("#goRight").click(function() {
		$("#exploreBody").css("background-image", "url('../img/slenderman+teddy.png')");
		$("#goRight-Straight3").hide();
		$("#goRight-Right2").show();
	});

	$("#goRight").click(function() {
		$("#exploreBody").css("background-image", "url('http://bicycletouringpro.com/blog/wp-content/uploads/2014/04/scary.jpg-588x392.jpg')");
		$("#goRight-Right2").hide();
		$("#goBack").show();
	});


	$("#goLeft1").click(function() {
		$("#exploreBody").css("background-image", "url('http://bicycletouringpro.com/blog/wp-content/uploads/2014/04/scary.jpg-588x392.jpg')");
		$("#goLeft1").hide();
		$("#goLeft2").show();
	});

	$("#goLeft-Straight1").click(function() {
		$("#exploreBody").css("background-image", "url('http://bicycletouringpro.com/blog/wp-content/uploads/2014/04/scary.jpg-588x392.jpg')");
		$("#goLeft2").hide();
		$("#goLeft3").show();
	});

	$("#goLeft-Straight2").click(function() {
		$("#exploreBody").css("background-image", "url('http://bicycletouringpro.com/blog/wp-content/uploads/2014/04/scary.jpg-588x392.jpg')");
		$("#goLeft3").hide();
		$("#goBack").show();
	});


	$("#goBack").click(function() {
		$("#exploreBody").css("background-image", "url('http://bicycletouringpro.com/blog/wp-content/uploads/2014/04/scary.jpg-588x392.jpg')");
		$("#goBack").hide();
		$("#goRight1").show();
		$("#goLeft1").show();
	});



});