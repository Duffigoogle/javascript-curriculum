# Day 3 Demo Guide: Build a To-Do List

**Time:** 40–45 minutes · **Files:** `index.html`, `styles.css`, `demo-start.js` (type here), `demo-finished.js` (reference)

**Goal:** put Monday (DOM) and Wednesday (events) together into one real app, and introduce the pattern every front-end framework uses:

```
STATE (array of objects) → render() draws the page → an event changes STATE → render() again
```

## Build order

| Step | Build | Key teaching point |
| --- | --- | --- |
| 1 | Select elements | Same as Monday: grab everything once at the top. |
| 2 | `let todos = []` with `{ id, text, completed }` objects | "The array is the truth. The page is just a picture of the array." |
| 3 | `createTodoElement()` + `render()` | Hard-code 2 sample tasks in the array first, so render has something to draw. `textContent` keeps user input safe. |
| 4 | Form `submit` → push → `render()` | Validation: trim, block empty input, show an error, clear it on `input`. |
| 5 | Delete with `click` delegation; toggle with `change` delegation | `li.dataset.id` links the DOM back to state. Update the array, never just the DOM. |
| 6 | Filter buttons | The filter is state too (`currentFilter`). `render()` decides what to show. |
| 7 | Items left, Clear completed | Derived values are calculated inside `render()`, never stored separately. |
| 8 | `localStorage` save + load | It stores strings only, hence `JSON.stringify` / `JSON.parse`. Wrap the parse in `try/catch`. Refresh the page to show tasks survive. |

## Moments to pause and ask

- After Step 3: "If I add a task by pushing to the array, does it appear? Why not?" *(we didn't call render)*
- After Step 5: "Why do we store `id` and not use the array index?" *(indexes shift after deleting or filtering)*
- After Step 8: "Open DevTools → Application → Local Storage. What does our data look like?"

## Common mistakes

- Updating the DOM but not the array (or the reverse), so the two get out of sync.
- `dataset.id` is a **string**. Compare with `Number(li.dataset.id)`.
- Calling `render()` before the functions it uses are defined. Function declarations are hoisted, but `const` arrow functions are not.
- Re-adding event listeners inside `render()`, so every click fires several times. Delegation means listeners are added **once**.
