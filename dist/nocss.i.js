var button=document.getElementById("quickExitButton");
console.log("Secure-Redirect Auto has loaded.");
button.addEventListener("click", (function(){
	window.open("http://google.com","_blank");
	window.setTimeout(function(){ this.close() }, 100)
	window.location.replace("https://en.wikipedia.com/");
}));