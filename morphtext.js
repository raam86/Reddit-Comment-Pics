function ChangeSelection(sep){
	this.sep = sep;
}
ChangeSelection.prototype.addListener = function(){
	var _this = this;
	this.listener = _this.keydownRouter;
	window.addEventListener('keydown',function(e){_this.keydownRouter.call(_this,e)},true);
}
ChangeSelection.prototype.removeListener = function(){
	window.removeEventListener('keydown',this.listener,true);
}
ChangeSelection.prototype.get_text = function() {
	this.selectionObject = window.getSelection();
	this.text = this.selectionObject.toString();
	this.text = this.text.replace(/\b\s+$/g,'');
	console.log(this.text);
	return this.selectionObject.toString();
};
ChangeSelection.prototype.morphText = function(sep) {
	this.sep = this.sep || sep;
	this.morphed = this.text.split('').join(this.sep);
	return this.morphed;
};
ChangeSelection.prototype.makeChange = function(){
	var content = this.selectionObject.baseNode.textContent;
	this.selectionObject.baseNode.textContent = content.replace(this.text,this.morphed);
};
ChangeSelection.prototype.keydownRouter = function(e){
	if(!e.ctrlKey) return;
	switch (e.keyCode) {
	  case 77:
	  //console.log(this);
	    this.get_text();
	    this.morphText();
	    this.makeChange()
    	break;
	  default:
	    return;
	    break;
	}

}
ChangeSelection.prototype.setSeperator = function(sep){
	this.sep = sep;
}
var namespace = {};
console.log("before message")
chrome.extension.onMessage.addListener(function(message,sender,sendResponse){
  //this will fire when asked for info by the popup
  sendResponse(message);
  if(namespace.seprate){
		namespace.seprate.setSeperator(message);
	}
	else{
	  namespace.seprate =  new ChangeSelection(message);
	  namespace.seprate.addListener();
  }
});

