var button=document.getElementById("quickExitButton");console.log("Secure-Redirect NoCSS has loaded.");button.addEventListener("click",function(){window.open('http://google.com','_blank');window.setTimeout(function(){this.close()},50)});