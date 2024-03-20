There was originally a function `getAllChildren()` within `getAllChildren.js` which I created in hopes it would handle the file I/O for both `view.js` and `calculateValue.js` (D.R.Y).

```
00-Project
├───00-Project
│   ├───css
│   ├───js
        ├─calculateValue.js
        ├─getAllChildren.js
        ├─view.js
```

This function was called at the beginning of `calculateValue.js` and `view.js`.

## The Issue

The Fetch API above which is used to read the file, returns a `Promise` that it will provide
the data and not the data itself; asynchronous. 

> `fetch()` returns a Promise because it operates asynchronously. When you make a network request using fetch(), it initiates the process of sending a request to a server and receiving a response. Since this operation can take some time, JavaScript uses Promises to handle asynchronous operations more effectively.

This meant that the program would continue to run into sections requiring the data before the
data had actually been provided. For example:

```js
const viewElements = getAllChildren();
let length = viewElements.length;
// etc...
// viewElements would be 'undefined' and would not have a 'length' attribute yet.
```

## The Solution

To get around this, I have now removed the `getAllChildren()` function and moved the logic
requiring the data into `.then()` blocks following the `fetch()` funciton calls. This does introduce repitition of code as a change to the method used to read and parse JSON data would now need to be changed in two places.

---

- [`calculateValue.js`](/00-Project/js/calculateValue.js)
- [`view.js`](/00-Project/js/view.js)

<br>

- [WakaTime 2023-12-13](https://wakatime.com/@coreyrichardson/projects/ndvtnsilnw?start=2023-12-13&end=2023-12-13)

See further in [LocalStorage](/03-Notes/LocalStorage.md).