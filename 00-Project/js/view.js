// Get JSON data from local browser storage
let storedItems = JSON.parse(localStorage.getItem('items'));

if (storedItems) // db not empty
{
    for (let i = 0; i < storedItems.length; i++)
    {
        $("#view-page").append($(
            "<div id='viewContainer" + i + "'>"
            + "<h2>" + storedItems[i].name + "</h2>"
            + "<h4> - " + storedItems[i].location + ",  £" + storedItems[i].value.toFixed(2) + " x " + storedItems[i].quantity + "</h4>"
            + "<br><p>" + storedItems[i].condition + " condtion, " + storedItems[i].notes + "</p>" 
            + "<style>h2, h4 { display: inline; } h4 { font-weight: normal; } </style>"
            + "<hr></div>"
        ));
        
        console.log(storedItems[i].name, storedItems[i].checkedOut);
        if (storedItems[i].checkedOut == "true")
        {
            console.log(".viewContainer" + i);
            $("#viewContainer" + i).css({
                "background-color" : "#a1a1a1"
            });
        }
    }
}
