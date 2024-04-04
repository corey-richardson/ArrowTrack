let jsonElements = JSON.parse(localStorage.getItem('items'));
const locations = {"_all" : 0.0};

for (let obj in jsonElements)
{
    let object = jsonElements[obj];
    if (!locations[object.location])
    {
        locations[object.location] = 0.0;
    }
}

for (let obj in jsonElements) {
    let object = jsonElements[obj];
    
    // Set default value if not already set
    if (!object.quantity)
    {
        object.quantity = 1;
    }

    // Update values
    locations["_all"] += object.value * object.quantity;
    locations[object.location] += object.value * object.quantity;
}

// Temp buffer
let text = "";

// For each storage location
for (let loc in locations)
{
    if (loc == "_all") // only display sum, not name
    {
        text += "£" + locations["_all"].toFixed(2);
        continue;
    }

    text += " | " + loc + ": £" + locations[loc].toFixed(2);
}

$("#view-page").append($(
    $("<p class='costs'>" + text + "</p>")
));

$(".costs").css({
    "text-align" : "center",
    "font-weight" : "bold" 
});
