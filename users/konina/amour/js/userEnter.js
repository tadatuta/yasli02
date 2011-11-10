addEvent(window, "load", userEnter);

function userEnter() {
	var enter = document.getElementById("enter");
	addEvent(enter, "click", showEnter);
			
	var form = document.getElementsByName('user_enter')[0];
	
	var inputArr = form.getElementsByTagName('INPUT');
	for(var i=0; i< inputArr.length; i++){
		if(inputArr[i].type == "reset"){
			inputArr[i].onclick = hideEnter;
		}
	}
	function showEnter() {	
		form.style.display = "block";
	}
	function hideEnter() {
		form.style.display = "none";
	}
		
	
}

function addEvent(elem, type, handler){
	  if (elem.addEventListener){
	    elem.addEventListener(type, handler, false);
	  } else {
	    elem.attachEvent("on"+type, handler);
	  }
}

