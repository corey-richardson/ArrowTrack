$(document).ready(function () {
    let storedItems = JSON.parse(localStorage.getItem('items'));

    for (let i = 0; i < storedItems.length; i++)
    {
        $("#item-to-edit").append("<option value='" + storedItems[i].name + "'>" + storedItems[i].name + "</option>");
    }

    $("#edit-form").on("submit", function(event) {
        // Similar implementation to:
        // https://github.com/corey-richardson/course-progress-tracker/blob/main/mysite/app.py
        // ...but using flat file db instead of SQL :/
        // OR https://github.com/corey-richardson/yelverton-bowmen-scoreboard
        // which uses session browser storage to hold the db
        event.preventDefault();

        // Ensure latest version of db in memory
        let storedItems = JSON.parse(localStorage.getItem('items'));
        let formData = new FormData(this);

        let itemNameToModify = formData.get("item-to-edit");

        for (let [key, value] of formData.entries()) 
        {
            // Handle item deletion
            if (key == "delete" && value == "true")
            {
                // Get index of desired item
                for (let i = 0; i < storedItems.length; i++) // nested for loop bad, O(n^2) data modification?
                {
                    // Check matching
                    if (storedItems[i].name == itemNameToModify)
                    {
                        // Remove from array and write new array to local storage
                        storedItems.splice(i, 1);
                        break;
                    }
                }
                break; // Item deleted, no need to check other attributes
            }

            // For each key that has a value assigned (form field not left empty)
            if (value)
            {
                // Find the matching item in the db
                for (let i = 0; i < storedItems.length; i++) // nested for loop bad, O(n^2) data modification?
                {
                    if (storedItems[i].name == itemNameToModify) 
                    {
                        // Special cases for float types
                        if (key == "value" || key == "quantity")
                        {
                            value = parseFloat(value);
                        }

                        // Make the update
                        storedItems[i][key] = value;

                        // If the name was changed, the search object needs to 
                        // be updated to reflect this else following iterations 
                        // will search for an item that no longer exists
                        // This wouldn't be needed if using constant IDs!!! // TODO?
                        if (key == "name") 
                        {
                            itemNameToModify = value;
                        }
                    }
                }
            }
        }

        // Sort and update the local db
        storedItems.sort((a, b) => (a.name > b.name ? 1 : -1));
        localStorage.setItem('items', JSON.stringify(storedItems));
        window.location.reload();
    });
});
