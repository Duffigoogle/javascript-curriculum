// =============================================================
// Day 3 Class Activity: Level Up the To-Do List
// This is the finished demo app from class, plus 4 new features for you to add.
// Search for "TODO" (tasks A to D). Read ACTIVITY.md first.
// =============================================================

const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const formError = document.getElementById("form-error");
const list = document.getElementById("todo-list");
const filtersBar = document.getElementById("filters");
const emptyState = document.getElementById("empty-state");
const itemsLeft = document.getElementById("items-left");
const clearCompletedBtn = document.getElementById("clear-completed");
const toggleAllBtn = document.getElementById("toggle-all");
const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");

const STORAGE_KEY = "week8-todos-activity";

let todos = loadTodos();
let currentFilter = "all";

// ---------------- Rendering ----------------
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
  text.textContent = todo.text;

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
  list.textContent = "";
  const visible = getVisibleTodos();
  visible.forEach((todo) => list.append(createTodoElement(todo)));

  emptyState.hidden = visible.length > 0;
  if (todos.length === 0) emptyState.textContent = "Nothing here yet. Add your first task above.";
  else if (currentFilter === "completed") emptyState.textContent = "No completed tasks yet.";
  else emptyState.textContent = "All done! 🎉";

  const remaining = todos.filter((t) => !t.completed).length;
  itemsLeft.textContent = `${remaining} ${remaining === 1 ? "item" : "items"} left`;
  clearCompletedBtn.disabled = !todos.some((t) => t.completed);

  updateProgress();
  updateToggleAllButton();
  saveTodos();
}

// ---------------------------------------------------------------
// TODO (Task A): Progress bar
//   Set progressBar.style.width to the % of tasks completed
//   and progressText to e.g. "3 of 5 done". 0 tasks → width 0%, "0 of 0 done".
// ---------------------------------------------------------------
function updateProgress() {
  // your code here
}

// ---------------------------------------------------------------
// TODO (Task B): "Mark all complete" button
//   1. updateToggleAllButton(): if every task is completed the button says
//      "Mark all active", otherwise "Mark all complete". Disable it when
//      there are no tasks.
//   2. Add a click listener (below) that sets every task's completed to
//      true, or to false if they're all already complete. Then render().
// ---------------------------------------------------------------
function updateToggleAllButton() {
  // your code here
}

// toggleAllBtn listener goes here


// ---------------- Adding ----------------
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = input.value.trim();

  if (text === "") {
    formError.textContent = "Please type a task first.";
    input.focus();
    return;
  }

  // TODO (Task C): Block duplicates. If a task with the same text already
  //   exists (ignore upper/lower case), show "That task is already on your
  //   list." in formError and return.


  todos.push({ id: Date.now(), text, completed: false });
  formError.textContent = "";
  input.value = "";
  input.focus();
  render();
});

input.addEventListener("input", () => {
  formError.textContent = "";
});

// ---------------- Delete + toggle (delegation) ----------------
list.addEventListener("click", (event) => {
  const li = event.target.closest(".todo-item");
  if (!li) return;
  if (event.target.closest(".delete")) {
    const id = Number(li.dataset.id);
    todos = todos.filter((t) => t.id !== id);
    render();
  }
});

list.addEventListener("change", (event) => {
  if (!event.target.matches(".toggle")) return;
  const id = Number(event.target.closest(".todo-item").dataset.id);
  todos.find((t) => t.id === id).completed = event.target.checked;
  render();
});

// ---------------------------------------------------------------
// TODO (Task D): Edit a task by double-clicking its text
//   Add ONE "dblclick" listener to the list (delegation). When a .todo-text
//   is double-clicked:
//   1. Create an <input class="edit-input"> with the current text
//   2. Replace the text <span> with it (span.replaceWith(editInput)) and focus it
//   3. Enter or blur → save the new text (ignore empty text) and render()
//      Escape → cancel (just render())
// ---------------------------------------------------------------


// ---------------- Filters ----------------
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

clearCompletedBtn.addEventListener("click", () => {
  todos = todos.filter((t) => !t.completed);
  render();
});

// ---------------- Storage ----------------
function saveTodos() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

function loadTodos() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return Array.isArray(saved) ? saved : [];
  } catch (error) {
    return [];
  }
}

render();
