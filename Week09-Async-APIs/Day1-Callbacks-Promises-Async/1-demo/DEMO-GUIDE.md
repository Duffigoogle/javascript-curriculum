# Day 1 Demo Guide — Callbacks, Promises & async/await
**Mon, Oct 12 · ~60 min live coding**

## Goal
By the end, students can explain *why* JavaScript needs async code, and read/write the same task three ways: **callbacks → Promises → async/await**.

## The story we use: "The Jollof Kitchen" 🍛
Ordering food is naturally async: you place an order, keep chatting, and the food arrives *later*. We simulate slow steps with `setTimeout`.

| Step | Takes |
|---|---|
| Take order | 1s |
| Cook jollof | 2s |
| Plate & serve | 1s |

## Files
- `index.html` + `styles.css` — a simple "kitchen log" page so output shows on screen *and* in the console.
- `demo-start.js` — skeleton with TODOs you fill in live.
- `demo-finished.js` — complete reference (switch the `<script>` tag in `index.html` to show it).

## Run of show

### Part 1 — Sync vs Async (10 min)
1. Show `console.log("A"); setTimeout(() => console.log("B"), 0); console.log("C");`
2. Ask: *"What prints first?"* → A, C, B.
3. Key idea: **JavaScript does one thing at a time, but it can hand slow work off and come back later.** Analogy: you don't stand at the counter staring at the cook — you take a buzzer and sit down.

### Part 2 — Callbacks (15 min)
1. Write `takeOrder(dish, callback)` — after 1s, it *calls back* with the order.
2. Chain cook and serve inside each other.
3. Point at the indentation: **"callback hell" / pyramid of doom**. Ask: "Where would you handle an error here?"

### Part 3 — Promises (15 min)
1. A Promise = an IOU: *"I promise to give you a value later — or tell you why I couldn't."*
2. Three states: **pending → fulfilled** or **pending → rejected**.
3. Rewrite the steps to `return new Promise((resolve, reject) => ...)`.
4. Chain with `.then()`, catch with `.catch()`, finish with `.finally()`.
5. Show a failure: "We ran out of rice" → `reject(new Error(...))`.

### Part 4 — async/await (15 min)
1. Same promises, nicer syntax: `await` = "wait here for this promise".
2. `await` only works inside an `async` function.
3. Errors → `try / catch`.
4. Bonus: `Promise.all` to cook jollof, plantain and chicken **at the same time** (compare total time!).

### Wrap-up (5 min)
Ask students to fill in: *"A callback is ___. A promise is ___. async/await is ___."*

## Common beginner mistakes to call out
- Forgetting `return` inside `.then()` chains → next `.then` gets `undefined`.
- Using `await` outside an `async` function.
- Expecting `setTimeout(..., 0)` to run immediately.
- Forgetting `.catch()` / `try...catch` → silent "Uncaught (in promise)" errors.
