// =====================================================
// Day 1 Assignment — Student Dashboard Loader
// =====================================================

// ---------------- FAKE SERVER (do not edit) ----------------
const fakeServer = {
  getProfile() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ name: "Ada Okafor", track: "Frontend Development", avatar: "👩🏾‍💻" });
      }, 1000);
    });
  },

  getCourses() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { title: "HTML & CSS Foundations", progress: 100 },
          { title: "JavaScript Basics", progress: 85 },
          { title: "DOM & Events", progress: 70 },
          { title: "Async JavaScript & APIs", progress: 10 },
        ]);
      }, 1500);
    });
  },

  getAnnouncements() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.3) {
          reject(new Error("Server busy 😓 — couldn't load announcements."));
          return;
        }
        resolve([
          "Mini Project 2 is due Friday!",
          "Office hours moved to Thursday 4pm.",
          "Remember to push your code to GitHub daily.",
        ]);
      }, 2000);
    });
  },
};
// -----------------------------------------------------------

// ======================= YOUR CODE =========================

// Grab the elements you need
const profileEl = document.getElementById("profile");
const coursesEl = document.getElementById("courses");
const announcementsEl = document.getElementById("announcements");
const reloadBtn = document.getElementById("reload-btn");
const loadTimeEl = document.getElementById("load-time");

// TODO 1: write helper functions to render each section
// function renderProfile(profile) { ... }
// function renderCourses(courses) { ... }
// function renderAnnouncements(list) { ... }

// TODO 2: write async function loadDashboard()
//   - show "Loading..." in each section (class "loading")
//   - await each fakeServer call
//   - render the results
//   - use try/catch so a failure in one section shows an error (class "error")
//     but doesn't break the others

// TODO 3: call loadDashboard() when the page loads

// TODO 4: call loadDashboard() again when the reload button is clicked
