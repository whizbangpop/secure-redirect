# secure-redirect
A simple redirect service, designed to (to the extent given) securely remove the website a user was visiting.

---

I designed this after noticing a lot of websites relating to LGBTQ+ topics, did have a quick exit button, but it could still allow someone to simply press the back button. This service eliminates that worry, but also gives the option to keep the back button if so wished. 

It has also been designed to close the tab, even if opening a new window was unsuccessful (due to permissions). This obviously doesn't affect the pure url redirect method.

---

To use, paste the following HTML into the bottom of your `<body>` tags on all applicable webpages, and the JavaScript will do the rest!

`<script src="https://secure-redirect.vercel.app/i.js" />`

---

While this project is licenced under an MIT licence, I would be incredibly greatfull if you could link back to this project somewhere in your website. Though, even just using the service means a lot.
