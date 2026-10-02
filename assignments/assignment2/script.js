// ============================================================
// Assignment 2: Grade book (15 pts)
// Due: Sun, Oct 4, 11:59 PM · Submit: week7/assignment2
// Rule: no for or while loops. Use forEach, map, filter and reduce.
// Write the expected output as a comment next to each console.log.
// ============================================================

const students = [
  { name: "Ada",   score: 78 },
  { name: "Bola",  score: 45 },
  { name: "Chidi", score: 92 },
  { name: "Dayo",  score: 38 },
  { name: "Efe",   score: 66 },
  { name: "Funmi", score: 54 },
  { name: "Gozie", score: 81 },
];

function getGrade(score) {
  // TODO: paste your Assignment 1 version here
}

// ---------- Part A: Basics (6 pts) ----------
// 1. Print every student as "Ada — 78" (forEach)

// 2. names: an array of just the names (map)

// 3. passed: students scoring 50 or above (filter). Print how many passed.

// 4. The class average, to 1 decimal place (reduce)


// ---------- Part B: Grades (6 pts) ----------
// 5. The top student (name and score), using reduce

// 6. withGrades: a new array where each student also has a grade (map)
//    Hint: an arrow that returns an object needs parentheses:
//    (s) => ({ name: s.name, score: s.score, grade: getGrade(s.score) })

// 7. honourRoll: names of A students joined into one string → "Ada, Chidi, Gozie"


// ---------- Part C: Curve (3 pts) ----------
// 8. Add 5 points to every score (max 100) WITHOUT changing `students`.
//    Log both arrays to prove the original is unchanged.
