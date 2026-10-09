# Week 8: JavaScript DOM Manipulation & Events

Complete teaching pack for one week (three sessions): lecture slides, live demos, in-class activities, take-home assignments and instructor solutions. Everything is plain HTML, CSS and vanilla JavaScript, with no build tools or libraries.

| Day | Date | Topic | Assignment due |
| --- | --- | --- | --- |
| 1 | Mon, Oct 5 | The DOM tree; selecting and modifying elements | Wed, Oct 7 |
| 2 | Wed, Oct 7 | Event listeners and event handling; event delegation | Fri, Oct 9 |
| 3 | Fri, Oct 9 | Building an interactive UI project (to-do list) | Mon, Oct 12 |

## What's inside

```
Week08-JS-DOM-Events/
├── 00-Lecture-Slides/                 PowerPoint decks for each day (speaker notes included)
├── Day1-DOM-Tree-Selecting-Modifying/
│   ├── 1-demo/        Profile Card Makeover (DEMO-GUIDE.md, demo-start.js, demo-finished.js)
│   ├── 2-activity/    Fix the Recipe Card (ACTIVITY.md + starter)
│   └── 3-assignment/  Gadget Store (ASSIGNMENT.md with rubric + starter/)
├── Day2-Events-Delegation/
│   ├── 1-demo/        Event Lab: 5 stations
│   ├── 2-activity/    Colour Palette Picker
│   └── 3-assignment/  Help Centre: FAQ accordion + live search
├── Day3-Interactive-UI-Todo-Project/
│   ├── 1-demo/        Build a to-do list step by step
│   ├── 2-activity/    Level Up the To-Do List (progress, mark all, no duplicates, edit)
│   └── 3-assignment/  Spendwise Expense Tracker (mini project)
└── instructor-solutions/              Working solutions for every activity and assignment
    ├── Day1/ activity-solution/, assignment-solution/
    ├── Day2/ activity-solution/, assignment-solution/
    └── Day3/ activity-solution/, assignment-solution/
```

## Suggested session plan (about 2 hours)

| Block | Time | Material |
| --- | --- | --- |
| Lecture | 30–35 min | `00-Lecture-Slides/DayN-…pptx` |
| Live demo | 25–45 min | `1-demo/` (follow `DEMO-GUIDE.md`) |
| Class activity (pairs) | 25–35 min | `2-activity/` |
| Review + assignment briefing | 15–20 min | `2-activity/ACTIVITY.md` review questions, `3-assignment/ASSIGNMENT.md` |

## How to run any example

1. Open the folder in VS Code.
2. Right-click `index.html` → **Open with Live Server** (recommended), or double-click the file to open it in a browser.
3. Open DevTools (F12) and keep the **Console** visible.

Each demo loads `demo-start.js`, the empty file you type into live. To show the finished version, change the `<script>` tag in `index.html` to `demo-finished.js`.

Notes:
- Some placeholder images load from placehold.co, so the internet is needed for them. Everything works without them.
- The clipboard (Day 2 activity) and URL syncing (Day 2 solution) work best through Live Server rather than `file://`.

## Sharing with students

Share everything **except** the `instructor-solutions/` folder. Release solutions after each deadline if you wish.

## Testing

Every demo and solution was run in a headless Chromium browser with an automated check of its features (82 checks, all passing), and every starter page loads with no console errors.
