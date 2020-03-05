$(document).ready(function() {
	window.matchMedia("screen and (max-width:360px)");
	if(window.matchMedia("screen and (max-width:360px)").matches) {

	}
	else if(window.matchMedia("screen and (max-width:1024px)").matches) {

	}
	else {
		//event listener
		function dragDown() {
			$(this).children('ul').css(
				{"display":"block",
				 "width"  : $(this).outerWidth()+"px"});
		}
		function dragUp() {
			$(this).children('ul').css("display","none");
		}

		$('.slideMenuWrap').on("mouseover",dragDown).on("mouseout",dragUp);	

		//mainImage transition
		var interval = setInterval(moveImage,10);
		
		var right=0;
		var srcOrder = 0;
		var moveContent = $('.mainImageWrapper').children();
		function moveImage() {
			if(right == 0) {
				var imgs = [...moveContent.children()];
				for(var i=0; i<imgs.length; i++) {
					$(imgs[i]).attr("src","../images/siba"+((srcOrder+i)%6)+".jpg");
				}
				srcOrder = (srcOrder+2)%6;
			}
			if(right == 900) {
				clearInterval(interval);
				setTimeout(
					function() {
						interval = setInterval(moveImage,10);
						return interval;
					}, 3000);
				$(moveContent).css("right", right+"px");
				right = 0;
				return;
			}
			$(moveContent).css("right", right+"px");
			right+=2;
		}
	}
});