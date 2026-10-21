# Day 2 Demo Guide — Fetch API, REST & JSON
**Wed, Oct 14 · ~60 min live coding**

## Goal
Students can fetch data from a real API, turn the JSON into JavaScript objects, display it on the page, and handle loading + errors.

## APIs used (free, no API key, no sign-up)
| API | URL | Used for |
|---|---|---|
| Dog CEO | `https://dog.ceo/api/breeds/image/random` | First fetch — instant, fun win |
| JSONPlaceholder | `https://jsonplaceholder.typicode.com` | A "real" REST API: users, posts, GET + POST |

> ⚠️ **Before class:** open both URLs in your browser to confirm they're up. Have the class Wi-Fi tested — if it's flaky, read the "Offline backup" note at the bottom.

## Files
- `index.html`, `styles.css` — page with 4 demo panels
- `demo-start.js` — skeleton with TODOs
- `demo-finished.js` — complete version

## Run of show

### Part 1 — What is an API? What is JSON? (10 min)
- **API** = a menu a server gives you. You order (request), it serves (response).
- **REST** = a common style: URLs are *things* (`/users`, `/users/3`, `/posts?userId=3`), and **HTTP methods** are *actions*:

| Method | Meaning | Example |
|---|---|---|
| GET | Read | Get all users |
| POST | Create | Add a new post |
| PUT / PATCH | Update | Edit a post |
| DELETE | Delete | Remove a post |

- Paste `https://jsonplaceholder.typicode.com/users/1` into the browser. "That's JSON — it looks like a JS object, but it's **text**."
- Live in the console: `JSON.stringify({ name: "Ada" })` → text; `JSON.parse('{"name":"Ada"}')` → object.
- **Status codes:** 200 OK · 201 Created · 404 Not Found · 500 Server Error.

### Part 2 — Your first fetch: random dog 🐶 (10 min)
1. `fetch(url)` returns a **Promise** (connect to Monday!).
2. `response.json()` is *also* a Promise → two awaits.
3. Put `data.message` into an `<img>`.
4. Open DevTools → **Network tab** → show the request and the JSON response. This is the #1 debugging tool for APIs.

### Part 3 — GET a list & render it (15 min)
1. Fetch `/users` → array of 10 users.
2. `.forEach` → build a card for each (DOM skills from Week 8).
3. Add a **loading** message before, remove it after.
4. Click a user → fetch `/posts?userId=ID` → show their posts. (Query parameters!)

### Part 4 — Errors: `fetch` doesn't throw on 404! (10 min)
1. Fetch `/users/999` → it "works" but returns `{}` and status 404.
2. Key lesson: **fetch only rejects on network failure.** You must check `response.ok` yourself.
3. Write a reusable `getJSON(url)` helper that throws if `!response.ok`.
4. Turn off Wi-Fi (or use a typo domain) → show the network error path.

### Part 5 — POST: send data (10 min)
1. Form with a title + body.
2. `fetch(url, { method: "POST", headers: {...}, body: JSON.stringify(data) })`
3. JSONPlaceholder replies `201` with the new post and `id: 101`. (It's fake — nothing is really saved. Tell students!)

### Wrap-up (5 min)
Draw the flow on the board: **Request → wait (Promise) → Response → check ok → .json() → use data → update DOM**

## Common beginner mistakes
- Forgetting `await` on `response.json()` → you get `Promise {<pending>}`.
- Not checking `response.ok` → silent bugs on 404.
- Forgetting `JSON.stringify` on POST body → server receives `[object Object]`.
- Trying to `console.log(data)` *outside* the async function before it has arrived.
- Opening `index.html` by double-click is fine for these APIs, but recommend **Live Server** in VS Code.

## Offline backup
If the internet dies, switch to Monday's `fakeServer` pattern — the async/await code is identical; only the source of data changes. That's actually a great teaching point.
