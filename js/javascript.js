var Pages = [-1, 0, 1, 2, 3];

$(function() {
	/*Carousel*/
	var images = [ "img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"];
	var length = images.length - 1;
	var current = 0;
	$(".wrapper img").attr('src', "img/" + images[current]);

	$(".fa-chevron-right").on("click", function() {
		current = current + 1;
		$(".wrapper img").attr('src', "img/" + images[current]);

		if( current > length){
			current = 0;
			$(".wrapper img").attr('src', "img/" + images[current]);
		} 
		
	});


	$(".fa-chevron-left").on("click", function() {
		if( current == 0 ){
			current = length;
			$(".wrapper img").attr('src', "img/" + images[current]);
		} else {
			current = current - 1;
			$(".wrapper img").attr('src', "img/" + images[current]);

		}
		
	});

	/* Navigation */

	$(".fa-bars").on("click", function() {
		$(".dropdown").toggle(".d-none");
	});


	$(window).resize(function() {
	  	if($(window).width() < 650){
			$(".collapse").addClass("d-none");
			$(".collapsed").removeClass("d-none");
		}else {
			$(".collapse").removeClass("d-none");
			$(".collapsed").addClass("d-none");
		}
	});

	/*Tab panels*/
	var text = $(".tab-text p");

	$(".flex-tab a").on('click', function() {
		$(".flex-tab a").removeClass('active');
		$(".tab-text p").addClass('d-none');

		for(var i = 0; i < text.length; i++){
			if( $(this).attr('href') == ( "#" + $(text[i]).attr('id')) ) {
				$(this).addClass('active');
				$(text[i]).removeClass("d-none");
			}
		}
	});

	/*Accordion */
	var accordText = $(".accord-text");
	$(".accordion a").on("click", function() {
		$(".accord-text").addClass("d-none");
		$(".accordion a").removeClass("a-acc-tab");
		$(this).addClass("a-acc-tab");
		var attrAccord = $(this).attr("href");
		$(attrAccord).removeClass("d-none");
	});

	/*Dropdown button*/
	$(".dropdown-btn a").on('click', function() {
		$(".dropdown-text").toggle();
	});


	/*Modal*/
	setTimeout(function(){
	  modal();
	}, 1000);

	function modal(){
		$(".modal").removeClass("d-none");
	  	$(".css-compon").addClass("modal-bg");
	  	$(".submit-btn").on("click", function() {
	  		var email  = $("#email").val();
	  		var name  = $("#name").val();
	  		checkEmail(email);
	  		checkName(name);
	  	});
	}

	$(".modal-btn").on('click', function() {
		$(".modal").addClass("d-none");
		$(".css-compon").removeClass("modal-bg");
	});

	function checkEmail(x) {
		if(x == 0){
			$("#email-message").text("Dont leave it empty");
		} else {
			validate(x);
		}
	}

	function checkName(y) {
		if(y == 0){
			$("#name-message").text("Dont leave it empty");
		} else {
			$("#name-message").text("Valid!");
		}
	}

	function validate(x) {
		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		if(!emailReg.test(x)) {
	        $("#email-message").text("Not valid input");
	       
	    } else {
	    	$("#email-message").text("Valid");
	    	messageSucces();
	    }
	}

	function messageSucces(){
		$(".modal-header").addClass('d-none');
		$(".modal-body").addClass('d-none');
		$(".success").removeClass('d-none');
	}

	function messageError(){
		$(".modal-header").addClass('d-none');
		$(".modal-body").addClass('d-none');
		$(".error").removeClass('d-none');
	}

	/*Popover*/
	$(".popover button").on('click', function() {
		$(".pop-text").toggle();
	});

	/*Scrollspy*/
	//scroll on click
	$(".scroll-nav a").on('click', function(e) {
		var attr = $(this).attr("data-href");
		var pos = $(attr).offset().top;
		var navHeight = $(".scroll-nav").innerHeight();
		var sum = pos - navHeight;
		//animate onclick
		$("html, body").animate({
	      scrollTop: sum
	    }, 1000, "swing" );
	    e.preventDefault();
	});

	$(window).on('scroll', function() {
		var navHeight = $(".scroll-nav").outerHeight();
		var scrollie = $(window).scrollTop() + navHeight + 1;
		var rows = $(".scroll-body .row");
		for(var i = 0; i < rows.length;  i++){
			console.log(i);
			var startPos = $(rows[i]).offset().top;
			var rowHeight = $(rows[i]).innerHeight();
			var endPos = startPos + rowHeight;
			if( (endPos >= scrollie) && (scrollie >= startPos) ) {
				var currentAttr = $(rows[i]).attr("id");
				currentAttr = "#" + currentAttr; 
				$(".scroll-nav a").removeClass("active-scroll");
				$("a[data-href =" + "'" + currentAttr + "'" + "]").addClass("active-scroll");
			}
		}	
	});

	/*Pagination*/
	/*var paginationData = ["Text1", "Text2", "Text3", "Text4", "Text5", "Text6"];
	var currentPag = 0;
	$("#demo").text(paginationData[currentPag]);
	$(".pagination li a").on("click", function() {
		var textPag = $(this).text();
		if( $.isNumeric( textPag ) ) {
			$(".pagination li a").removeClass("active-pg");
			$(this).addClass("active-pg");
			checkNumber(textPag);
		}else{
			checkString(textPag);
		}*/

		//checking number
		/*function checkNumber(x) {
			var iNum = parseInt(x);
			if(iNum == 0){
				alert("nothin");
			}else if(iNum > 0 && iNum < paginationData.length) {
				currentPag = iNum - 1;
				$("#demo").text(paginationData[currentPag]);
				console.log(currentPag);
			}
		}
*/
		//checking string
		/*function checkString(x) {
			if(x == "Previous") {
				
				if(currentPag == 0) {
					//do nothing
					$("#demo").text("No info!");
					console.log("We do nothing!");
				}else {
					currentPag = currentPag - 1;
					$("#demo").text(paginationData[currentPag]);
					
					console.log(currentPag);
				}
			}else if(x == "Next") {
				//console.log(x + " is next");
				if(currentPag >= paginationData.length){
					$("#demo").text("No info!");
					console.log("We do nothing!");
				} else{
					currentPag = currentPag + 1;
					$("#demo").text(paginationData[currentPag]);
					console.log(currentPag);
				}
			}
		}
	});*/

	/*Another aproach to building a pagination*/
	var offsetMap = {
		"back": -1, 
		"prevprev": -2, 
		"prev": -1, 
		"cur": 0, 
		"next": 1, 
		"nextnext": 2, 
		"forward": 1
	}

	var min = 0;
	var Ids = ["#prevprev", "#prev", "#cur", "#next", "#nextnext"];
	var currentPage = 2;
	var max = getMaxPages();

	displayPages();

	function getMaxPages() {
		return 10;
	}

	$(".pg").on('click', function() {
		var id = $(this).attr("id");
		var action = offsetMap[id];
		applyAction(action);
		displayPages(action);
	});

	function displayPages(action) {
		fixDomElements();
		for(var i = 0; i < Ids.length; i++) {
			if(Pages[i] > 0 && Pages[i] <= max) {
				$(Ids[i]).text(Pages[i]);
				$(Ids[i]).show();
			} else {
				$(Ids[i]).hide();
				if(i == currentPage) {
					// Update current
					currentPage = currentPage + action;
				}
			}
		}
	}

	function fixDomElements(){
		if(Pages[min] === -1) {
			$("#back").hide();
		} else {
			$("#back").show();
		}

		if(Pages[2] === max) {
			$("#forward").hide();
		} else {
			$("#forward").show();
		}

		$(".pg").removeClass("active-pg2");
		$(Ids[currentPage]).addClass("active-pg2");
	}

	function applyAction(action) {
		// check if action is valid
		for(var i = 0; i < Pages.length; i++) {
			Pages[i] = Pages[i] + action;
		}
	}

});   
