// =====================================================
// Day 1 Activity — Bus Park Promises 🚌
// Work through each exercise. Read ACTIVITY.md first!
// =====================================================

// ---------- Helper: show a message on the page ----------
const output = document.getElementById("output");
function show(message, type = "") {
  const li = document.createElement("li");
  li.className = type; // "success" or "error" or ""
  li.textContent = message;
  output.appendChild(li);
  console.log(message);
}

// ---------- Fake "server" data (don't change) ----------
const routes = {
  "Port Harcourt → Lagos": 14,
  "Port Harcourt → Abuja": 3,
  "Port Harcourt → Enugu": 9,
};

// =====================================================
// EXERCISE 1 — Predict the order
// My guess (write it here before clicking!):
//   1st: ___  2nd: ___  3rd: ___  4th: ___
// =====================================================
function exercise1() {
  show("1. Buy ticket");
  setTimeout(() => show("2. Bus arrives"), 1000);
  setTimeout(() => show("3. Driver says hello"), 0);
  show("4. Sit and wait");
}

// =====================================================
// EXERCISE 2 — Build wait(ms)
// Return a Promise that resolves after `ms` milliseconds.
// =====================================================
function wait(ms) {
  // TODO
}

function exercise2() {
  show("Waiting 1.5 seconds...");
  // TODO: use wait(1500).then(...) to show "Done waiting! ⏱️"
}

// =====================================================
// EXERCISE 3 — Callback → Promise
// =====================================================

// ✅ This already works (callback style). Read it.
function findSeatCallback(route, callback) {
  setTimeout(() => {
    if (routes[route]) {
      callback(null, routes[route]); // (error, result)
    } else {
      callback(new Error("No bus for that route"));
    }
  }, 1000);
}

// TODO: write the Promise version.
// Resolve with the seat number, or reject with an Error.
function findSeat(route) {
  // TODO: return new Promise((resolve, reject) => { ... })
}

function exercise3(route) {
  show(`Looking for a seat on "${route}"...`);
  // TODO: call findSeat(route)
  //   .then(seat => show(`Found seat ${seat}`, "success"))
  //   .catch(error => show(error.message, "error"))
}

// =====================================================
// EXERCISE 4 — async/await
// =====================================================

// ✅ Given: pretend payment takes 1.5s
function payForSeat(seat) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`PAID-${seat}-${Date.now()}`), 1500);
  });
}

async function bookTrip(route) {
  show(`Booking "${route}"...`);
  // TODO:
  // try {
  //   1. const seat = await findSeat(route)
  //   2. const receipt = await payForSeat(seat)
  //   3. show(`🎟️ Booked seat ${seat} on ${route} (receipt ${receipt})`, "success")
  // } catch (error) {
  //   show(`❌ ${error.message}`, "error")
  // }
}

// =====================================================
// EXERCISE 5 — BONUS: Promise.all
// =====================================================
async function exercise5() {
  show("Checking 3 routes at the same time...");
  const start = Date.now();
  // TODO: use Promise.all with findSeat for all three routes in `routes`
  // TODO: show the seats and how many seconds it took
  // EXTRA: try Promise.allSettled with "Port Harcourt → Mars" in the list
}

// ---------- Buttons (don't change) ----------
document.getElementById("ex1").onclick = exercise1;
document.getElementById("ex2").onclick = exercise2;
document.getElementById("ex3-ok").onclick = () => exercise3("Port Harcourt → Abuja");
document.getElementById("ex3-bad").onclick = () => exercise3("Port Harcourt → Mars");
document.getElementById("ex4-ok").onclick = () => bookTrip("Port Harcourt → Lagos");
document.getElementById("ex4-bad").onclick = () => bookTrip("Port Harcourt → Mars");
document.getElementById("ex5").onclick = exercise5;
document.getElementById("clear").onclick = () => (output.innerHTML = "");
