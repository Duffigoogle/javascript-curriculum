# Day 1 Demo Guide: Profile Card Makeover

**Time:** about 25 minutes · **Files:** `index.html`, `styles.css`, `demo-start.js` (type here), `demo-finished.js` (reference)

**Goal:** turn a generic profile card into "Ada Okafor's" card using only JavaScript, while students watch the page and the console change after every step.

## Before class

- Open `index.html` with Live Server (VS Code) or straight in the browser.
- Open DevTools: **Elements** tab and **Console** tab side by side.
- Have `demo-finished.js` open in a second tab in case you get stuck.

## Step-by-step

| Step | Type this (see `demo-finished.js`) | Say this |
| --- | --- | --- |
| 1. Explore the tree | `console.log(document.body.children)`, `parentElement`, `firstElementChild`, `nextElementSibling` | "HTML becomes a tree of objects. Every tag is a node with a parent, children and siblings." Point to the same structure in the Elements tab. |
| 2. Select one | `getElementById`, `querySelector(".card .name")` | "`querySelector` takes any CSS selector you already know. It returns the first match, or `null`." Show the `null` case. |
| 3. Select many | `querySelectorAll(".skill")` + `forEach` | "You get a NodeList. It looks like an array and has `forEach`, but it is not a full array." |
| 4. Change text | `textContent = "Ada Okafor"` | "`textContent` is safe. `innerHTML` parses HTML, so never put user input into it." |
| 5. Attributes | `avatar.src`, `alt`, `setAttribute`, `dataset.status` | "Most attributes are properties. `data-*` attributes appear on `dataset`." Show the attribute changing live in the Elements tab. |
| 6. Classes & styles | `classList.add / toggle / contains`, `style.letterSpacing` | "Keep styling in CSS and switch classes with JS. Use `style` only for one-off values." |
| 7. Create & remove | `createElement`, `append`, `prepend`, `remove()` | "Three moves: create it, fill it, attach it. Nothing appears until you attach it." |

## Check for understanding (ask during the demo)

1. What does `querySelector` return when nothing matches? *(null)*
2. What is the difference between `textContent` and `innerHTML`? *(text vs parsed HTML; safety)*
3. Why prefer `classList.add("online")` over `style.borderColor = "green"`? *(styles stay in CSS; easy to undo; reusable)*
4. After `createElement("li")`, why don't we see it yet? *(it is not attached to the tree)*

## Common mistakes to point out

- Running the script before the HTML exists. Keep `<script>` at the end of `<body>` or use `defer`.
- Forgetting the dot or hash: `querySelector("skill")` looks for a `<skill>` tag.
- Calling `.textContent` on a NodeList instead of on one element.
