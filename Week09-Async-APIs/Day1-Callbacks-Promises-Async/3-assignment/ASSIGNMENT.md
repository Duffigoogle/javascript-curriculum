# Day 1 Assignment — Student Dashboard Loader 🎓
**Due: before Wednesday's class (Oct 14)**

Real apps don't have their data instantly — they ask a server and wait. Today you'll build a dashboard that loads data from a **fake server** (we'll swap it for a real API on Wednesday!).

## What's provided (`starter/`)
- `index.html` — the dashboard layout (profile card, courses list, announcements)
- `styles.css` — styling, including a `.loading` spinner and `.error` box
- `app.js` — a **fake server** (`fakeServer`) with three functions that return Promises:
  - `fakeServer.getProfile()` → resolves after ~1s
  - `fakeServer.getCourses()` → resolves after ~1.5s
  - `fakeServer.getAnnouncements()` → resolves after ~2s, but **fails 30% of the time** 😈

Do **not** edit the `fakeServer` code. Write your code under the `YOUR CODE` line.

## Requirements

### Core (must do)
1. **Loading states** — while each section is loading, show "Loading..." (use the `loading` class).
2. **async/await** — write an `async function loadDashboard()` that loads all three sections.
3. **Render the data** into the page with the DOM (you know this from Week 8!):
   - Profile: name, track, and avatar emoji
   - Courses: a `<li>` for each course with its progress %
   - Announcements: a `<li>` for each announcement
4. **Error handling** — wrap your awaits in `try/catch`. If announcements fail, show the error message in that section (use the `error` class). The rest of the page must still work!
5. **Retry button** — clicking "Reload Dashboard" runs `loadDashboard()` again.

### Stretch (pick at least one)
- ⚡ Load all three sections **at the same time** with `Promise.all` or `Promise.allSettled`. Show the total load time on the page.
- 🔁 Auto-retry announcements up to 3 times before showing the error.
- ⏱️ Add a "Last updated: 10:42:05" timestamp after each successful load.

## Submission
- Push to GitHub under `week-09/day-1-dashboard`
- Paste your repo link in the class channel
- In your README, answer in your own words: **"What's the difference between `Promise.all` and `Promise.allSettled`?"**

## Grading (10 pts)
| Criteria | Pts |
|---|---|
| Loading states shown for each section | 2 |
| Uses async/await correctly | 2 |
| Data rendered correctly to the DOM | 2 |
| Errors handled — page doesn't break | 2 |
| Retry button works | 1 |
| Stretch goal + README answer | 1 |
