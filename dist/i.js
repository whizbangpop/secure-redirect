var button=document.createElement("Button");
button.innerHTML="Quick Exit";
button.style="bottom:0;right:0;position:fixed;z-index: 10;margin: 10px;";
document.body.appendChild(button);
console.log("Secure-Redirect Auto has loaded.");
button.addEventListener("click", (function(){
	window.open("http://google.com","_blank");
	window.setTimeout(function(){ this.close() }, 100)
	window.location.replace("https://en.wikipedia.com/");
}));