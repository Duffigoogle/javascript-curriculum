// =============================================================
// Day 3 Assignment: Spendwise Expense Tracker (mini project)
// Use the same pattern as our to-do app:
//   STATE → render() → events update STATE → render()
// Read ASSIGNMENT.md for every requirement. Do not edit index.html.
// =============================================================

const STORAGE_KEY = "spendwise-expenses";

// ---------- Elements ----------
// Select everything you need here (form, inputs, error <p>s, list,
// summary values, filter + sort selects, empty state, filtered total).


// ---------- State ----------
// Each expense: { id, description, amount (number), category, date ("2026-10-09") }
let expenses = []; // replace with loadExpenses()
let filterCategory = "all";
let sortBy = "newest";

// ---------- Helpers (provided) ----------
function formatNaira(amount) {
  return "₦" + Number(amount).toLocaleString("en-NG");
}

function formatDate(isoDate) {
  // "2026-10-09" → "9 Oct 2026"
  return new Date(isoDate + "T00:00:00").toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function todayISO() {
  const d = new Date();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${d.getFullYear()}-${month}-${day}`;
}

// ---------- 1. Storage ----------
// saveExpenses() and loadExpenses() with localStorage + JSON (try/catch!)


// ---------- 2. Validation ----------
// validateForm() returns true/false. Show messages in the matching
// *-error <p> and add/remove the "invalid" class on the field.


// ---------- 3. Rendering ----------
// createExpenseElement(expense) → <li class="expense"> (see the comment in index.html)
// getVisibleExpenses() → filtered by category, then sorted
// render() → list, empty state, summary stats, filtered total, save


// ---------- 4. Events ----------
// form submit → validate → push to state → reset form → render()
// list click (delegation) → delete → render()
// filter select "change" → update filterCategory → render()
// sort select "change" → update sortBy → render()


// ---------- Start ----------
// Set the date input to today by default, then render().
