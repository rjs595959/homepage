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
	function() {
		var right=0;
		function moveImage() {
			if(right%900==0 && right!=1800) {
				clearInterval(interval);
				setTimeout(function() {
					interval = setInterval(moveImage,10)},3000);
				right+=2;
				return;
			}
			if(right == 1800) {
				right = 0;
				clearInterval(interval);
				setTimeout(function() {
					interval = setInterval(moveImage,10)},3000);
				return;
			}

			right+=2;
			imageWrap.setAttribute("style","right:"+right+"px;");
		}
	}

	var imageWrap = document.getElementsByClassName("mainImageWrapper")[0];
	var interval = setInterval(moveImage,10);
}