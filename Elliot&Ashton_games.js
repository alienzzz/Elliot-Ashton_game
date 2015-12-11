$( document ).ready(function() {

	$("#campingJourney").click(function() {
		$("#exploreJourney").css("background-image", "url('http://pre04.deviantart.net/af06/th/pre/i/2013/216/b/8/creepy_road_by_obnoxiousnox-d6gp23a.jpg')");
		$("#goRight1").hide();
		$("#goBack").hide();
		$("#goRight-Straight1").show();
		$("#goRight-Right2").hide();
	});

	$("#goStraight1	").click(function() {
		$("#exploreJourney").css("background-image", "url('../video/scarytent')");
		$("#goRight-Straight1").hide();
		$("#goRight-Straight2").show();
	});

	$("#goLeft1").click(function() {
		$("#exploreBody").css("background-image", "url('../video/scarytent')");
		$("#goRight-Straight2").hide();
		$("#goRight-Straight3").show();
	});

	$("#goRight").click(function() {
		$("#exploreBody").css("background-image", "url('../img/slenderman+teddy.png')");
		$("#goRight-Straight3").hide();
		$("#goRight-Right2").show();
	});

	$("#goRight").click(function() {
		$("#exploreBody").css("background-image", "url('img/explore2-goBack2.jpg')");
		$("#goRight-Right2").hide();
		$("#goBack").show();
	});


	$("#goLeft1").click(function() {
		$("#exploreBody").css("background-image", "url('img/exploreLeft1.jpg')");
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
		$("#exploreBody").css("background-image", "url('img/exploreHome1.jpg')");
		$("#goBack").hide();
		$("#goRight1").show();
		$("#goLeft1").show();
	});



});