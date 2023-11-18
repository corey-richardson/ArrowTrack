When the screen width is greater than `~992` (Subject to change), the webpage should be layed out as so...

> `float`, `clear`, `@media`

![](/05-Design/res/01-FullWidth.jpg)

When the screen width is less than this critical value, the webpage should respond into a single column...

![](/05-Design/res/02-NarrowWidth.jpg)

See `repo:2023-web-development-bootcamp` for notes and examples.

> *Implemented 18/11/23 ✔️*

---

![](/05-Design/res/2023-11-18_Ultrawide.png)
> Ultrawide Display (e.g desktop, > 992px) <br>
> The View Page section maintains a full width. The Add Page and Edit Page sections share half of the width each. <br>
> The Navigation Bar found in the Header and External Links found in the Footer are inline.

![](/05-Design/res/2023-11-18_Wide_a.png)
![](/05-Design/res/2023-11-18_Wide_b.png)
> Wide Display (e.g laptop, > 992px) <br>
> The View Page section maintains a full width. The Add Page and Edit Page sections share half of the width each. <br>
> The Navigation Bar found in the Header and External Links found in the Footer are inline.

![](/05-Design/res/2023-11-18_Narrow_a.png)
![](/05-Design/res/2023-11-18_Narrow_b.png)
> Narrow Display (e.g. mobile, < 992px) <br>
> All sections are moved into a single column. <br>
> The Navigation Bar found in the Header and External Links found in the Footer move into a single column and lose their seperating borders.

---

![](/05-Design/res/03-Ultrawide.jpg)

For ultrawide displays, all three sections could be displayed alongside each other. Try a value of ~2500px.

Work in the [`ultrawide`](https://github.com/corey-richardson/COMP1004-Coursework/tree/ultrawide) branch. 