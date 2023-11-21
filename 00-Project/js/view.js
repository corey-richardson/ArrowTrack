const viewElements = getAllChildren();

viewElements.sort((a, b) => (a.age > b.age ? 1 : -1)); // sort by property (test data age)

let length = viewElements.length;

const tbl = document.getElementById("view-page-table"); 

for (let i = 0; i < length; i++) // for each elem
{
    let text = "";

    for (let attr in viewElements[i]) 
    {
        text += "<td>" + viewElements[i][attr] + "</td>";
    }

    const tblr = document.createElement("tr");
    tblr.innerHTML = text;
    tbl.appendChild(tblr);
}