
		(function (){
							
			function addEvent(elem, type, handler){
				  if (elem.addEventListener){
				    elem.addEventListener(type, handler, false);
				  } else {
				    elem.attachEvent("on"+type, handler);
				  }
			}
			
			var icon = document.getElementById("logotype");
			addEvent(icon,"error", hideIcon);
				function hideIcon(){
					this.style.display ='none';
				}
		}
		)();
