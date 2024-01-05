# COMP1004 Interim Video

Due: 15/01/24

Max Length of 4 minutes

## Project Vision and background.

> Slide 1

Arrow Track Inventory Management Tool is a system tailored for archers and archery clubs to track and maintain their equipment inventory.

> Slide 2 -> 3

The main goals are to manage equipment details, evaluate inventory value for insurance, and assisting in budgeting for replacements.

> Slide 4

It can track and displays attributes such as the name, condition, value, storage location and a notes field for other features the user wants to track.

> Slide 5 w/ transition

The tool displays both the total equipment value and individual values grouped by storage locations, aiding club treasurers in insurance calculations.

> Slide 3

A club equipment officer could use the tool to prioritise replacement purchases by accessing equipment conditions. This allows them to identify items most urgently needing replacements, aiding in strategic club budget allocation and maintenance planning.

## Your project plan and sprints carried out to date.

> Slide shows GitHub Project Kanban Board
> Slide includes link [https://github.com/users/corey-richardson/projects/4]

I have been using a GitHub Project to track my user stories and sprints, with categories tracking my overarching user stories, my product backlog, the sprint items currently in progress, the features the have been put on hold, features that have been implemented and features that have been cancelled as new insights are gained with each sprint.

> Show Roadmap image using keyframes to pan

The roadmap view allows you to visualise my projects sprints, which are usually 1 or 2 weeks long depending on the tasks scale.

## UML models to date.

> Slide shows [Story](/06-Diagrams/Story.jpg) <br>

This diagram shows the possible user journeys through the web application, showing how they can can create... read... and update the database. (Missing delete!!!)

> Slide shows [Old UML](/06-Diagrams/ClassDiagram.jpg)

In the original design, the object relationships were depicted through a complex structure involving multiple connections and associations.

> Slide shows [New UML](/06-Diagrams/ClassDiagram-new.jpg)

The revised UML diagram shows how the simplification of intricate relationships into a single, more straightforward and more manageable object model was influenced significantly by insights learned during iterative sprints.

In the future I hope to return to the original model in order to allow the user to sort by these attributes. This would let them sort the items by attributes such as condition, bow poundage, bow handedness, and more.

Another field to be added could be a "checked out" field allowing an club member to request equipment suited to their requirements.

## An initial prototype running (hopefully).

As the application uses the `fetch` API to read and write to a local JSON file, it must be ran on a local HTTP server.

```
cd 00-Project
python -m http.server
```

[127.0.0.1:8000](http://127.0.0.1:8000/)

> Slide shows webpage

The prototype uses JavaScript's `fetch` API to obtain information from a JSON file name `items.json`, before formatting and structuring it for display.

> Slide shows `view.js`

The script retrieves the JSON data and parses it into an array, sorted by the `name` attribute.

The elements of the array are then iterated over to dynamically create the HTML content using the Document Object Model. The HTML content is encapsulated within a `div` element of class `elem-container` which is then appended to the `view-container` of the HTML document.

> Slide shows `calculateValue.js`

The webpage also displays the summed values for all the items in the inventory, as well as the sumemd values of all items grouped by the location as it is common for archery clubs to maintain multiple ranges for the indoor and outdoor seasons. 

Like before, the script retrieves the JSON data using the `fetch` API and parses it into an array.

Then, it iterates through each element, adding any previously unseen location to the `locations` dictionary and also updates the sum for all locations.

Next the script builds a string containing the location name and total value for each location, before generating a Document Object Model paragraph which is appending to the `view-page` section of the HTML document.

> Slide shows webpage

Still to implement are the HTML forms that will allow the user to add new items to the database.

> Slide shows relevant CSS files

To implement responsive web design I have utilised flexboxes and media queries to alter how the page is rendered depending on the width of the screen.

> Slide shows definition of mobile first design

Keeping in line with mobile first design, the default CSS caters to screens with widths less than `992px` across.

> Slide shows [Narrow Width](../05-Design/res/02-NarrowWidth.jpg) side by side with webpage

In this rendering, the view, add and edit sections of the page are displayed in one column, and the navbar and footer links are displayed stacked with no separators.

> Slide shows [Full Width](../05-Design/res/01-FullWidth.jpg) side by side with webpage

On midsized screens, the view, add and edit sections are displayed in two columns, where the view section has a column span of 2 columns. The navbar and footer links are now displayed inline with separators between them.

> Slide shows [Ultrawide](../05-Design/res/03-Ultrawide.jpg) side by side with webpage

On large, ultrawide screens with a width of more than `2560px`, the view, add and edit sections are displayed as 3 columns. Since all sections are now displayed at the top of the screen, the navbars relative links are no longer required and so are hidden from the user. 

> Slide shows video of RWD

## A succinct description of issues/challenges faced.

> Slide 31

There was originally a third JavaScript function named `getAllChildren` which I created in hopes it would handle
the JSON file i/o for both `view.js` and `calculateValue.js` in an effort to avoid code repition.

This function would have handled the call to the `fetch` API and returned an array of items.

Instead, the `fetch` API was returning a `promise` that it would provide the data and not the data itself as it is an asynchronous operation. This meant that the program would continue to run into sections requiring the data before the data had actually been provided, resulting in no items being displayed.

> Slide 32

After a few hours of trialling different approaches I landed on the current design of the two functions; repeat the code handling the file IO and then encase the functionality in a `.then` block to ensure the data has been received before continuing.

> Slide 33

Maybe one way to resolve this repetition of code would be to call `view` and `calculateValue` from a wrapper function handling the data input.
