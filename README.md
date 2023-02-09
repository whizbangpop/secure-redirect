# Secure-Redirect

## Table of Contents
+ [About](#about)
+ [Getting Started](#getting_started)
+ [Safety Message](#safety-message)

## About <a name = "about"></a>
I designed this after noticing a lot of websites relating to LGBTQ+ or abuse topics, while they did have a quick exit button, but it could still allow someone to simply press the back button. This service eliminates that worry, mostly. See [Safety Warning](#safety-warning)

## Getting Started <a name = "getting_started"></a>
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Installing

If you want the easiest and most up to date way, see below.

#### CDN 

#### Local Install
If you want to have your's locally (possiblty to get around network restrictions), this bit is for you. 

First, get the version you are looking for. There is a quick way, and a customisable way. Make sure to save it somewhere in your websites folder.

##### Quick Way
First, save the following file to an assets folder of some kind:
https://github.com/whizbangpop/secure-redirect/blob/main/dist/i.js

Then, add the following code to the **bottom** of your `<body>` element:
`<script src="path/to/i.js" ></script>`

And you're done! Make sure to add this to all pages where you need this button.

##### Customisable Way
This one takes a bit more time.

First, save the following file to an assets folder of some kind:
https://github.com/whizbangpop/secure-redirect/blob/main/dist/nocss.i.js

Then, add the following code to the **bottom** of your `<body>` element:
`<script src="path/to/nocss.i.js" ></script>`

Then, create a button element somewhere inside of your `<body>` tag, giving it an id of `quickExitButton`. <br>
**VERY IMPORTANT!** The JavaScript is listening for button clicks for **any** button with this id, so make sure to not accidentally use it.


### Pre-provided CSS Styles
To use one of the CSS styles shiped with Secure-Redirect, add a link to one of the following CSS files, then add the specified class to the exit button.

| CSS Link | Backup CSS Link | Class Name |
| ----- | ----- | ----- |
| https://secure-redirect.vercel.app/dist/css/playful.css | https://cdn.jsdelivr.net/gh/whizbangpop/secure-redirect@latest/dist/css/playful.css | `class="playful"` |
| https://secure-redirect.vercel.app/dist/css/minimal.css | https://cdn.jsdelivr.net/gh/whizbangpop/secure-redirect@latest/dist/css/minimal.css | `class="minimal"` |
| https://secure-redirect.vercel.app/dist/css/basic.css | https://cdn.jsdelivr.net/gh/whizbangpop/secure-redirect@latest/dist/css/basic.css | `class="basic"` |

## Safety Message
* Security is limited to what browser access is given. Browser history is not cleared as JavaScript simply does not have this functionality.
* This is designed to clear the back button history.  

**If your safety could be compromised, please make sure to clear your browser history and use a VPN.** 
