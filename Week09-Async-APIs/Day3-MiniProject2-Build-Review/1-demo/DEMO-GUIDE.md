# Day 3 Demo Guide — Build an API App, Start to Finish
**Fri, Oct 16 · ~40 min live build (then students build)**

## Goal
Model the *process* students will follow for Mini Project 2 — not just the code:
**Pick an API → read the JSON → plan the UI → build in small steps → handle states → review.**

## What we build: "Weather Now" 🌦️
Type a city → see current weather + a 5-day forecast.

Uses **two** API calls in sequence — a great real-world example of `await` one thing, then use it for the next:
1. **Geocoding:** city name → latitude/longitude
   `https://geocoding-api.open-meteo.com/v1/search?name=Port%20Harcourt&count=1`
2. **Forecast:** lat/long → weather
   `https://api.open-meteo.com/v1/forecast?latitude=4.78&longitude=7.01&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto`

Both are free, no key, no sign-up. ✅ Test both URLs in the browser before class.

## Files
- `index.html`, `styles.css` — finished UI shell
- `demo-start.js` — empty steps with comments
- `demo-finished.js` — complete app

## Run of show

### Step 1 — Explore the API in the browser (5 min)
Paste the geocoding URL. Ask: *"Where's the latitude? What if the city doesn't exist?"* (→ no `results` key at all.)
Paste the forecast URL. Find `current.temperature_2m` and the `daily` arrays. Note: **daily data is parallel arrays** — `daily.time[0]` goes with `daily.temperature_2m_max[0]`.

### Step 2 — Plan on the board (5 min)
```
[Search box] → getCoordinates(city) → getWeather(lat, lon) → renderCurrent() + renderForecast()
States: idle · loading · success · not found · error
```

### Step 3 — Build in small, testable steps (25 min)
After *each* step, save and test. Say it out loud: "Small steps. Test often."
1. `getJSON` helper (copy from Wednesday — reuse your own code!)
2. `getCoordinates(city)` → `console.log` it first, render later
3. `getWeather(lat, lon)` → `console.log` it
4. `renderCurrent()` — temperature, description, humidity, wind
5. `renderForecast()` — loop over `daily.time`
6. Weather codes → emoji + text (show the lookup object)
7. Loading / not found / error states
8. Bonus: remember the last city with `localStorage`

### Step 4 — Self-review (5 min)
Walk through the **Peer Review Checklist** (`2-activity/peer-review-checklist.md`) on your own app, live. Find at least one thing to improve — model that it's normal.

## Teaching points
- Two `await`s in a row = the second depends on the first. (Contrast with `Promise.all` from Monday when they *don't* depend on each other.)
- Check the shape of "not found" — every API does it differently (null, empty array, 404, missing key).
- `console.log(data)` is your best friend while building. Remove extras before submitting.
