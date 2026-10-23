// =====================================================
// Day 3 Demo — Weather Now (START FILE)
// Build it step by step. Save & test after EVERY step.
// =====================================================

const GEO_URL = "https://geocoding-api.open-meteo.com/v1/search";
const WEATHER_URL = "https://api.open-meteo.com/v1/forecast";

const form = document.getElementById("search-form");
const cityInput = document.getElementById("city-input");
const statusEl = document.getElementById("status");
const currentEl = document.getElementById("current");
const forecastSection = document.getElementById("forecast-section");
const forecastEl = document.getElementById("forecast");

// STEP 1 — getJSON helper (reuse from Wednesday!)

// STEP 2 — getCoordinates(city)
//   fetch `${GEO_URL}?name=${encodeURIComponent(city)}&count=1`
//   if no data.results → throw "City not found"
//   return { name, country, latitude, longitude }

// STEP 3 — getWeather(lat, lon)
//   current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code
//   daily=weather_code,temperature_2m_max,temperature_2m_min
//   timezone=auto

// STEP 6 — weather code lookup (code → emoji + text)

// STEP 4 — renderCurrent(place, weather)

// STEP 5 — renderForecast(weather)  (loop over weather.daily.time)

// STEP 7 — showWeather(city): loading → coords → weather → render, with try/catch

// STEP 7b — form submit listener

// STEP 8 (bonus) — remember last city in localStorage
