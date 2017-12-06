
	
//creating an object for surf-carousel for the further use
function ContentDTO(images, titles, ratings, prices, description, features, dimensions, stars) {
	this.images= images;
	this.titles=titles;
	this.ratings=ratings; 
	this.prices=prices; 
	this.description= description;
	this.features= features; 
	this.dimensions = dimensions; 
	this.stars =stars;
}

/* Navigation */
app.controller('collapseCtrl', function($scope, ) {
	$("#iconBar").on("click", function() {
		$(".dropdown").toggle();
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
});





/*Pagination*/
/*app.controller('pagination2Ctrl', function($scope, ) {
	var Pages = [-1, 0, 1, 2, 3];
	$(function() {*/
	/*Another aproach to building a pagination*/
		/*var offsetMap = {
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
		function applyAction(action) {*/
			// check if action is valid
			/*for(var i = 0; i < Pages.length; i++) {
				Pages[i] = Pages[i] + action;
			}
		}
	});
});*/

/*Progress bar*/
app.controller('progressCtrl', function($scope, ) {
	console.log("Progress bar is in a process of developing!");
});


/*Top*/
app.controller('topCtrl', function($scope, ) {
	/*scroll-top button*/
	var scrollTopButton = $(".scroll-top");
	$(window).scroll(function() {
		var scrollTopPosition = $(this).scrollTop();
		if(scrollTopPosition > 400){
			$(scrollTopButton).removeClass("d-none");
		} else {
			$(scrollTopButton).addClass("d-none");
		}
	}); 
	//scroll up on click
	$(scrollTopButton).on('click', function() {
		//animate onclick
		$("html, body").animate({
	      scrollTop: 0
	    }, 1000, "swing" );
	});
});

/*Home Page - SIDE NAV*/
/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
