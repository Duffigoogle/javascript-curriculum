# Day 2 Activity — The Mood Booster 😄
**~40 min · pairs**

Build a little page with three buttons. Each one fetches from a different free API and shows the result.

| Card | API URL | What the JSON looks like |
|---|---|---|
| 😂 Joke | `https://official-joke-api.appspot.com/random_joke` | `{ "setup": "...", "punchline": "..." }` |
| 💡 Advice | `https://api.adviceslip.com/advice` | `{ "slip": { "id": 12, "advice": "..." } }` |
| 🐱 Cat fact | `https://catfact.ninja/fact` | `{ "fact": "...", "length": 42 }` |

**Step 0:** Paste each URL into your browser first and *look at the JSON*. Where is the text you need? (Hint: advice is nested inside `slip`!)

---

## Exercise 1 — Joke (10 min)
Complete `getJoke()` in `activity.js`:
1. `await fetch(...)` the joke URL
2. `await response.json()`
3. Show the `setup` in the card. Show the `punchline` after 2 seconds (use your `wait()` from Monday 😉).

## Exercise 2 — Advice (10 min)
Complete `getAdvice()`. Careful — the advice text is at `data.slip.advice`.
> 💡 The Advice API caches answers, so add `?t=${Date.now()}` to the end of the URL to get a fresh one each click.

## Exercise 3 — Cat fact + a reusable helper (10 min)
You're writing the same 3 lines over and over. Write a helper:
```js
async function getJSON(url) { ... }  // fetch → check response.ok → return JSON
```
Use it in `getCatFact()`, then go back and refactor Exercises 1 & 2 to use it too.

## Exercise 4 — Loading & errors (10 min)
For every card:
- Show `"Loading..."` while waiting
- Disable the button while loading (so people can't spam-click)
- If something goes wrong, show a friendly error in red
- Test your error handling: change one URL to something broken. Does the page survive?

## Bonus — "Boost me!" 🚀
Make the big **Boost me!** button fetch all three at once with `Promise.all`.

---

### ✅ Check yourself
- [ ] I opened the **Network tab** and found my requests
- [ ] I can explain why we need **two** `await`s (`fetch` and `.json()`)
- [ ] My page shows an error message instead of breaking when a URL is wrong
