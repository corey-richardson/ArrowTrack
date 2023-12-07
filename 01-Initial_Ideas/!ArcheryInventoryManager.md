# Archery Inventory Manager

This project could be used by archers and archery clubs to track and help maintain the equipment they hold. This would also be useful to track the value of the inventory to assist in insurance calculations, and track the items that may need replacing to help with budgeting.

**Equipment Categories**
- Common (Base Class)
    - Value
    - Brand
    - Condition
- Bows
    - Bowstyle
    - Poundage
    - Left / Right Handed
    - Child objects
        - Accessories
- Arrows
    - Length
    - Spine (optional if known)
    - Quantity
- Accessories
- PPE
    - Type (e.g. wrist guard)
- Workshop
    - Name
- Targets
    - Frames
    - Bosses
    - Target Faces
        - Size
        - Is novelty? (Easter/Halloween/Christmas/etc)
- etc.

Information about each item
- Quantity
- Condition

Search by / Sort listings by
- Poundage
- Value
- Storage venue

Sum the total inventory value by
- Storage venue
- Total

> Commonly tracked properties, such as `value`, `storedAtVenue` (`string`) or `dateAcquired`, should be implemented in a base class.

## User Stories

- As a user, I want to be able to add new items via a HTML form.
- As the developer, I want these forms to only display menus related to that object type class. For example `Target Face Size` would not be an input option for `Arrows`.
- As a club treasurer, I want to be able to see the values for equipment stored at each venue/range as well as the combined value to understand what the club has in inventory for insurance calculations.
- As a club treasurer, I want to be able to see the condition of equipment in storage so I can priortise spending towards items that are in direst need of replacing to help with budgeting.
- As a club equipment officer, I want to be able to add and remove items from the database so that I can keep track of the equipment available for members to use.
- As a club member, I want to be able to see what equipment is available for me to use so I can choose the items that best suits my needs (bow poundage, arrow length, arrow spine, etc). I also want to know which accessories are available for that bow.
    - > Could this be implemented using children?
- As a club equipment officer, I want to be able to edit/alter the condition of equipment as it gets used.
- As a club training coach, I want to be able to 'checkout' club-owned bows to members on training courses to ensure they are using the same bow throughout (and beyond) their beginners course.