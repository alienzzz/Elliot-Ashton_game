$( document ).ready(function() {

	$("#goRight1").click(function() {
		$("#exploreBody").css("background-image", "url('http://bicycletouringpro.com/blog/wp-content/uploads/2014/04/scary.jpg-588x392.jpg-588x392')");
		$("#goRight1").hide();
		$("#goBack").hide();
		$("#goRight-Straight1").show();
		$("#goRight-Right2").show();
	});

	$("#goRight-Straight1").click(function() {
		$("#exploreBody").css("background-image", "url('http://www.arcade-games-web.com/slender_game/sightings/Slender_Man_Sighting_059.jpg')");
		$("#goRight-Straight1").hide();
		$("#goRight-Straight2").show();
	});

	$("#goRight-Straight2").click(function() {
		$("#exploreBody").css("background-image", "url('')");
		$("#goRight-Straight2").hide();
		$("#goRight-Straight3").show();
	});

	$("#goRight-Straight3").click(function() {
		$("#exploreBody").css("background-image", "url('')");
		$("#goRight-Straight3").hide();
		$("#goRight-Right2").show();
	});

	$("#goRight-Right2").click(function() {
		$("#exploreBody").css("background-image", "url('http://img1.wikia.nocookie.net/__cb20110428131948/creepypasta/images/2/2a/Slender_forest.jpg')");
		$("#goRight-Right2").hide();
		$("#goBack").show();
	});


	$("#goLeft1").click(function() {
		$("#exploreBody").css("background-image", "url('http://bicycletouringpro.com/blog/wp-content/uploads/2014/04/scary.jpg-588x392.jpg')");
		$("#goLeft1").hide();
		$("#goLeft2").show();
	});

	$("#goLeft-Straight1").click(function() {
		$("#exploreBody").css("background-image", "url('img/exploreLeft2.jpg')");
		$("#goLeft2").hide();
		$("#goLeft3").show();
	});

	$("#goLeft-Straight2").click(function() {
		$("#exploreBody").css("background-image", "url('img/exploreLeft3.jpg')");
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