# ArrowTrack: Inventory Management System

ArrowTrack: An Inventory Management System for archers and archery clubs.

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![jQuery](https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white)

[![wakatime](https://wakatime.com/badge/github/corey-richardson/ArrowTrack.svg)](https://wakatime.com/badge/github/corey-richardson/ArrowTrack)

---

## Contents

- [assessment](#assessment)
- [project-vision](#project-vision)
- [project-overview](#project-overview)
- [using-the-application](#using-the-application)
- [responsive-web-design](#responsive-web-design)
- [project-poster](#project-poster)

---

## Statuses

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

## Project Overview

As an archer and club committee member myself, I recognised the need for a tool that could be
easily used to track owned items and their conditions for the purpose of maintenance and
budget allocation for replacement equipment, for both individuals and clubs within the archery
community, or even other sports communities.

ArrowTrack was designed with the goal of addressing these needs.

For individuals, the application provides a tool to monitor the condition of their equipment,
ensuring longevity and performance, thus saving money in the long term on damages. For clubs
where club-owned equipment can be spread across multiple indoor and outdoor ranges, or on
loan out to club members trialling different bow setups, the ArrowTrack tool can be used to
manage this in one centralised tool. ArrowTrack’s total cost and by-location cost functionalities
can be especially helpful to club treasurers and equipment officers, assisting in insurance
estimations and budget planning.

---

## License

- [MIT License](/LICENSE)

```
MIT License

Copyright (c) 2023 Corey Richardson

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

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

---

## Project Structure

```
- 00-Project
  - css
    - flexbox.css
    - footer.css
    - form.css
    - header.css
    - rwd_mq.css
    - style.css

  - js
    - addForm.js
    - calculateValue.js
    - editForm.js
    - view.js

  - lib
    - jquery.min.js /* jQuery is included locally as it allows for offline use;
                       this is important for the use case of the project as it
                       is likely for archery ranges to be in areas with poor 
                       signal / low bandwidth. This allows all dependencies to
                       be installed even when the user hasn't already got an
                       instance of jQuery in cache. */

  - res
    - icon.png

  - index.html
```
