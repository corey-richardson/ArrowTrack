const viewElements = getAllChildren();

let length = viewElements.length;

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