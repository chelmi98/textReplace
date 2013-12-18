function save_options() {
	var oldwrd = document.getElementById("oldwrd");
	var newwrd = document.getElementById("newwrd");
	if(oldwrd.value != "" && newwrd.value != "") {
		localStorage[oldwrd.value] = newwrd.value;
		
		var status = document.getElementById("status");
		status.innerHTML = "Options Saved.";
		setTimeout(function() {
			status.innerHTML = "";
		}, 750);
		restore_options();
	}
}

function restore_options() {
	var existingWrds = "";
	for(i in localStorage) {
		existingWrds += i + " - " + localStorage[i] + "<br>";
	}
	var wrdList = document.getElementById("storage");
	wrdList.innerHTML = existingWrds;
}

function remove_option() {
	var btn = document.getElementById("del");
	if (btn.value != "") {
		localStorage.removeItem(btn.value)
		restore_options();
	}
}

document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#add').addEventListener('click', save_options);
document.querySelector('#delGo').addEventListener('click', remove_option);