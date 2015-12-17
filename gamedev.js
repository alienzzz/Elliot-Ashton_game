$( document ).ready(function() {

	$("#goRight1").click(function() {
		$("#exploreBody").css("background-image", "url('http://i1.kym-cdn.com/photos/images/newsfeed/000/033/197/slenderman.gif')");
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
		$("#exploreBody").css("background-image", "url('http://www.openlettersmonthly.com/issue/wp-content/uploads/2012/10/slenderwood.jpg')");
		$("#goRight-Straight2").hide();
		$("#goRight-Straight3").show();
	});

	$("#goRight-Straight3").click(function() {
		$("#exploreBody").css("background-image", "url('http://img06.deviantart.net/aa90/i/2013/131/b/2/slenderman_in_the_forest_by_shizuriiku-d64y5q9.jpg')");
		$("#goRight-Straight3").hide();
		$("#goRight-Right2").show();
	});

	$("#goRight-Right2").click(function() {
		$("#exploreBody").css("background-image", "url('http://img1.wikia.nocookie.net/__cb20110428131948/creepypasta/images/2/2a/Slender_forest.jpg')");
		$("#goRight-Right2").hide();
		$("#goBack").show();
	});


	$("#goLeft1").click(function() {
		$("#exploreBody").css("background-image", "url('http://pre07.deviantart.net/e87d/th/pre/i/2010/088/2/7/the_slender_man_by_kreatur_im_spiegel.jpg')");
		$("#goLeft1").hide();
		$("#goLeft2").show();
	});

	$("#goLeft-Straight1").click(function() {
		$("#exploreBody").css("background-image", "url('http://img13.deviantart.net/01ac/i/2012/324/c/5/slender_man_hunt_6_by_ray_kanen-d5lkond.jpg')");
		$("#goLeft2").hide();
		$("#goLeft3").show();
	});

	$("#goLeft-Straight2").click(function() {
		$("#exploreBody").css("background-image", "url('http://orig11.deviantart.net/c595/f/2013/213/6/2/slender_man_stalks__gif__by_redsoul77-d6g1k1m.gif ')");
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