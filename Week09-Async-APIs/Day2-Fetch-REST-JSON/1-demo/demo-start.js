// =====================================================
// Day 2 Demo — Fetch, REST & JSON (START FILE)
// =====================================================

const BASE_URL = "https://jsonplaceholder.typicode.com";

// =====================================================
// PART 1 — JSON warm-up (run these in the console)
// =====================================================
// const student = { name: "Ada", track: "Frontend" };
// const text = JSON.stringify(student);   // object → text
// const back = JSON.parse(text);          // text → object

// =====================================================
// PART 2 — First fetch: random dog
// =====================================================
const dogBox = document.getElementById("dog-box");

async function getDog() {
  // TODO 1: fetch "https://dog.ceo/api/breeds/image/random"
  // TODO 2: turn the response into JSON (await response.json())
  // TODO 3: put data.message into an <img> inside dogBox
}

// =====================================================
// PART 4 (we write the helper early, use it everywhere)
// =====================================================
async function getJSON(url) {
  // TODO: fetch, check response.ok, throw an Error if not ok, return JSON
}

// =====================================================
// PART 3 — GET a list & render it
// =====================================================
const usersEl = document.getElementById("users");
const usersStatus = document.getElementById("users-status");
const postsEl = document.getElementById("posts");

async function loadUsers() {
  // TODO: show "Loading users..."
  // TODO: const users = await getJSON(`${BASE_URL}/users`)
  // TODO: render a .user-card for each user (name, email, company.name)
  // TODO: when a card is clicked → loadPosts(user)
  // TODO: catch errors and show them in usersStatus
}

async function loadPosts(user) {
  // TODO: fetch `${BASE_URL}/posts?userId=${user.id}` and render titles + bodies
}

// =====================================================
// PART 4 — Errors
// =====================================================
const errorStatus = document.getElementById("error-status");

async function fetchBadUser() {
  // TODO: try getJSON(`${BASE_URL}/users/999`) — show the error message
}

async function fetchBrokenUrl() {
  // TODO: try getJSON("https://this-site-does-not-exist-12345.com") — show the error
}

// =====================================================
// PART 5 — POST
// =====================================================
const postForm = document.getElementById("post-form");
const postResult = document.getElementById("post-result");

async function createPost(event) {
  event.preventDefault();
  // TODO: build { title, body, userId: 1 }
  // TODO: fetch with method "POST", headers Content-Type: application/json,
  //       body: JSON.stringify(newPost)
  // TODO: show response.status and the returned JSON in postResult
}

// ---------- Wire up ----------
document.getElementById("dog-btn").addEventListener("click", getDog);
document.getElementById("users-btn").addEventListener("click", loadUsers);
document.getElementById("bad-btn").addEventListener("click", fetchBadUser);
document.getElementById("offline-btn").addEventListener("click", fetchBrokenUrl);
postForm.addEventListener("submit", createPost);
