fetch("./static/items.json")
    .then(response => {
        console.log(response);
        return response.json();
    })
    .then(viewElements => {

        let length = viewElements.length;
        viewElements.sort((a, b) => (a.brand > b.brand ? 1 : -1));

        const viewContainer = document.getElementById("view-container"); 

        for (let i = 0; i < length; i++) // for each elem
        {
            let text = "";

            // Common Parsing Rules
            viewElements[i].value = "£" + viewElements[i].value.toFixed(2);

            // Create HTML string
            text = text
            + "<h2>" + viewElements[i].brand + "</h2>"
            + "<h4> - " + viewElements[i].location + ", " + viewElements[i].value + " x " + viewElements[i].quantity + "</h4>"
            + "<br><p>" + viewElements[i].condition + " condtion, " + viewElements[i].notes + "</p>" 
            + "<style>h2, h4 { display: inline; } h4 { font-weight: normal; } </style>";

            // Create DOM object
            const elemContainer = document.createElement("div");
            elemContainer.classList.add("elem-container");
            // Add created DOM element to view-container
            elemContainer.innerHTML = text;
            viewContainer.appendChild(elemContainer);
        }
    });

/* There was originally a function "getAllChildren()" which I created in hopes it would handle
the file i/o for both view.js and calculateValue.js (D.R.Y). I couldn't get it to work.

The Fetch API above which is used to read the file, returns a 'Promise' that it will provide
the data and not the data itself; asynchronous. 

This meant that the program would continue to run into sections requiring the data before the
data had actually been provided. For example:

const viewElements = getAllChildren();
let length = viewElements.length;
// etc...
// viewElements would be 'undefined' and would not have a 'length' attribute yet.

To get around this, I have now removed the getAllChildren() function and moved the logic
requiring the data into '.then()' blocks. This does introduce repitition of code but... :)

*/

// https://stackoverflow.com/questions/39021870/fetch-returns-promise-instead-of-actual-data-even-after-using-then