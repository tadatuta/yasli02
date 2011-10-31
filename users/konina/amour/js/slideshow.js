	
		addEvent(window,"load", slideshow);
		
		function slideshow(){
			var ul = document.getElementsByClass("tabs");
			for(var i = 0; i < ul.length; i++){
				var li = ul[i].getElementsByTagName('LI');
					for(var j = 0; j < li.length; j++){
						li[j].onclick = function(){
							var num = (parseInt(getElemText(this)) - 1);
							var ulCont = document.getElementsByClass("tabs-content")[0];
							ulCont.style.left = '-'+ 730*num +'px';
						};
					}
			}
		}
		
		function addEvent(elem, type, handler){
			  if (elem.addEventListener){
			    elem.addEventListener(type, handler, false);
			  } else {
			    elem.attachEvent("on"+type, handler);
			  }
		}
		
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
		
		function getElemText(node){
		    return node.text || node.textContent || (function(node){
		        var _result = "";
		        if (node == null) {
		            return _result;
		        }
		        var childrens = node.childNodes;
		        var i = 0;
		        while (i < childrens.length) {
		            var child = childrens.item(i);
		            switch (child.nodeType) {
		                case 1: // ELEMENT_NODE
		                case 5: // ENTITY_REFERENCE_NODE
		                    _result += arguments.callee(child);
		                    break;
		                case 3: // TEXT_NODE
		                case 2: // ATTRIBUTE_NODE
		                case 4: // CDATA_SECTION_NODE
		                    _result += child.nodeValue;
		                    break;
		                case 6: // ENTITY_NODE
		                case 7: // PROCESSING_INSTRUCTION_NODE
		                case 8: // COMMENT_NODE
		                case 9: // DOCUMENT_NODE
		                case 10: // DOCUMENT_TYPE_NODE
		                case 11: // DOCUMENT_FRAGMENT_NODE
		                case 12: // NOTATION_NODE
		                // skip
		                break;
		            }
		            i++;
		        }
		        return _result;
		    }(node));
		}