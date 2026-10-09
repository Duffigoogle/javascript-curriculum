// =============================================================
// Day 2 Assignment: Help Centre (FAQ accordion + live search)
// Read ASSIGNMENT.md first. Do not edit index.html.
// =============================================================

const faqList = document.getElementById("faq-list");
const items = document.querySelectorAll(".faq-item");
const searchInput = document.getElementById("search");
const filters = document.getElementById("filters");
const resultCount = document.getElementById("result-count");
const noResults = document.getElementById("no-results");
const allowMultiple = document.getElementById("allow-multiple");
const expandAllBtn = document.getElementById("expand-all");
const collapseAllBtn = document.getElementById("collapse-all");

// Suggested state
let activeCategory = "all";

// PART 1: Write openItem(item) and closeItem(item).
//   Opening means: add class "open", set aria-expanded="true" on the button,
//   and remove the hidden attribute from the answer. Closing does the opposite.


// PART 2: ONE click listener on #faq-list (delegation) that toggles the
//   item whose question was clicked. If "Allow several open" is NOT ticked,
//   close every other item first (accordion behaviour).


// PART 3: Expand all / Collapse all buttons (only affect VISIBLE items).


// PART 4: Live search. On every "input" event, show only items whose
//   question OR answer contains the search text (case-insensitive).


// PART 5: Category filters. ONE click listener on #filters (delegation).
//   Move the "active" class to the clicked button and filter the items.
//   Search and category must work TOGETHER (e.g. "refund" + Payments).


// PART 6: After filtering, update #result-count ("Showing 3 of 8 questions")
//   and show #no-results when nothing matches.


// PART 7: Pressing Escape anywhere closes all items.
