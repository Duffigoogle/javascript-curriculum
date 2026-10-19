# Day 1 Activity — Bus Park Promises 🚌
**~40 min · pairs**

You're building the logic for a bus booking app at a busy motor park. Every "server" call is slow, so you need async code.

Open `index.html` in the browser, open the **Console (F12)**, and work through `activity.js` from top to bottom. Each exercise has a button on the page so you can test it.

---

## Exercise 1 — Predict the order (5 min)
Before you click, write your guess in the comment: which order will the 4 messages appear in?
Then click **Exercise 1** and check. Explain to your partner *why*.

## Exercise 2 — Build `wait(ms)` (5 min)
Write a function `wait(ms)` that returns a Promise which resolves after `ms` milliseconds.
You'll use this helper in every other exercise.

```js
wait(1000).then(() => console.log("1 second later"));
```

## Exercise 3 — Callback → Promise (10 min)
`findSeatCallback(route, callback)` already works using callbacks.
Write `findSeat(route)` that does the same thing but **returns a Promise**:
- Resolve with a seat number if the route exists.
- Reject with `new Error("No bus for that route")` if it doesn't.

Then use it with `.then()` and `.catch()`.

## Exercise 4 — async/await (10 min)
Write `async function bookTrip(route)` that:
1. `await`s `findSeat(route)`
2. `await`s `payForSeat(seat)` (already written for you)
3. Shows `"🎟️ Booked seat X on route Y"` on the page
4. Uses `try/catch` to show any error in red

Test it with `"Port Harcourt → Lagos"` (works) and `"Port Harcourt → Mars"` (fails).

## Exercise 5 — BONUS: Promise.all (10 min)
Check seats on three routes **at the same time** with `Promise.all`. Log how long it took.
Then try `Promise.allSettled` with one bad route — what's the difference?

---

### ✅ You're done when
- [ ] All 4 core exercises run without "Uncaught" errors in the console
- [ ] You can explain to your partner: *What does `resolve` do? What does `reject` do? Why do we need `await`?*
