window.attachEvent('onload', makeOpacity);

function makeOpacity(){
	var figcap = document.getElementsByTagName('FIGCAPTION');
	for(var i=0; i<figcap.length; i++){
		figcap[i].insertAdjacentHTML('beforeBegin','<div></div>');
		figcap[i].previousSibling.setAttribute('id','figfon');
	}
};