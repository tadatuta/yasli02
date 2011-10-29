	
window.attachEvent('onload', emulateDecor);

function emulateDecor(){
	var decorcontact = document.getElementsByClass('contacts')[0];
	decorcontact.insertAdjacentHTML('beforeEnd', '<div></div>');
	decorcontact.lastChild.setAttribute('id','ie7decorcontact');
	
	var decorvcard = document.getElementsByClass('vcard')[0];
	decorvcard.insertAdjacentHTML('afterBegin', '<div></div>');
	decorvcard.firstChild.setAttribute('id','ie7decorvcard');
	
	var decorfooter  = document.getElementsByClass('footer')[0];
	decorfooter.insertAdjacentHTML('beforeEnd', '<div></div>');
	decorfooter.lastChild.setAttribute('id','decorfooter');
	
};


	document.getElementsByClass = function(getClass){
		if(document.querySelectorAll) {
			return document.querySelectorAll("." + getClass);
		}
		else if(document.getElementsByClassName) {
			return document.getElementsByClassName(getClass);
		}
		else {
			var list = document.getElementsByTagName('*'), i = list.length,
			classArray = getClass.split(/\s+/), result = [];
			while(i--) {
				if(list[i].className.search('\\b' + classArray + '\\b') != -1) {
					result.push(list[i]);
				}
			}
			return result;
		}
	};




