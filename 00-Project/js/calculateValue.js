fetch("./static/items.json")
    .then(response => {
        console.log(response);
        return response.json();
    })
    .then(jsonElements => {
        console.log(jsonElements);
        // _all is prefixed with an underscore as it should not be displayed to the user
        // the underscore should hopefully be immeadiatley obvious on the webpage if this rule is not followed
        const locations = {"_all" : 0.0};

        for (let obj in jsonElements)
        {
            let object = jsonElements[obj];
            if (!locations[object.location])
            {
                locations[object.location] = 0.0;
            }
        }
        console.log(locations);

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
            console.log("Here")
        }

        // Create DOM object and style it
        const para = document.createElement("p");
        para.style.textAlign = "center";
        para.style.fontWeight = "bold";
        // Add created DOM element to view-page
        para.innerHTML = text;
        const vp = document.getElementById("view-page");
        vp.appendChild(para);
    });

