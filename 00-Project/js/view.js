// Get JSON data from local browser storage
let storedItems = JSON.parse(localStorage.getItem('items'));

if (storedItems) // db not empty
{
    // Iterate through each item in the local browser storage db
    // Append each item to the view page, containerised in a unique div.
    for (let i = 0; i < storedItems.length; i++)
    {
        $("#view-page").append($(
            "<div id='viewContainer" + i + "'>"
            + "<h2>" + storedItems[i].name + "</h2>"
            + "<h4> - " + storedItems[i].location + ",  £" + storedItems[i].value.toFixed(2) + " x " + storedItems[i].quantity + "</h4>"
            + "<br><p>" + storedItems[i].condition + " condtion</p>" 
            + "<p class='note-p'>" + storedItems[i].notes + "</p>" 
            + "<style>h2, h4 { display: inline; } h4 { font-weight: normal; } </style>"
            + "</div><hr>"
        ));

        // Only display Notes attribute paragraph if it contains information
        if (storedItems[i].notes.length == 0)
        {
            $("viewContainer" + i + " > .note-p").css({
                "display" : "none"
            });
        }
        
        // Modify the background colour of any "checked out" items
        if (storedItems[i].checkedOut == "true")
        {
            $("#viewContainer" + i).css({
                "background-color" : "#a1a1a1"
            });
        }

        // Modify the backgroun colour (and relevant borders) for any items marked
        // as "Unsafe"; highlight danger!
        if (storedItems[i].condition == "Unsafe")
        {
            console.log(storedItems[i].condition);

            $("#viewContainer" + i).css({
                "background-color" : "#FF000090",
                "border-radius" : "6px",
                "padding" : "3px",
                "margin-bottom" : "3px"
            });
        }
    }
}
