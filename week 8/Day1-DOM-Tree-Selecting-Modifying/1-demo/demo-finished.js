// =============================================================
// Day 1 Demo (FINISHED VERSION): The DOM Tree · Selecting · Modifying
// To see this version run, change the <script> tag in index.html
// from demo-start.js to demo-finished.js.
// =============================================================

// -------------------------------------------------------------
// STEP 1: Explore the DOM tree
// The browser turns our HTML into a tree of objects (nodes).
// `document` is the root. Every element is a node in the tree.
// -------------------------------------------------------------
console.log("document:", document);
console.log("<body>:", document.body);
console.log("Children of <body>:", document.body.children); // HTMLCollection of element children

const main = document.querySelector("main");
console.log("Parent of <main>:", main.parentElement);           // <body>
console.log("First child of <main>:", main.firstElementChild);  // the <article>
console.log("Next sibling of the card:", main.firstElementChild.nextElementSibling); // the <aside>

// -------------------------------------------------------------
// STEP 2: Select single elements
// getElementById    → by id (fast, one element)
// querySelector     → by ANY CSS selector, returns the FIRST match (or null)
// -------------------------------------------------------------
const card = document.getElementById("profile-card");
const nameHeading = document.querySelector(".card .name");
const role = document.querySelector(".role");
const avatar = document.querySelector(".avatar");
const statusText = document.querySelector("#status-text");

console.log(card, nameHeading, role, avatar, statusText);

// Selecting something that does not exist gives null. Always check!
const missing = document.querySelector(".does-not-exist");
console.log("Missing element:", missing); // null

// -------------------------------------------------------------
// STEP 3: Select many elements
// querySelectorAll returns a static NodeList. It has forEach.
// -------------------------------------------------------------
const skills = document.querySelectorAll(".skill");
console.log("Number of skills:", skills.length);
skills.forEach((skill, index) => {
  console.log(index, skill.textContent);
});

// -------------------------------------------------------------
// STEP 4: Change text content
// textContent → plain text (safe)
// innerHTML   → parses HTML (powerful, but never use it with user input)
// -------------------------------------------------------------
nameHeading.textContent = "Ada Okafor";
role.textContent = "Frontend Developer · Lagos";
document.title = "Ada Okafor · Profile";

// Replace "Photoshop" with "JavaScript"
skills[2].textContent = "JavaScript";

// -------------------------------------------------------------
// STEP 5: Change attributes
// Many attributes are properties: el.src, el.alt, el.href, el.id
// For anything else: getAttribute / setAttribute / removeAttribute
// data-* attributes live on el.dataset
// -------------------------------------------------------------
avatar.src = "https://placehold.co/160x160/2f6be0/ffffff?text=AO";
avatar.alt = "Ada Okafor's avatar";

const link = document.querySelector(".link");
link.href = "https://example.com/ada";
link.setAttribute("target", "_blank");
link.setAttribute("rel", "noopener");

console.log("Status before:", card.dataset.status); // "offline"
card.dataset.status = "online";                      // sets data-status="online"
statusText.textContent = card.dataset.status;

// -------------------------------------------------------------
// STEP 6: Change classes and styles
// Prefer classList (styles live in CSS) over inline el.style
// -------------------------------------------------------------
card.classList.add("online");
statusText.classList.add("is-online");
skills[2].classList.toggle("featured"); // adds it (wasn't there)
console.log("Has featured?", skills[2].classList.contains("featured"));

// Inline style: use for one-off or computed values only
nameHeading.style.letterSpacing = "0.5px";

// -------------------------------------------------------------
// STEP 7: Create, add and remove elements
// createElement → set content → append / prepend / before / after
// remove() deletes an element from the page
// -------------------------------------------------------------
const skillList = document.querySelector(".skills");

const newSkill = document.createElement("li");
newSkill.textContent = "Git";
newSkill.classList.add("skill");
skillList.append(newSkill); // add at the end

const topSkill = document.createElement("li");
topSkill.textContent = "Accessibility";
topSkill.className = "skill featured";
skillList.prepend(topSkill); // add at the start

// Add several items from an array
["React", "Figma"].forEach((name) => {
  const li = document.createElement("li");
  li.className = "skill";
  li.textContent = name;
  skillList.append(li);
});

// Remove the outdated notice
document.getElementById("old-notice").remove();

console.log("Skills now:", skillList.children.length);
