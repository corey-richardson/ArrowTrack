const viewElements = getAllChildren();

let length = viewElements.length;

const tbl = document.getElementById("view-page-table"); 

for (let i = 0; i < length; i++) // for each elem
{
    let text = "";

    // Custom Rules
    // Common Rules
    viewElements[i].value = "£" + viewElements[i].value.toFixed(2);


    switch (viewElements[i].type)
    {
        case "Arrows":
            viewElements[i].length = viewElements[i].length.toFixed(1);
            break;
        case "Bow":
            viewElements[i].poundage = viewElements[i].poundage + "#";
            break;
        case "Target":
             // Combine target size and spots into name
            viewElements[i].brand = viewElements[i].brand + " " + viewElements[i].size_cm + "cm " + viewElements[i].isThreeSpot;
            delete viewElements[i].size_cm;
            delete viewElements[i].isThreeSpot;
            // Only display isNovelty if true
            if (viewElements[i].isNovelty == "Standard")
            {
                delete viewElements[i].isNovelty;
            } 
            // Combine Target and Target Type into a single attribute
            viewElements[i].type = "Target " + viewElements[i].targetType;
            delete viewElements[i].targetType;
            break;
    }

    for (let attr in viewElements[i]) 
    {
        text += "<td>" + viewElements[i][attr] + "</td>";
    }

    const tblr = document.createElement("tr");
    tblr.innerHTML = text;
    tbl.appendChild(tblr);
}