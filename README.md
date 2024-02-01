# QuickExit

A easy to implement and secure way to allow users to quickly leave a website while being harder to get back to the original website.

> Important Note: QuickExit **DOES NOT** work like a VPN, network traffic can still be monitored. Please remember this when implimenting QuickExit.

## Usage

QuickExit ships two versions, one that is a fully self contained package, and one that listens to a button with a certain id.

### Prepackaged Version

Super simple to implement, simply copy and paste the following line at the bottom of the `<body>` tag on any webpages you want to have a QuickExit button.

`<script src="https://cdn.quickexit.cc/dist/i.js" />`

### Custom Version

If you already have a quick escape style button on your website, and want to keep it while using QuickExit, use the Custom/NoCSS version instead. Simply copy and paste the following line at the bottom of the `<body>` tag on any webpages you have a quick escape button that you want QuickExit to listen to.

Make sure the button you want to act as your quick escape button has the id `quickExitButton` as otherwise QuickExit will ignore it.

`<script src="https://cdn.quickexit.cc/dist/nocss.i.js" />`

### Backup CDN

QuickExit can also always be accessed through our backup CDN, JSDelivr. 

Prepackaged Version: `<script src="https://cdn.jsdelivr.net/gh/whizbangpop/secure-redirect@latest/dist/i.js"></script>`
Custom/NoCSS Version: `<script src="https://cdn.jsdelivr.net/gh/whizbangpop/secure-redirect@latest/dist/nocss.i.js"></script>`


## How It Works

Currently, most websites that have a quick escape feature simply just foward the user to  a commonly used webite like Google. QuickExit changes that.

Once clicked, the button will open a new window (currently going to <https://google.com>) and set the current page to automatically close in 100 milliseconds. And just in case the auto close fails (which can happen depending on JavaScript is executed on the browser), the current page is changed to <https://wikipedia.com> to make the webpage seem more innocent and less likely to draw attention to anybody looking.

If you want to try QuickExit out before implementing it yourself, simply head to [https://quickexit.cc/testPages/auto.html](./testPages/auto.html) and try it yourself.

> If you want to try the NoCSS version instead, go [here](./testPages/noCss.html).

## Attribution & Distribution

Unlike most of my other projects, I have released QuickExit under the MIT licence in order to make it as easy to use and adopt. If you run a website that would find this useful, I would love for you to use QuickExit, and recommend it to others who could use it. And even if you don't find a use for it, spreading the word is just as powerful.

Ideally we would live in a world that would mean something like this would never need to exist, but we do. So the more people that can use it, the better.

And while attribution is not required, it is much appreciated.
