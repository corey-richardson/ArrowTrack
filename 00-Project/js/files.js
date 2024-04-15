$(document).ready(function () {
    /* This event lister will open a file dialog allowing the user to select
    where 'arrowtrack-items.json' will download to on their local machine. */
    $("#download-button").click(function(event) 
    {
        let storedItems = JSON.stringify(JSON.parse(localStorage.getItem('items')));
        // See documentation links below
        const blob = new Blob([storedItems], { type: 'application/json' });

        const url = URL.createObjectURL(blob);

        // Create a download link and auto-click
        const $link = $('<a></a>')
            .attr('href', url)
            .attr('download', 'arrowtrack-items.json');

        $("body").append($link);
        $link[0].click();
        URL.revokeObjectURL(url);
    });

    /* This event listener will open a file dialog allowing the user to upload
    a previously created database to the application. */
    $("#upload-button").on("click", function()
    {
        const fileField = $("#file-input-field")[0];

        // If file found in field
        if (fileField && fileField.files.length > 0)
        {
            const file = fileField.files[0];
            const reader = new FileReader();

            reader.onload = function (e)
            {
                const jsonData = e.target.result;
                try
                {
                    const toUpload = JSON.stringify(JSON.parse(jsonData));
                    localStorage.setItem("items", [toUpload]); // Needs to be in array; 
                                                               // specific formatting!
                }
                catch (error)
                {
                    console.error("Error reading JSON data from uploaded file:", error);
                }
            };

            reader.readAsText(file, "UTF-8");
        }
        else
        {
            alert("No file selected!");
        }

        // Update view page
        window.location.reload();
    });
});

/*
DOCUMENTATION LINKS

Blob https://developer.mozilla.org/en-US/docs/Web/API/Blob
FileReader https://developer.mozilla.org/en-US/docs/Web/API/FileReader
*/
