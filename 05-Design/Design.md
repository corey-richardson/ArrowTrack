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

Work in the [`ultrawide`](https://github.com/corey-richardson/ArrowTrack/tree/ultrawide) branch. 

> *Implemented 18/11/23 ✔️*

The webpage now has "critical values" at widths `992px` and `2560px`. These are the values where the webpage will switch between the narrow/moble, wide and ultrawide layouts.

## `991px`
![](/05-Design/res/2023-11-18_991px.png)
Uses the narrow/mobile layout. All sections are listed in a single column. The Header Navigation Bar and Footer External Links are listed in a single column.

## `992px`
![](/05-Design/res/2023-11-18_992px.png)
Uses the wide layout. The View Page section holds 100% of the screen width whilst the Add Section and Edit Section share the screen width equally. The Header Navigation Bar and Footer External Links are listed in a single *row* and get seperated by a left border (except first item).

## `2559px`
![](/05-Design/res/2023-11-18_2559px.png)
Same as previous, next critical value has not been reached.

## `2560px`
![](/05-Design/res/2023-11-18_2560px.png)
Uses the ultrawide layout. All sections share the screen width equally.