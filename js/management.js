window.onload = function() {
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
}