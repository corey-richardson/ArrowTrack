# Food Expiration Date Tracker

## User Stories 

- As a user I want to be able to create `Food` objects to track expiry-date related characteristics of food items. These could include: 
    - `string` Food item name
    - `datetime` Date of expiry
    - `bool` Is it best before or use by?
    - `bool` Is the packaging open?
        - `bool` Individually wrapped and opened or all opened?
- As the developer I want to track the number of days till expiry (`expiryDate - todaysDate`)
- As the developer I want to store the food objects in JSON format
- As the user I want the option to display each food item sorted by different sort filters. These could include:
    - Days till expiry (ascending and descending)
    - Alphabetical
- As a user, I want the option to 'eat' or 'bin' food items to remove them from the list.
- As a user, I want to have a visual indicator as to what food items are approaching expiration. This could use colour coding.
    - Green
        - \> 3 days till expiry
    - Amber
        - <= 3 days till expiry
        - <= 3 days *after* expiry if item is 'best before'
    - Red
        - Any amount of time beyond expiry if item is 'use by'
        - \> 3 days after expiry if item is 'best before'
- As the user I want the expiry date to be updated once the item is opened to a user-defined (*HTML Forms?*) number of days time.
- As the developer I want to use a 'relevant' colour scheme appropriate to the project; as the project is largely based on refrigiration (kinda?) this could be 'cooler' colours such as white / light grey / light blue.
- As the developer I want the option for the user to have access to a toggleable light theme and a dark theme.

```json
{
    "name" : "Milk",
    "expiryDate" : "2023-10-28 00:00:00.000000",
    "isUseBy" : true,
    "isOpen" : true,
    "whenOpenUpdateExpiryDate" : true,
    "individuallyWrapped" : false
}
```
```
int numDays = input()
// When 'isOpen' is updated to true
if not individuallyWrapped and whenOpenUpdateExpiryDate
    expiryDate = todaysDate + days(numDays)
```
```css
:root[data-theme="light"] {
  --text: #130e01;
  --background: #ffffff;
  --primary: #d8d8d8;
  --secondary: #bfffff;
  --accent: #69f6ff;
}
/* If I want to implement light/dark themes */
:root[data-theme="dark"] {
  --text: #fef9ec;
  --background: #000000;
  --primary: #262626;
  --secondary: #004242;
  --accent: #008a94;
}
```

> Or should I track the `openedDate` and `numberOfDaysSinceOpen` so that original `expiryDate` value is maintained?