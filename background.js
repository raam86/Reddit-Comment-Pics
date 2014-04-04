


chrome.tabs.onUpdated.addListener(function(tabId, changeInfo) {
	chrome.tabs.getSelected(null, function(tab) {
		console.log(tab);
		if(tab.url.indexOf('reddit') > 0){
    		chrome.pageAction.show(tab.id);			
		}
	});
	chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
		console.log("request",request,"sender",sender,"sendResponse", sendResponse);
	})

})	