// =====================================================
// Day 2 Activity — The Mood Booster 😄
// Read ACTIVITY.md first!
// =====================================================

const JOKE_URL = "https://official-joke-api.appspot.com/random_joke";
const ADVICE_URL = "https://api.adviceslip.com/advice";
const CAT_URL = "https://catfact.ninja/fact";

const jokeText = document.getElementById("joke-text");
const adviceText = document.getElementById("advice-text");
const catText = document.getElementById("cat-text");

const jokeBtn = document.getElementById("joke-btn");
const adviceBtn = document.getElementById("advice-btn");
const catBtn = document.getElementById("cat-btn");
const boostBtn = document.getElementById("boost-btn");

// From Monday 😉
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// =====================================================
// EXERCISE 3 — reusable helper (come back to this!)
// =====================================================
async function getJSON(url) {
  // TODO: fetch the url
  // TODO: if (!response.ok) throw new Error(...)
  // TODO: return the parsed JSON
}

// =====================================================
// EXERCISE 1 — Joke
// =====================================================
async function getJoke() {
  // TODO: show "Loading..." (class "loading") and disable jokeBtn
  // TODO: fetch JOKE_URL and get the JSON
  // TODO: show data.setup, then after wait(2000) add the punchline
  //       (tip: <div class="punchline">...</div>)
  // TODO (Ex 4): catch errors → show them with class "error"
  // TODO (Ex 4): finally → re-enable jokeBtn
}

// =====================================================
// EXERCISE 2 — Advice
// =====================================================
async function getAdvice() {
  // TODO: fetch `${ADVICE_URL}?t=${Date.now()}`
  // TODO: show data.slip.advice  (it's nested!)
}

// =====================================================
// EXERCISE 3 — Cat fact (use getJSON!)
// =====================================================
async function getCatFact() {
  // TODO: const data = await getJSON(CAT_URL)
  // TODO: show data.fact
}

// =====================================================
// BONUS — all three at once
// =====================================================
async function boostMe() {
  // TODO: await Promise.all([getJoke(), getAdvice(), getCatFact()])
}

// ---------- Wire up (don't change) ----------
jokeBtn.addEventListener("click", getJoke);
adviceBtn.addEventListener("click", getAdvice);
catBtn.addEventListener("click", getCatFact);
boostBtn.addEventListener("click", boostMe);
