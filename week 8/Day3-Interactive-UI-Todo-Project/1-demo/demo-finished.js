// =============================================================
// Day 3 Demo (FINISHED VERSION): To-Do List with vanilla JavaScript
// Pattern: STATE  →  RENDER  →  EVENTS update state  →  RENDER again
// =============================================================

// -------------------------------------------------------------
// STEP 1: Select elements
// -------------------------------------------------------------
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const formError = document.getElementById("form-error");
const list = document.getElementById("todo-list");
const filtersBar = document.getElementById("filters");
const emptyState = document.getElementById("empty-state");
const itemsLeft = document.getElementById("items-left");
const clearCompletedBtn = document.getElementById("clear-completed");

const STORAGE_KEY = "week8-todos";

// -------------------------------------------------------------
// STEP 2: State: the single source of truth.
// We never "read" tasks back from the page. The page is drawn FROM this.
// -------------------------------------------------------------
let todos = loadTodos();
let currentFilter = "all"; // "all" | "active" | "completed"

// -------------------------------------------------------------
// STEP 3: render(): draw the page from state
// -------------------------------------------------------------
function createTodoElement(todo) {
  const li = document.createElement("li");
  li.className = "todo-item";
  li.dataset.id = todo.id;
  if (todo.completed) li.classList.add("completed");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "toggle";
  checkbox.id = `todo-${todo.id}`;
  checkbox.checked = todo.completed;

  checkbox.setAttribute("aria-label", `Mark "${todo.text}" as done`);

  const text = document.createElement("span");
  text.className = "todo-text";
  text.textContent = todo.text; // textContent keeps user input safe

  const deleteBtn = document.createElement("button");
  deleteBtn.type = "button";
  deleteBtn.className = "delete";
  deleteBtn.textContent = "✕";
  deleteBtn.setAttribute("aria-label", `Delete task: ${todo.text}`);

  li.append(checkbox, text, deleteBtn);
  return li;
}

function getVisibleTodos() {
  if (currentFilter === "active") return todos.filter((t) => !t.completed);
  if (currentFilter === "completed") return todos.filter((t) => t.completed);
  return todos;
}

function render() {
  list.textContent = ""; // clear everything, then rebuild

  const visible = getVisibleTodos();
  visible.forEach((todo) => list.append(createTodoElement(todo)));

  // Empty state message changes with the filter
  emptyState.hidden = visible.length > 0;
  if (todos.length === 0) emptyState.textContent = "Nothing here yet. Add your first task above.";
  else if (currentFilter === "completed") emptyState.textContent = "No completed tasks yet.";
  else emptyState.textContent = "All done! 🎉";

  // STEP 7: footer
  const remaining = todos.filter((t) => !t.completed).length;
  itemsLeft.textContent = `${remaining} ${remaining === 1 ? "item" : "items"} left`;
  clearCompletedBtn.disabled = !todos.some((t) => t.completed);

  saveTodos(); // STEP 8: every render saves the latest state
}

// -------------------------------------------------------------
// STEP 4: Add a task
// -------------------------------------------------------------
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = input.value.trim();

  if (text === "") {
    formError.textContent = "Please type a task first.";
    input.focus();
    return;
  }

  todos.push({ id: Date.now(), text, completed: false });
  formError.textContent = "";
  input.value = "";
  input.focus();
  render();
});

// Clear the error as soon as the user starts typing again
input.addEventListener("input", () => {
  formError.textContent = "";
});

// -------------------------------------------------------------
// STEP 5: Toggle + delete with ONE listener (event delegation)
// Read the id from the <li>, update STATE, then render().
// -------------------------------------------------------------
list.addEventListener("click", (event) => {
  const li = event.target.closest(".todo-item");
  if (!li) return;
  const id = Number(li.dataset.id);

  if (event.target.closest(".delete")) {
    todos = todos.filter((t) => t.id !== id);
    render();
  }
});

// Checkboxes fire "change". It bubbles too, so delegation works the same way.
list.addEventListener("change", (event) => {
  if (!event.target.matches(".toggle")) return;
  const id = Number(event.target.closest(".todo-item").dataset.id);
  const todo = todos.find((t) => t.id === id);
  todo.completed = event.target.checked;
  render();
});

// -------------------------------------------------------------
// STEP 6: Filters
// -------------------------------------------------------------
filtersBar.addEventListener("click", (event) => {
  const button = event.target.closest(".filter");
  if (!button) return;

  currentFilter = button.dataset.filter;
  filtersBar.querySelectorAll(".filter").forEach((b) => {
    const isActive = b === button;
    b.classList.toggle("active", isActive);
    b.setAttribute("aria-pressed", String(isActive));
  });
  render();
});

// -------------------------------------------------------------
// STEP 7: Clear completed
// -------------------------------------------------------------
clearCompletedBtn.addEventListener("click", () => {
  todos = todos.filter((t) => !t.completed);
  render();
});

// -------------------------------------------------------------
// STEP 8: localStorage persistence (strings only → JSON)
// -------------------------------------------------------------
function saveTodos() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

function loadTodos() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return Array.isArray(saved) ? saved : [];
  } catch (error) {
    return []; // corrupted data → start fresh
  }
}

// First paint
render();
