# Secure-Redirect

## Table of Contents

+ [About](#about)
+ [Installing](#installing)
    + [CDN](#cdn)
        + [The Quick Way](#the-quick-way)
        + [The Customisable Way](#the-customisable-way)
    + [Local Install](#local-install)
        + [Quick Way (local)](#quick-way-local)
        + [Customisable Way (local)](#customisable-way-local)
+ [Safety Message](#safety-message)
+ [How Does it Work?](#how-does-this-work)

## About <a name = "about"></a>

I designed this after noticing a lot of websites relating to LGBTQ+ or abuse topics, while they did have a quick exit button, but it could still allow someone to simply press the back button. This service eliminates that worry, mostly. See [Safety Warning](#safety-warning)

> Live Demo (Auto Mode): <https://secure-redirect.vercel.app/testPages/auto.html><br>
> Live Demo (NoCSS Mode): <https://secure-redirect.vercel.app/testPages/noCss.html>

(When NoCSS is referred to, it means that no `<button>` element is generated, and it instead searches for a button with a specific id. More info found in [installing](#installing).)

---

## Installing

If you want the easiest and most up to date way, see below.

### CDN

#### The Quick Way

To use Secure-Redirect in the super quickest and easiest way, this is for you.

This can be done in one step. That's it. Simply paste one of the following tags at the bottom of your `<body>` element, and you're done.

Official Secure-Redirect Vercel App:<br>
`<script src="https://secure-redirect.vercel.app/dist/i.js"></script>`

JsDelivr CDN (Backup):<br>
`<script src="https://cdn.jsdelivr.net/gh/whizbangpop/secure-redirect@latest/dist/i.js"></script>`

#### The Customisable Way

This method does take a little bit more time to setup, but gives you more control over how the button looks.

First, paste one of the following tags at the bottom of your `<body>` element:

Official Secure-Redirect Vercel App:<br>
`<script src="https://secure-redirect.vercel.app/dist/nocss.i.js></script>`

JsDelivr CDN (Backup):<br>
`<script src="https://cdn.jsdelivr.net/gh/whizbangpop/secure-redirect@latest/dist/nocss.i.js"></script>`

Then, create a `<button>` element in a location of your choice, then make sure to assign it the id of `id="quickExitButton"`

**IT WILL NOT WORK OTHERWISE!**

Check out [Pre-Provided CSS Styles](#pre-provided-css-styles) for some styles that are bundled with Secure-Redirect.

---

### Local Install

If you want to have your's locally (possiblty to get around network restrictions), this bit is for you.

First, get the version you are looking for. There is a quick way, and a customisable way. Make sure to save it somewhere in your websites folder.

#### Quick Way (local)

First, save the following file to an assets folder of some kind:
<https://github.com/whizbangpop/secure-redirect/blob/main/dist/i.js>

Then, add the following code to the **bottom** of your `<body>` element:
`<script src="path/to/i.js" ></script>`

And you're done! Make sure to add this to all pages where you need this button.

#### Customisable Way (local)

This one takes a bit more time.

First, save the following file to an assets folder of some kind:
<https://github.com/whizbangpop/secure-redirect/blob/main/dist/nocss.i.js>

Then, add the following code to the **bottom** of your `<body>` element:
`<script src="path/to/nocss.i.js" ></script>`

Then, create a button element somewhere inside of your `<body>` tag, giving it an id of `quickExitButton`. <br>
**VERY IMPORTANT!** The JavaScript is listening for button clicks for **any** button with this id, so make sure to not accidentally use it.

---

### Pre-provided CSS Styles

To use one of the CSS styles shiped with Secure-Redirect, add a link to one of the following CSS files, then add the specified class to the exit button.

| CSS Link | Backup CSS Link | Class Name |
| ----- | ----- | ----- |
| <https://secure-redirect.vercel.app/dist/css/playful.css> | <https://cdn.jsdelivr.net/gh/whizbangpop/secure-redirect@latest/dist/css/playful.css> | `class="playful"` |
| <https://secure-redirect.vercel.app/dist/css/minimal.css> | <https://cdn.jsdelivr.net/gh/whizbangpop/secure-redirect@latest/dist/css/minimal.css> | `class="minimal"` |
| <https://secure-redirect.vercel.app/dist/css/basic.css> | <https://cdn.jsdelivr.net/gh/whizbangpop/secure-redirect@latest/dist/css/basic.css> | `class="basic"` |

## Safety Message

+ Security is limited to what browser access is given. Browser history is not cleared as JavaScript simply does not have this functionality.

+ This is designed to clear the back button history.  

**If your safety could be compromised, please make sure to clear your browser history and use a VPN.**

---

## How does this work?

You might be asking, *well, how does this work?*. Well you're probably not, but I'll answer that question for you anyways. I'll be presuming your asking about the Auto mode, as that's the default mode.

When the webpage is called, the JavaScript creates a new button element, styles it a bit to put it in the correct place, then appends it to the body. It then creates a listener to listen for when a user clicks the button.

Once it is clicked, that is when this quite simple bit of code kicks in. **This took me ages to figure out.** I'll explain later. It does two (well, really three) different things, changes the initial properties of the current webpage, it then opens a new tab into Google and finally, it attempts to close the current tab. The reason for the first step is the reason it took ages to figure out. 

Basically, browsers doesn't like JavaScript closing tabs all willy nilly. So, I had to comprimise. By setting the webpage to *look* like a different website (currently Wikipedia as it's very commonly visited), it means even if the tab can't be closed, it's much less obvious to someone taking a look. The reason I used the phrasing I did, was because browsers are weird. Sometimes the tab closes, other times it doesn't. And I have no idea why. So this helps to cover up browsing history. 

I managed to increase my success rates (somewhat) by instead of having websites redirect to a webpage, it instead loads the JavaScript in on every page load where the code is called. This seems to help some of the time as this *sometimes* makes the browser think that the JavaScript created the tab. I have dones hours of testing and I can't currently seem to find a pattern of when and why it can sometime close the tab, but other times can't.

I'm looking into buying a custom domain so I can shorten it down from the quite lengthy `secure-redirect.vercel.app` to something shorter. I won't say what I'm looking at as to make sure no one is a pain and buys the domain before me. That would make me very upset.

That's my ranting done for now. Hope this project can be of some use to someone out there some day :>