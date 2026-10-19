# Week 9 — Asynchronous JavaScript, APIs & Mini Project 2

| Day | Topic | Demo | Activity | Assignment |
|---|---|---|---|---|
| **Mon, Oct 12** | Callbacks, Promises, async/await | 🍛 The Jollof Kitchen | 🚌 Bus Park Promises | 🎓 Student Dashboard Loader (fake server) |
| **Wed, Oct 14** | Fetch API, REST, JSON | 🐶 Dogs + JSONPlaceholder users & POST | 😄 Mood Booster (jokes, advice, cat facts) | 🍲 Recipe Finder (TheMealDB) |
| **Fri, Oct 16** | Mini Project 2 build & review | 🌦️ Weather Now (Open-Meteo) | Plan → Build → Peer Review | 🚀 **Mini Project 2: API-Driven Web App** |

## Each day's folder
```
DayX-.../
├── 1-demo/                 DEMO-GUIDE.md, index.html, styles.css, demo-start.js, demo-finished.js
├── 2-activity/             ACTIVITY.md + files students work in
├── 3-assignment/           ASSIGNMENT.md + starter/
└── instructor-solutions/   activity + assignment solutions
```
To show a finished demo, change the `<script>` in `1-demo/index.html` from `demo-start.js` to `demo-finished.js`.

## How the week builds
- **Monday** uses `setTimeout` only — no internet needed. The assignment's `fakeServer` returns Promises just like `fetch`.
- **Wednesday** swaps the fake server for real APIs. Same async/await, real data. Key lesson: `fetch` doesn't throw on 404 — check `response.ok`.
- **Friday** puts it together: two dependent requests, all three UI states, then students build their own.

## APIs used (all free, no API key)
Dog CEO · JSONPlaceholder · Official Joke API · Advice Slip · Cat Facts · TheMealDB (test key `1`) · Open-Meteo · Random User.
More options for students are listed in `Day3-.../3-assignment/ASSIGNMENT.md`.

## ✅ Before each class
- Open every API URL used that day in a browser — free APIs occasionally go down.
- Recommend the **Live Server** extension in VS Code.
