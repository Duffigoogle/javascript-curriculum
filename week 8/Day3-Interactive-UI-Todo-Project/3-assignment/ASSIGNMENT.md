# Day 3 Assignment: Spendwise Expense Tracker (Mini Project)

**Topic:** Building an interactive UI with vanilla JavaScript
**Due:** Monday, Oct 12, before class · **Estimated time:** 3–4 hours · **Work:** individual

## Brief

Build **Spendwise**, a small expense tracker that brings together everything from this week: selecting and creating elements (Monday), events and delegation (Wednesday), and the **state → render** pattern from our to-do app (Friday). The HTML and CSS are provided in `starter/`. You write `app.js`.

## Requirements

### 1. State and storage
- Keep all expenses in **one array of objects**: `{ id, description, amount, category, date }`. `amount` must be a **number**.
- Save to `localStorage` after every change and load on startup. Guard `JSON.parse` with `try/catch`.

### 2. Add an expense (form)
- Listen for `submit` and call `preventDefault()`.
- **Validate every field**, showing a message under each invalid one and adding the `invalid` class:
  - Description: required, at least 3 characters after trimming
  - Amount: required, a number greater than 0
  - Category: required
  - Date: required, and not in the future
- Clear a field's error as soon as the user fixes it (`input` / `change` events).
- On success: add to state, reset the form, set the date back to today, and focus the description.

### 3. Render the list
- Build each `<li class="expense">` with `createElement` and `textContent`, following the structure in `index.html`.
- Use the provided `formatNaira()` and `formatDate()` helpers.
- Show `#empty-state` when nothing is visible, with a different message when a filter hides everything.

### 4. Delete (delegation)
- **One** click listener on `#expense-list` handles every delete button, including ones for expenses added later.

### 5. Filter and sort
- `#filter-category` (`change` event) shows one category or all of them.
- `#sort`: newest, oldest, highest or lowest amount. Don't change the order of the original array: sort a **copy**.
- When filtered, show the filtered total, for example "Food total: ₦7,500".

### 6. Summary stats (calculated from state)
- **Total spent** across all expenses, the **number** of expenses, and the **biggest category** by amount ("None" when empty).

## Stretch goals (extra credit)

- Edit an expense (fill the form with its values; the button changes to "Save changes").
- A simple bar chart of spending per category, using `<div>`s with widths in %.
- "Undo delete" for 5 seconds after deleting.
- Export to CSV with a download link (`Blob` + `URL.createObjectURL`).

## Submission

1. Push to GitHub and enable **GitHub Pages** so it runs live.
2. Submit both links: the repository and the live site.
3. In your README, write 3–5 sentences on the hardest bug you hit and how you fixed it.

## Grading rubric (40 points)

| Criteria | Points |
| --- | --- |
| State is the single source of truth; the UI is always drawn by `render()` | 6 |
| Form validation: all 4 rules, messages and `invalid` class, errors clear on fix | 8 |
| List rendered safely with `createElement` / `textContent` and correct formatting | 6 |
| Delete works through one delegated listener | 4 |
| Filter and sort work together; sorting uses a copy | 5 |
| Summary stats and filtered total are correct and always up to date | 5 |
| `localStorage` persistence with safe loading | 3 |
| Code quality: named functions, comments, no repeated code, deployed live | 3 |
| **Stretch goals** | up to +6 |
