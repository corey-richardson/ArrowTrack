# Probably Useful Resources

- [CS50W](https://cs50.harvard.edu/web/2020/)
- [W3 HTML](https://www.w3schools.com/html/default.asp)
- [W3 CSS](https://www.w3schools.com/css/default.asp)
- [W3 Javascript](https://www.w3schools.com/js/default.asp)
- Previous HTML / CSS (JSON / CSV) Projects:
    - [Course Progress Tracker](https://github.com/corey-richardson/course-progress-tracker) (Flask)
    - [Halls of Residence Flat Finder](https://github.com/corey-richardson/halls-of-residence-flat-finder) (Flask)
    - [Yelverton Bowmen Scoreboard](https://github.com/corey-richardson/yelverton-bowmen-scoreboard) (Flask)
- [Realtime Colors](https://www.realtimecolors.com/)

---

[Realtime Colors Visualisation](https://www.realtimecolors.com/?colors=130e01-ffffff-006600-8b4513-d9a520&fonts=Poppins-Poppins)
```css
:root[data-theme="light"] {
  --text: #130e01;
  --background: #ffffff;
  --primary: #006600;
  --secondary: #8b4513;
  --accent: #d9a520;
}
:root[data-theme="dark"] {
  --text: #fef9ec;
  --background: #000000;
  --primary: #99ff99;
  --secondary: #eca674;
  --accent: #dfaa26;
}
```

```js
// Set variable to current date and time
const now = new Date();

// View the output
console.log(now);
```
Multiple Pages on a SPA:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Single Page</title>
        <style>
            div {
                display: none;
            }
        </style>
        <script src="singlepage.js"></script>
    </head>
    <body>
        <button data-page="page1">Page 1</button>
        <button data-page="page2">Page 2</button>
        <button data-page="page3">Page 3</button>
        <div id="page1">
            <h1>This is page 1</h1>
        </div>
        <div id="page2">
            <h1>This is page 2</h1>
        </div>
        <div id="page3">
            <h1>This is page 3</h1>
        </div>
    </body>
</html>
```