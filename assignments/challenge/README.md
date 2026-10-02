# Weekly Challenge: Report card generator 2.0

**Due:** Wed, Oct 7, 11:59 PM · **Submit:** `week7/challenge` with this README updated · **Weight:** 20 pts (+3 bonus)

## The brief

Last week you built a report card with loops and separate variables. This week, rebuild it for a
whole class using **functions, arrays and objects**, with **no `for` or `while` loops**.

## Requirements

1. `getGrade(score)`: reuse your Assignment 1 function.
2. `summarise(student)` returns an object:
   `{ name, subjects, total, average, grade, best, weakest, passes, fails, promoted }`.
   Use `Object.entries` and `reduce`.
3. `printReportCard(summary)` destructures its parameter and prints the same layout as Week 6.
4. Promotion rule: average of 50 or more **and** no more than 1 fail (pass mark 45).
5. Class ranking: sort a **copy** by average and print the top performer.
   Hint: `[...list].sort((a, b) => b.average - a.average)`
6. **Bonus (+3):** each subject's class average, e.g. `{ Maths: 73.7, ... }`.

## Your output must include this card, identical to Week 6

```
======= REPORT CARD =======
Student: Ifeoma Okafor
---------------------------
Maths      78   A   Pass
English    64   B   Pass
Biology    49   D   Pass
Physics    91   A   Pass
Civic Ed   38   F   Fail
---------------------------
Total: 320 / 500
Average: 64.0 (B)
Best:  Physics (91)
Weakest: Civic Ed (38)
Passed: 4  Failed: 1
Remark: Very good. Keep it up!
Status: ✅ PROMOTED
```

## How to run

Open `index.html` and check the console, or run `node script.js`.

## Notes (fill in before submitting)

- Bonus features attempted:
- AI tools or references used (cite them):
