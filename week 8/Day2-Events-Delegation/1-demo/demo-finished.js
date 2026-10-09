// =============================================================
// Day 2 Demo (FINISHED VERSION): Event Lab
// Change the <script> tag in index.html to demo-finished.js to run this.
// =============================================================

// -------------------------------------------------------------
// STATION 1: click
// element.addEventListener(type, handlerFunction)
// Pass the function itself, don't call it: handleLike, NOT handleLike()
// -------------------------------------------------------------
const likeBtn = document.getElementById("like-btn");
const likeCount = document.getElementById("like-count");
let likes = 0;

function handleLike() {
  likes += 1;
  likeCount.textContent = likes;
  if (likes === 10) {
    likeBtn.textContent = "🔥 On fire!";
  }
}

likeBtn.addEventListener("click", handleLike);

// -------------------------------------------------------------
// STATION 2: input + keyboard events and the EVENT OBJECT
// The browser passes an event object to your handler.
//   event.type   → "input", "keydown", …
//   event.target → the element the event happened on
//   event.key    → which key (keyboard events)
// -------------------------------------------------------------
const nameInput = document.getElementById("name-input");
const namePreview = document.getElementById("name-preview");
const keyLog = document.getElementById("key-log");

nameInput.addEventListener("input", (event) => {
  const value = event.target.value.trim();
  namePreview.textContent = value || "stranger";
});

nameInput.addEventListener("keydown", (event) => {
  keyLog.textContent = `Last key: ${event.key}`;
  if (event.key === "Escape") {
    nameInput.value = "";
    namePreview.textContent = "stranger";
  }
});

// -------------------------------------------------------------
// STATION 3: form submit + preventDefault
// Listen to "submit" on the FORM (not "click" on the button) so that
// pressing Enter also works. preventDefault stops the page reload.
// -------------------------------------------------------------
const signupForm = document.getElementById("signup-form");
const emailInput = document.getElementById("email");
const formMessage = document.getElementById("form-message");

signupForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formMessage.textContent = `✅ Thanks! We'll write to ${emailInput.value}.`;
  signupForm.reset();
});

// -------------------------------------------------------------
// STATION 4: bubbling
// A click on the inner button ALSO fires on its parents, from the
// inside out: inner → middle → outer → … → document.
// event.target        = where the click started (always the inner button)
// event.currentTarget = the element whose listener is running now
// -------------------------------------------------------------
const bubbleLog = document.getElementById("bubble-log");
const stopToggle = document.getElementById("stop-toggle");

function logBubble(event) {
  const li = document.createElement("li");
  li.textContent = `${event.currentTarget.id} heard it (target: ${event.target.id})`;
  bubbleLog.append(li);

  // Save currentTarget in a variable: it becomes null once the event finishes
  const box = event.currentTarget;
  box.classList.add("flash");
  setTimeout(() => box.classList.remove("flash"), 400);
}

["outer", "middle"].forEach((id) => {
  document.getElementById(id).addEventListener("click", logBubble);
});

document.getElementById("inner").addEventListener("click", (event) => {
  bubbleLog.textContent = ""; // clear the log for each new click
  logBubble(event);
  if (stopToggle.checked) {
    event.stopPropagation(); // parents will NOT hear this click
  }
});

// -------------------------------------------------------------
// STATION 5: event delegation
// Instead of one listener per <li> (which would miss NEW items),
// put ONE listener on the parent <ul> and check event.target.
// closest() walks up from the target to find the nearest match.
// -------------------------------------------------------------
const fruitList = document.getElementById("fruit-list");
const fruitLog = document.getElementById("fruit-log");
const addFruitForm = document.getElementById("add-fruit-form");
const fruitInput = document.getElementById("fruit-input");

fruitList.addEventListener("click", (event) => {
  const item = event.target.closest("li");
  if (!item || !fruitList.contains(item)) return; // clicked the gap between chips

  const name = item.querySelector("span").textContent;

  // Was the ✕ button clicked?
  if (event.target.closest(".remove")) {
    item.remove();
    fruitLog.textContent = `Removed ${name}.`;
    return;
  }

  // Otherwise: select the chip (only one at a time)
  fruitList.querySelectorAll("li.selected").forEach((li) => li.classList.remove("selected"));
  item.classList.add("selected");
  fruitLog.textContent = `Selected ${name}.`;
});

function createFruitItem(name) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = name;
  const removeBtn = document.createElement("button");
  removeBtn.type = "button";
  removeBtn.className = "remove";
  removeBtn.textContent = "✕";
  removeBtn.setAttribute("aria-label", `Remove ${name}`);
  li.append(span, " ", removeBtn);
  return li;
}

addFruitForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = fruitInput.value.trim();
  if (!name) return;
  fruitList.append(createFruitItem(name)); // works immediately thanks to delegation
  fruitLog.textContent = `Added ${name}. Try clicking it!`;
  fruitInput.value = "";
  fruitInput.focus();
});

// -------------------------------------------------------------
// BONUS (talk about it, optional to type)
// { once: true } runs a listener a single time, then removes it.
// removeEventListener needs the SAME function reference.
// -------------------------------------------------------------
document.addEventListener(
  "click",
  () => console.log("👋 First click anywhere on the page (this only logs once)"),
  { once: true }
);
