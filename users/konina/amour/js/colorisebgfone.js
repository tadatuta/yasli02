addEvent(window,"load", coloriseBgFone);

function addEvent(elem, type, handler){
	  if (elem.addEventListener){
	    elem.addEventListener(type, handler, false);
	  } else {
	    elem.attachEvent("on"+type, handler);
	  }
};

function coloriseBgFone(){
	var html = document.getElementsByTagName('HTML')[0];
	var classHtml = html.className;
	var testClass = classHtml.split(/\s+/);
	for (var j=0; j<testClass.length; j++){
		if(testClass[j] == "csstransitions" ) 
				colorise(); 
		if(testClass[j] == "no-csstransitions") 
			break;
	}
	function colorise(){
		var colorArr = [[204,102,153],[255,102,153],[255,51,102],[204,51,102]];
	
		var body = document.getElementsByTagName('body')[0];

		var i = 0;
		
		setInterval(function () {
						if( i != colorArr.length){
					
							body.style.backgroundColor = "rgba(" +colorArr[i][0]+ ',' +colorArr[i][1]+ ',' +colorArr[i][2]+ ",0.1)";
							
							i++;
						} else{
							i = 0;
							
							body.style.backgroundColor = "rgba(" +colorArr[i][0]+ ',' +colorArr[i][1]+ ',' +colorArr[i][2]+ ",0.1)";
							
							i++;
						}
		
					}, 5000);	
		}
	
}



