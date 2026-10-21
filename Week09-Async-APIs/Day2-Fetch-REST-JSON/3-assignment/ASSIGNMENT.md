# Day 2 Assignment — Recipe Finder 🍲
**Due: before Friday's class (Oct 16)**

Build a search app that finds recipes from a real API. This is a warm-up for Friday's Mini Project — the patterns you use here (search → fetch → render → handle errors) are exactly what you'll need.

## The API: TheMealDB (free, no sign-up)
Base URL: `https://www.themealdb.com/api/json/v1/1/`
(The `1` is a free test key for learning — you don't need your own.)

| What | Endpoint |
|---|---|
| Search by name | `search.php?s=rice` |
| One meal by id | `lookup.php?i=52772` |
| Random meal | `random.php` |
| All categories | `categories.php` |

**Step 0:** Open `https://www.themealdb.com/api/json/v1/1/search.php?s=rice` in your browser. Study the JSON:
- Results are inside `data.meals` (an array)
- Each meal has `strMeal`, `strMealThumb`, `strCategory`, `strArea`, `strInstructions`, `strYoutube`
- Ingredients are weird: `strIngredient1` … `strIngredient20` and `strMeasure1` … `strMeasure20` 🤔

⚠️ **Gotcha:** search for `xyzxyz`. The status is **200 OK**, but `data.meals` is `null`! Your code must handle "no results" separately from "error".

## Requirements

### Core (must do)
1. **Search form** — user types a dish name and submits (use `submit` event + `preventDefault()`).
2. **Fetch** from the search endpoint using `async/await`. Use `encodeURIComponent()` on the search text.
3. **Render result cards** — image, name, category, and area for each meal.
4. **Three states, clearly shown:**
   - ⏳ Loading — "Searching..."
   - 🤷 No results — "No recipes found for 'xyz'. Try 'chicken' or 'rice'."
   - ❌ Error — friendly message if the request fails (test by breaking the URL!)
5. **Details view** — clicking a card shows the full recipe: big image, instructions, and the **ingredient list** (loop from 1 to 20, skip empty ones).
6. **Reusable `getJSON(url)` helper** that checks `response.ok`.

### Stretch (pick at least one)
- 🎲 **"Surprise me"** button that loads `random.php`
- 🏷️ **Category chips** — load `categories.php` on page load and show buttons; clicking one searches that category (`filter.php?c=Seafood`)
- ▶️ Show an embedded or linked YouTube video if `strYoutube` exists
- ⭐ **Favourites** — save meal ids to `localStorage` and show a favourites list

## Submission
- Push to GitHub under `week-09/day-2-recipe-finder`
- Deploy with **GitHub Pages** and share the live link
- README: screenshot + one sentence on the hardest bug you fixed

## Grading (10 pts)
| Criteria | Pts |
|---|---|
| Search form + fetch with async/await | 2 |
| Result cards render correctly | 2 |
| Loading / no-results / error states | 2 |
| Details view with ingredient list | 2 |
| Clean code (getJSON helper, small functions) | 1 |
| Stretch goal | 1 |
