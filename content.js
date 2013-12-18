chrome.extension.sendRequest({method: "getLocalStorage"}, function(response) {
	var storage = response.data;
	for (i in storage){
		document.body.innerHTML = document.body.innerHTML.replace(new RegExp(i, "g"), storage[i]);
	}
});
