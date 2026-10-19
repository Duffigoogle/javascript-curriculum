// =====================================================
// Day 1 Demo — The Jollof Kitchen (START FILE)
// Fill in the TODOs live with the class.
// =====================================================

// ---------- Helper: write to the on-screen log ----------
const logList = document.getElementById("log");
const startTime = Date.now();

function log(message, type = "") {
  const seconds = ((Date.now() - startTime) / 1000).toFixed(1);
  const li = document.createElement("li");
  li.className = type;
  li.innerHTML = `<span class="time">[${seconds}s]</span>${message}`;
  logList.appendChild(li);
  console.log(message);
}

// =====================================================
// PART 0 — Sync vs Async
// =====================================================
function syncVsAsync() {
  log("A: Customer walks in");
  // TODO: use setTimeout to log "B: Food is ready" after 0ms
  log("C: Customer sits down");
}

// =====================================================
// PART 1 — Callbacks
// =====================================================
// TODO: takeOrder(dish, callback) → after 1s, log and call callback(dish)

// TODO: cookFood(dish, callback) → after 2s, log and call callback(dish)

// TODO: serveFood(dish, callback) → after 1s, log and call callback()

function runCallbacks() {
  log("--- Callbacks ---");
  // TODO: nest the three functions (notice the pyramid!)
}

// =====================================================
// PART 2 — Promises
// =====================================================
// TODO: takeOrderP(dish) → returns a Promise that resolves after 1s

// TODO: cookFoodP(dish, hasRice = true) → resolves after 2s,
//       or REJECTS with an Error if hasRice is false

// TODO: serveFoodP(dish) → resolves after 1s

function runPromises() {
  log("--- Promises ---");
  // TODO: chain with .then(), handle errors with .catch(), end with .finally()
}

// =====================================================
// PART 3 — async/await
// =====================================================
async function runAsyncAwait() {
  log("--- async/await ---");
  // TODO: await each step inside try/catch
}

// =====================================================
// PART 4 — Errors
// =====================================================
async function runFailure() {
  log("--- Out of rice! ---");
  // TODO: call cookFoodP with hasRice = false inside try/catch
}

// =====================================================
// PART 5 — Promise.all (do things at the same time)
// =====================================================
async function runPromiseAll() {
  log("--- Promise.all ---");
  // TODO: cook "Jollof", "Plantain", "Chicken" at the same time
}

// ---------- Wire up the buttons ----------
document.getElementById("btn-sync").addEventListener("click", syncVsAsync);
document.getElementById("btn-callbacks").addEventListener("click", runCallbacks);
document.getElementById("btn-promises").addEventListener("click", runPromises);
document.getElementById("btn-async").addEventListener("click", runAsyncAwait);
document.getElementById("btn-fail").addEventListener("click", runFailure);
document.getElementById("btn-all").addEventListener("click", runPromiseAll);
document.getElementById("btn-clear").addEventListener("click", () => (logList.innerHTML = ""));
