// Sends request to background.js for localStorage
chrome.extension.sendRequest({method: "getLocalStorage"}, function(response) {
	var storage = response.data;
	for (i in storage){
		// Actual word replacement
		document.body.innerHTML = document.body.innerHTML.replace(new RegExp(i, "g"), storage[i]);
	}
});
