# ArrowTrack: Inventory Management System

ArrowTrack: An Inventory Management System for archers and archery clubs.

[![wakatime](https://wakatime.com/badge/user/55c30436-1509-4eb9-9f18-fa9b7c6060c4/project/018e5d49-5600-4dd5-a6cd-2e12e45322ea.svg)](https://wakatime.com/badge/user/55c30436-1509-4eb9-9f18-fa9b7c6060c4/project/018e5d49-5600-4dd5-a6cd-2e12e45322ea)

---

## Contents

- [assessment](#assessment)
- [project-vision](#project-vision)
- [using-the-application](#using-the-application)
- [responsive-web-design](#responsive-web-design)
- [project-poster](#project-poster)

---

- [ ] Practice (20%, 20 marks)
  - [x] Interim Video (30%, 6 marks, 2024-01-15) 
  - [ ] Final Presentation (70%, 14 marks, 2024-05-07)

- [ ] Coursework (80%, 80 marks, 2024-04-18)

---

## Assessment

The full coursework specification document and assessment criteria (v5, 2024-04-11) can be found [here](/COMP1004_Assessment_Criteria-v5.pdf).

Your final portfolio comprises the following items:
- A representation of your final project plan. This should illustrate your backlog and sprints.
  - [GitHub Projects: ArrowTrack:](https://github.com/users/corey-richardson/projects/4)
- A complete set of UML diagrams to represent your application.
  - [/06-Diagrams](/06-Diagrams/)
- A completed and finished GitHub repo. The readme file must outline your project.
  - [Project Folder](/00-Project/)
  - [ArrowTrack GitHub Repository](https://github.com/corey-richardson/ArrowTrack)
- A poster illustrating the key features of your application and the architecture.
  - [Poster](/09-Poster/) <!-- UPDATE ME -->
- A reflective account of approximately 500 words considering the issues and challenges
arising from the project.
  - [Included in Submitted Report](/08-Report/Report.pdf)

---

## Project Vision

> This project could be used by archers and archery clubs to track and help maintain the equipment they hold. This would also be useful to track the value of the inventory to assist in insurance calculations, and track the items that may need replacing to help with budgeting.

---

## Using the Application

1. When first opening the single-page application, there will be no items in the database to display.

![SPA with no items to display](/08-Report/readme-res/01-empty_view.png)

2. To add an item, fill out the 'Add a New Item' form with the relevant item information and **Submit**.

![](/08-Report/readme-res/02-AddForm_filled.png)

![](/08-Report/readme-res/03-AddForm_submitted.png)

3. If there are items stored in multiple locations, the combined total value of all items, and the values of items seperated by storage location are displayed.

![](/08-Report/readme-res/04-demonstrate_values.png)

4. To update an item, select it in the *Item to Edit* field of the 'Edit an Existing Item'. Complete the form fields you wish to update with the updated values and **Submit**. 

![](/08-Report/readme-res/05-EditForm_filled.png)

![](/08-Report/readme-res/06-EditForm_submitted.png)

5. The 'Check Out this item?', 'Remove this item?' and 'Update Condition' (Option: 'Unsafe') fields have special behaviour.

'Check Out this item?'
- A truthy value for this field will change the CSS styling for this items container, allowing the user/club member to visually identifier which items are not currently available for use.
- ![](/08-Report/readme-res/07-CheckOut_filled.png)
- ![](/08-Report/readme-res/08-CheckOut_submitted.png)

'Remove this item?'
- A truthy value for this field will remove the item from the database on submission.
- ![](/08-Report/readme-res/09-Remove_filled.png)
- ![](/08-Report/readme-res/10-Remove_submitted.png)

'Update Condition' (Option: 'Unsafe')
- A truthy value for this field will change the CSS styling for this items container, allowing the user/club member to visually identifier which items are not currently safe for use.
- A Club Equipment Officer can use this attribute to identify items in dire need of repair or replacement.
- ![](/08-Report/readme-res/11-Unsafe_filled.png)
- ![](/08-Report/readme-res/12-Unsafe_submitted.png)

---

## Responsive Web Design

The application utilises Flexboxes to cater to a variety of screen sizes. This ensures content is usable, readable and accessible on all platforms.

![](/08-Report/readme-res/13-RWD.gif)

---

## Project Poster

- [Project Poster Directory](/09-Poster/)
- [Project Poster](/09-Poster/) <!-- UPDATE ME -->