// ============================================================
// Weekly Challenge: Report card generator 2.0 (20 pts)
// Due: Wed, Oct 7, 11:59 PM · Submit: week7/challenge (with README)
// Rule: no for or while loops.
// ============================================================

const students = [
  { name: "Ifeoma Okafor",
    scores: { Maths: 78, English: 64, Biology: 49, Physics: 91, "Civic Ed": 38 } },
  { name: "Tunde Bakare",
    scores: { Maths: 55, English: 71, Biology: 62, Physics: 44, "Civic Ed": 68 } },
  { name: "Amaka Nwosu",
    scores: { Maths: 88, English: 79, Biology: 84, Physics: 72, "Civic Ed": 90 } },
];
const PASS_MARK = 45;

// 1. Reuse from Assignment 1
function getGrade(score) {
  // TODO
}

// 2. Build a summary object for one student
function summarise(student) {
  // TODO: const subjects = Object.entries(student.scores);
  // TODO: total, average, grade, best, weakest, passes, fails, promoted
  return {};
}

// 3. Print one report card. Destructure the parameter!
function printReportCard(summary) {
  // TODO: match the Week 6 layout exactly (padEnd helps line up columns)
}

// Run it
const summaries = students.map(summarise);
summaries.forEach(printReportCard);

// 4. Class ranking and top performer
// TODO

// 5. Bonus: subject averages across the class
// TODO
