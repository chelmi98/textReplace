// listens for request from content.js
chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
	if (request.method == "getLocalStorage")
		sendResponse({data: localStorage}); // if request is to send localSorage
	else
		sendResponse({}); // otherwise, ignore them
});