var Pages = [-1, 0, 1, 2, 3];
$(function() {
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