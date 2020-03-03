window.onload = function() {
	//event listener
	function dragDown() {
		var subMenu       = this.lastElementChild;
		var parentWidth   = this.offsetWidth;
		subMenu.setAttribute("style","display:block; width: "+parentWidth+"px;");

	}
	function dragUp() {
		this.lastElementChild.setAttribute("style","display:none");
	}

	var slideMenuWrap = document.getElementsByClassName("slideMenuWrap");
	for(var i=0; i<slideMenuWrap.length; i++) {
		slideMenuWrap[i].addEventListener("mouseover", dragDown);
		slideMenuWrap[i].addEventListener("mouseout", dragUp);
	}

	

	//mainImage transition
	var interval = setInterval(moveImage,10);
	var imgWrap = document.getElementsByClassName("mainImageWrapper")[0];
	
	var right=0;
	var srcOrder = 0;
	var moveContent = imgWrap.firstElementChild;
	function moveImage() {
		if(right == 0) {
			var imgs = [...moveContent.children];
			for(var i=0; i<imgs.length; i++) {
				imgs[i].src = "../images/siba"+((srcOrder+i)%6)+".jpg";
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
			moveContent.style.right = right+"px";
			right = 0;
			return;
		}
		moveContent.style.right = right+"px";
		right+=2;
	}
}