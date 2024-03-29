// Get JSON data from local browser storage
let storedItems = JSON.parse(localStorage.getItem('items'));

if (storedItems) // db not empty
{
    for (let i = 0; i < storedItems.length; i++)
    {
        $("#view-page").append($(
            "<h2>" + storedItems[i].name + "</h2>"
            + "<h4> - " + storedItems[i].location + ",  £" + storedItems[i].value.toFixed(2) + " x " + storedItems[i].quantity + "</h4>"
            + "<br><p>" + storedItems[i].condition + " condtion, " + storedItems[i].notes + "</p>" 
            + "<style>h2, h4 { display: inline; } h4 { font-weight: normal; } </style>"
        ));
    }
}
