# 🚀 Mini Project 2 — API-Driven Web App
**Started in class: Fri, Oct 16 · Due: ____________ (instructor to set)**

## The brief
Build a web app that **fetches real data from a public API** and lets the user interact with it.
This is your chance to put Weeks 6–9 together: HTML/CSS, DOM, events, and async JavaScript.

## ✅ Requirements (must have)
1. **Uses a real public API** with `fetch` and `async/await`.
2. **Renders the data** into the page with the DOM (cards, list, table — your choice).
3. **User interaction** — at least ONE of: search box, filter/category buttons, "load another" button, click-for-details.
4. **Three states** handled and visible to the user:
   - ⏳ **Loading** ("Loading...", spinner, or disabled button)
   - 🤷 **Empty** ("No results for 'xyz'")
   - ❌ **Error** (friendly message — the page must not break)
5. **A reusable fetch helper** (e.g. `getJSON(url)`) that checks `response.ok`.
6. **Responsive** — usable on a phone screen.
7. **README.md** with: app name, one-line description, screenshot, API used, live link.
8. **Deployed** on GitHub Pages (or Netlify / Vercel).

## ⭐ Stretch ideas (for extra credit — pick any)
- Save favourites/history with `localStorage`
- Use **two endpoints** that depend on each other (like the Weather demo)
- Load several things at once with `Promise.all`
- Pagination or "Load more"
- Debounced live search (search as you type)
- Dark mode toggle

## 🌍 Free APIs you can use (no key, no sign-up)
> Always open the URL in your browser first to look at the JSON.

| API | Try this URL | Idea |
|---|---|---|
| **TheMealDB** | `https://www.themealdb.com/api/json/v1/1/search.php?s=rice` | Recipe finder, meal planner |
| **Open-Meteo** | `https://geocoding-api.open-meteo.com/v1/search?name=Abuja&count=1` | Weather app, "should I carry umbrella?" |
| **Open Trivia DB** | `https://opentdb.com/api.php?amount=10&type=multiple` | Quiz game with score |
| **Free Dictionary** | `https://api.dictionaryapi.dev/api/v2/entries/en/hello` | Dictionary / word-of-the-day |
| **Open Library** | `https://openlibrary.org/search.json?q=things+fall+apart` | Book search, reading list |
| **Random User** | `https://randomuser.me/api/?results=12` | Team directory, contact cards |
| **JSONPlaceholder** | `https://jsonplaceholder.typicode.com/posts` | Mini blog reader, todo viewer |
| **Dog CEO** | `https://dog.ceo/api/breeds/list/all` | Dog breed gallery |
| **Art Institute of Chicago** | `https://api.artic.edu/api/v1/artworks/search?q=mask&fields=id,title,image_id,artist_display` | Art gallery explorer |
| **Official Joke API** | `https://official-joke-api.appspot.com/random_ten` | Joke app with reveal |
| **Bible API** | `https://bible-api.com/john%203:16` | Daily verse app |

Want to use an API that needs a key? Ask an instructor first — and **never push your key to GitHub**.

## 🏁 Starter files
`starter/` gives you a clean template with a `getJSON` helper, status messages, and spots to fill in. You can use it or start from scratch.

## 📝 Submission
1. GitHub repo named `mini-project-2-<your-app-name>`
2. Live link (GitHub Pages)
3. Your completed **project plan** (`2-activity/project-plan-template.md`) in the repo
4. Post both links in the class channel

## 📊 Grading rubric (100 pts)
| Area | What we look for | Pts |
|---|---|---|
| **API & async** | `fetch` + `async/await`, `getJSON` helper checks `response.ok`, `try/catch` | 25 |
| **Rendering** | Data shown clearly and correctly with the DOM | 20 |
| **Interaction** | At least one meaningful user interaction that triggers new data/UI | 15 |
| **States** | Loading, empty and error all handled and visible | 15 |
| **Design & responsiveness** | Clean, readable, works on mobile | 10 |
| **Code quality** | Clear names, small functions, no console errors, no leftover junk | 10 |
| **README & deploy** | README complete, live link works | 5 |
| **Stretch** | Bonus features | +5 |
