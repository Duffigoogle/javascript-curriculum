# Day 3 Class Activity: Level Up the To-Do List

**Format:** pairs · **Time:** 35 minutes · **Review:** 10 minutes (two pairs demo their app)

## The scenario

The to-do app we built together works, but our "users" have asked for four upgrades. `activity.js` contains the finished class app. Each new feature is marked `TODO (Task A–D)`.

Remember the pattern: **change the state → `render()`**. Don't patch the page by hand.

## Tasks

| Task | Feature | You'll practise |
| --- | --- | --- |
| A | **Progress bar:** the bar width shows the % done, plus "3 of 5 done" | derived values, `style.width` |
| B | **Mark all complete / Mark all active** button that flips every task and updates its own label | `every()`, `forEach()`, state updates |
| C | **No duplicates:** block a task whose text already exists, ignoring case, and show an error | `some()`, `toLowerCase()`, validation |
| D | **Double-click to edit:** the text becomes an input. Enter or blur saves; Escape cancels | `dblclick`, `keydown`, `blur`, `replaceWith()` |

Suggested order: A → C → B → D (D is the hardest).

## Test checklist

- [ ] Add 4 tasks and complete 1: the bar is at 25% and reads "1 of 4 done".
- [ ] "Mark all complete" ticks everything, then the button changes to "Mark all active".
- [ ] Adding "buy milk" when "Buy Milk" exists shows the duplicate error.
- [ ] Double-click a task, change the text, press Enter: it's saved, even after a page refresh.
- [ ] Double-click, then press Escape: the original text comes back.
- [ ] Double-click and clear all the text, then press Enter: the original text stays.

## Review questions

1. In Task D, why can saving on `blur` *and* on Enter cause a double save? How did you prevent it?
2. Where did you calculate the progress %: in state, or inside `render()`? Why?
3. What would go wrong if you added the list's `dblclick` listener inside `render()`? *(A new copy is added on every render, so one double-click runs the handler many times.)*
