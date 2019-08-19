var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");


function removeele(e){
	e.target.removeEventListener("click", removeele, false);
	e.target.parentNode.remove();
}

for(var i=0;i<document.getElementsByTagName("li").length;i++){
	var btn = document.createElement("button");
	btn.addEventListener("click", removeele, false);
	btn.innerHTML = "Delete";
	document.getElementsByTagName("li")[i] += " ";
	document.getElementsByTagName("li")[i].appendChild(btn);
}

function getEventTarget(e){
	e = e || window.event;
	return e.target || e.srcElement;
}


ul.onclick = function(event){
	var target = event.target;
	target.classList.toggle("done");
}

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	var btn = document.createElement("button");
	btn.addEventListener("click", removeele, false);
	btn.innerHTML = "Delete";
	li.appendChild(btn);

	ul.appendChild(li);
	input.value = "";
}



function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}



function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);