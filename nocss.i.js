var button=document.getElementById("quickExitButton");button.addEventListener("click",function(){window.open('http://google.com','_blank');window.setTimeout(function(){this.close()},50)});