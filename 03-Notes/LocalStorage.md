[GitHub Issue](https://github.com/users/corey-richardson/projects/4/views/1?pane=issue&itemId=46057794)

PROBLEM: Browser cannot access local file system in order to write new entries to the JSON flat file database.

---

I have been working through [Dr. Angela Yu's Web Development course](https://www.udemy.com/course/the-complete-web-development-bootcamp/) on Udemy to learn about backend web technologies and tools such as Node.js allowing access to the 'fs' module.

(This course and Node.js *might* also be useful for future updates using an SQL database rather than a flat file database to store relational data? Assuming time and coursework specs allow)

^ Also this has definitely taken longer than planned due to working on other modules, courseworks and personal projects. WakaTime tracking for [2023-web-development-bootcamp](https://wakatime.com/@coreyrichardson/projects/qxrhpwtvmm?start=2023-10-01&end=2024-04-30) and [ArrowTrack](https://wakatime.com/@coreyrichardson/projects/ndvtnsilnw?start=2023-10-01&end=2024-04-30) shows that recent progress has been unfortunately *limited*. 

---

I got to the Node.js section of the course and have realised that it WAY overcomplicates this issues. To use Node.js' 'fs' module the page would have to run on a local webserver using ExpressJS (or equivalent), which would fall outside of the coursework specification of a single page application.

A better solution would be to use 'Local Storage' within the browser.

> Local Storage is a web browser feature that allows web applications to store key-value pairs persistently within the user's browser. It provides a simple and convenient way to store small amounts of data locally on the user's device, typically for the purpose of caching application data, user preferences, or other temporary information.

There is a storage limitation of 5-10MB for local storage however *hopefully* this should never get hit by a simple JSON file.

Data stored in Local Storage persists even after the browser window is closed, unless cleared by the user or the application itself.

This is a much simpler method when compared to Node.js' 'fs' module. I have used up 2 months of my time for this project going through this web development course. Ouch.

Below is a proof of concept the shows how this could work for my application.

```js
const items = [
    {
        "name":"PSE Stinger ATK",
        "condition":"Good",
        "value":327.00,
        "quantity":1,
        "location":"Widewell",
        "notes":"Compound 50# Right Handed"
    }
];

localStorage.setItem('items', JSON.stringify(items));
let storedItems = JSON.parse(localStorage.getItem('items'));
console.log(storedItems);

items.push(
    {
        "name":"PSE Lazer",
        "condition":"Great",
        "value":732.00,
        "quantity":1,
        "location":"Widewell",
        "notes":"Compound 50# Right Handed"
    }
)

localStorage.setItem('items', JSON.stringify(items));
storedItems = JSON.parse(localStorage.getItem('items'));
console.log(storedItems);

for (let i = 0; i < storedItems.length; i++)
{
    $("#view-container").append($("<h1>" + storedItems[i].name + "</h1>"));
}
```

At least this course taught me about jQuery and the Document Object Model. Silver linings, right?
