// =====================================================
// Day 2 Assignment — Recipe Finder 🍲
// =====================================================

const API = "https://www.themealdb.com/api/json/v1/1";

const form = document.getElementById("search-form");
const input = document.getElementById("search-input");
const randomBtn = document.getElementById("random-btn");
const statusEl = document.getElementById("status");
const resultsEl = document.getElementById("results");
const detailsEl = document.getElementById("details");
const categoriesEl = document.getElementById("categories");

// -----------------------------------------------------
// TODO 1: getJSON(url) — fetch, check response.ok, return JSON
// -----------------------------------------------------
async function getJSON(url) {}

// -----------------------------------------------------
// TODO 2: small helpers for status messages
// -----------------------------------------------------
function showStatus(message, isError = false) {
  // set statusEl text, add/remove the "error" class
}

// -----------------------------------------------------
// TODO 3: searchMeals(query)
//   - show "Searching..."
//   - fetch `${API}/search.php?s=${encodeURIComponent(query)}`
//   - if data.meals is null → show "No recipes found..."
//   - otherwise renderResults(data.meals)
//   - catch errors → showStatus(error.message, true)
// -----------------------------------------------------
async function searchMeals(query) {}

// -----------------------------------------------------
// TODO 4: renderResults(meals)
//   - clear resultsEl
//   - create a .card for each meal (img, name, category + area tags)
//   - on click → showDetails(meal)
// -----------------------------------------------------
function renderResults(meals) {}

// -----------------------------------------------------
// TODO 5: getIngredients(meal) → returns an array like ["2 cups Rice", "1 Onion"]
//   Hint: for (let i = 1; i <= 20; i++) { meal[`strIngredient${i}`] ... }
// -----------------------------------------------------
function getIngredients(meal) {}

// -----------------------------------------------------
// TODO 6: showDetails(meal)
//   - fill detailsEl with image, name, ingredients <ul>, instructions
//   - remove the "hidden" class and scroll to it
// -----------------------------------------------------
function showDetails(meal) {}

// -----------------------------------------------------
// TODO 7: event listeners
//   - form submit → searchMeals(input.value.trim())
//   - (stretch) randomBtn → random.php
//   - (stretch) load categories on page load
// -----------------------------------------------------
