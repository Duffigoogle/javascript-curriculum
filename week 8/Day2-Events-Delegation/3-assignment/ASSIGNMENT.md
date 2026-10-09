# Day 2 Assignment: Help Centre (FAQ Accordion + Live Search)

**Topic:** Event listeners, event handling, event delegation
**Due:** before Friday's class (Oct 9) · **Estimated time:** 2 hours · **Work:** individual

## Brief

CodeCamp Academy's help page has 8 FAQs, but nothing works yet. Make it interactive with vanilla JavaScript. The HTML and CSS are finished, so **only edit `app.js`**.

## Requirements

1. **Open / close helpers.** Write `openItem(item)` and `closeItem(item)`. Opening adds the class `open`, sets `aria-expanded="true"` on the question button and removes `hidden` from the answer. Closing reverses all three.
2. **Accordion with delegation.** Add **one** click listener on `#faq-list` that toggles the clicked item. By default only one item can be open at a time. When "Allow several open" is ticked, several can stay open.
3. **Expand all / Collapse all.** These affect only the items currently visible.
4. **Live search.** As the user types (`input` event), show only items whose question **or** answer contains the text, ignoring upper and lower case.
5. **Category filter.** Add **one** click listener on `#filters`. Move the `active` class to the clicked button. Search and category must combine: searching "refund" while "Courses" is active shows nothing.
6. **Feedback.** Keep `#result-count` accurate ("Showing 3 of 8 questions"). Show `#no-results` when nothing matches.
7. **Keyboard.** Pressing **Escape** closes every item.

## Rules

- At most **two** `click` listeners for the list and the filters combined, using delegation. No listener per item.
- No `innerHTML` for user-typed text.
- No `onclick=""` attributes in HTML.

## Stretch goals (extra credit)

- Highlight the matched search text inside the question with `<mark>`. Build it with `createElement` and text nodes, not `innerHTML`.
- Put the search text in the URL (`?q=refund`) and restore it when the page loads (`URLSearchParams`).
- Remember the last open question with `localStorage`.

## Submission

Submit a GitHub repository link (or zip) plus a 30–60 second screen recording showing search, filters, the accordion and the Escape key.

## Grading rubric (25 points)

| Criteria | Points |
| --- | --- |
| Accordion works through delegation; one-at-a-time mode and "allow several" both work | 6 |
| `aria-expanded`, `hidden` and the `open` class always stay in sync | 3 |
| Live search is case-insensitive and checks questions and answers | 4 |
| Category filter uses delegation and combines with search | 4 |
| Result count and "no results" message are accurate | 3 |
| Expand / Collapse all respect the current filter; Escape closes all | 3 |
| Code quality: small named functions, no repeated logic, comments | 2 |
| **Stretch goals** | up to +4 |
