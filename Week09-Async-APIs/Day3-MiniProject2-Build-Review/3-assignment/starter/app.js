// =====================================================
// Mini Project 2 — Starter
// Replace the TODOs with your own API and rendering.
// =====================================================

// TODO: put your API's base URL here
const API_URL = "https://YOUR-API-HERE";

// ---------- Elements ----------
const form = document.getElementById("search-form");
const input = document.getElementById("search-input");
const statusEl = document.getElementById("status");
const resultsEl = document.getElementById("results");
const detailsEl = document.getElementById("details");

// =====================================================
// 1. Fetch helper (ready to use ✅)
// =====================================================
async function getJSON(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Request failed (status ${response.status})`);
  }
  return response.json();
}

// =====================================================
// 2. Status helpers (ready to use ✅)
// =====================================================
function showLoading(message = "Loading...") {
  statusEl.textContent = message;
  statusEl.classList.remove("error");
}

function showEmpty(message = "Nothing found. Try something else!") {
  statusEl.textContent = message;
  statusEl.classList.remove("error");
  resultsEl.innerHTML = "";
}

function showError(message) {
  statusEl.textContent = `❌ ${message}`;
  statusEl.classList.add("error");
}

function clearStatus() {
  statusEl.textContent = "";
  statusEl.classList.remove("error");
}

// =====================================================
// 3. Get data — YOUR TURN
// =====================================================
async function loadData(query) {
  showLoading();

  try {
    // TODO: build your URL (use encodeURIComponent for user text!)
    const data = await getJSON(`${API_URL}?q=${encodeURIComponent(query)}`);
    console.log(data); // 👀 look at the shape first!

    // TODO: pull out the array of items from the data
    const items = []; // e.g. data.results or data.meals or data

    // TODO: handle "nothing found" for YOUR API
    if (!items || items.length === 0) {
      showEmpty(`No results for "${query}".`);
      return;
    }

    clearStatus();
    renderItems(items);
  } catch (error) {
    showError(error.message);
  }
}

// =====================================================
// 4. Render — YOUR TURN
// =====================================================
function renderItems(items) {
  resultsEl.innerHTML = "";

  items.forEach((item) => {
    const card = document.createElement("article");
    card.className = "card";

    // TODO: change these to fields from your API
    card.innerHTML = `
      <img src="${item.image}" alt="${item.title}" />
      <div class="body">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </div>
    `;

    card.addEventListener("click", () => showDetails(item));
    resultsEl.appendChild(card);
  });
}

// =====================================================
// 5. Details (optional) — YOUR TURN
// =====================================================
function showDetails(item) {
  // TODO: fill detailsEl with more info about the item
  detailsEl.innerHTML = `<h2>${item.title}</h2>`;
  detailsEl.classList.remove("hidden");
  detailsEl.scrollIntoView({ behavior: "smooth" });
}

// =====================================================
// 6. Events
// =====================================================
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const query = input.value.trim();
  if (query) loadData(query);
});

// TODO (optional): load something when the page first opens
// loadData("something popular");
