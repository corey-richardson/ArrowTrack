$(document).ready(function () {
    $("#add-form").on("submit", function(event) {
        event.preventDefault();   
        let formData = new FormData(this);

        const newItem = {};

        for (const [key, value] of formData.entries()) {
            if (key === 'value') {
                newItem[key] = parseFloat(value);
            } else if (key === 'quantity') {
                newItem[key] = parseInt(value);
            } else {
                newItem[key] = value;
            }
        }

        // Get existing items from local browser storage
        // If empty, create an empty list
        let storedItems = JSON.parse(localStorage.getItem('items')) || [];
        // Add the new item to the list of items, then sort by name
        storedItems.push(newItem);
        storedItems.sort((a, b) => (a.name > b.name ? 1 : -1));
        // Store the updated list
        localStorage.setItem('items', JSON.stringify(storedItems));

        window.location.reload();
    });
});
