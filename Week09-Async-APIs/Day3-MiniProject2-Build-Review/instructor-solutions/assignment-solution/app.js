// =====================================================
// SAMPLE Mini Project 2 — TeamBook 👥
// Built from the starter to show students a finished example.
// Shows: fetch + async/await, getJSON helper, 3 states,
// client-side search & filter, "load more", details view, localStorage.
// =====================================================

const API_URL = "https://randomuser.me/api/";
const PAGE_SIZE = 12;

const form = document.getElementById("search-form");
const input = document.getElementById("search-input");
const statusEl = document.getElementById("status");
const resultsEl = document.getElementById("results");
const detailsEl = document.getElementById("details");
const loadMoreBtn = document.getElementById("load-more");
const filterButtons = document.querySelectorAll("#filters button");

// ---------- App state ----------
let people = []; //        everyone we've loaded so far
let page = 1;
let currentGender = "all";
let currentQuery = "";

// ---------- Fetch helper ----------
async function getJSON(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Request failed (status ${response.status})`);
  return response.json();
}

// ---------- Status helpers ----------
function showLoading(message = "Loading...") {
  statusEl.textContent = message;
  statusEl.classList.remove("error");
}
function showEmpty(message) {
  statusEl.textContent = message;
  statusEl.classList.remove("error");
}
function showError(message) {
  statusEl.textContent = `❌ ${message}`;
  statusEl.classList.add("error");
}
function clearStatus() {
  statusEl.textContent = "";
  statusEl.classList.remove("error");
}

// ---------- Get data ----------
// "seed" makes the API return the same people for each page, so paging is stable.
async function loadPeople() {
  showLoading(page === 1 ? "Loading your team..." : "Loading more people...");
  loadMoreBtn.disabled = true;

  try {
    const url = `${API_URL}?results=${PAGE_SIZE}&page=${page}&seed=teambook`;
    const data = await getJSON(url);

    people = people.concat(data.results);
    page++;
    clearStatus();
    render();
    loadMoreBtn.classList.remove("hidden");
  } catch (error) {
    showError(`${error.message}. Check your connection and try again.`);
  } finally {
    loadMoreBtn.disabled = false;
  }
}

// ---------- Filter + search (no new request needed) ----------
function getVisiblePeople() {
  return people.filter((person) => {
    const matchesGender = currentGender === "all" || person.gender === currentGender;
    const text = `${person.name.first} ${person.name.last} ${person.location.country}`.toLowerCase();
    const matchesQuery = text.includes(currentQuery.toLowerCase());
    return matchesGender && matchesQuery;
  });
}

// ---------- Render ----------
function render() {
  const visible = getVisiblePeople();
  resultsEl.innerHTML = "";

  if (visible.length === 0) {
    showEmpty(`No one matches "${currentQuery}". Try another name or country.`);
    return;
  }
  clearStatus();

  visible.forEach((person) => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <img src="${person.picture.large}" alt="${person.name.first} ${person.name.last}" loading="lazy" />
      <div class="body">
        <h3>${person.name.first} ${person.name.last}</h3>
        <p>📍 ${person.location.city}, ${person.location.country}</p>
      </div>
    `;
    card.addEventListener("click", () => showDetails(person));
    resultsEl.appendChild(card);
  });
}

// ---------- Details ----------
function showDetails(person) {
  detailsEl.innerHTML = `
    <div class="profile">
      <img src="${person.picture.large}" alt="${person.name.first}" />
      <div>
        <h2>${person.name.title} ${person.name.first} ${person.name.last}</h2>
        <ul>
          <li>📧 ${person.email}</li>
          <li>📞 ${person.phone}</li>
          <li>📍 ${person.location.city}, ${person.location.state}, ${person.location.country}</li>
          <li>🎂 ${person.dob.age} years old</li>
        </ul>
      </div>
    </div>
  `;
  detailsEl.classList.remove("hidden");
  detailsEl.scrollIntoView({ behavior: "smooth" });
}

// ---------- Events ----------
form.addEventListener("submit", (event) => {
  event.preventDefault();
  currentQuery = input.value.trim();
  localStorage.setItem("teambook-query", currentQuery);
  render();
});

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    currentGender = btn.dataset.gender;
    render();
  });
});

loadMoreBtn.addEventListener("click", loadPeople);

// ---------- Start ----------
currentQuery = localStorage.getItem("teambook-query") || "";
input.value = currentQuery;
loadPeople();
