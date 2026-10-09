# Day 1 Class Activity: Fix the Recipe Card

**Format:** pairs (one types, one guides, swap after Task 5) · **Time:** 25 minutes · **Review:** 10 minutes as a class

## The scenario

A food blog published a Jollof Rice recipe, but the page went live with placeholder content, a spammy ad and missing ingredients. You can't edit the HTML. You have to fix everything with JavaScript.

## How to start

1. Open `index.html` in your browser (or with Live Server).
2. Open `activity.js` in your editor and the browser console (F12).
3. Complete the TODO tasks in order. Refresh the page after each one to check it.

## Tasks

| # | What to do | Skills practised |
| --- | --- | --- |
| 1 | Set the title to **Jollof Rice** and the tab title to **Jollof Rice · Recipe** | `querySelector`, `textContent`, `document.title` |
| 2 | Servings **4**, time **45 mins** | `getElementById` |
| 3 | Fix the photo `src` and write a helpful `alt` | attributes |
| 4 | Remove the ad banner | `remove()` |
| 5 | Add class `spicy` to every ingredient containing "pepper" | `querySelectorAll`, `forEach`, `classList` |
| 6 | Add "Chicken stock" and "Bay leaves" with class `new-item` | `createElement`, `append` |
| 7 | Show the ingredient count, for example "(7 items)" | `.length`, template literals |
| 8 | Add a 4th step | `createElement`, `append` |
| 9 | Update the note; set `data-difficulty="medium"` | `textContent`, `dataset` |
| 10 | Add class `done` to the recipe card | `classList.add` |
| ⭐ | Log the `<h2>` before the ingredient list using tree navigation only | `previousElementSibling` |

## What "done" looks like

- The title says Jollof Rice and the ad has gone.
- The two pepper ingredients are red with a 🌶️.
- The list shows 7 ingredients, the last two highlighted green.
- The heading reads "Ingredients (7 items)".
- The card has a green border.

## Discussion questions (class review)

1. Which selector did you use for Task 5, and why `querySelectorAll` instead of `querySelector`?
2. Task 7: did you count before or after Task 6? Why does the order matter?
3. When would `innerHTML` have been tempting here, and why is `createElement` safer?
