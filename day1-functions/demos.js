// ============================================================
// Week 7 · Day 1 (Wed Sep 30) · Functions: class demos
// Run top to bottom, or comment out sections you haven't reached.
// ============================================================

// ---------- Demo 1: Why functions? ----------
const price1 = 1500;
console.log(price1 + price1 * 0.075);
const price2 = 3200;
console.log(price2 + price2 * 0.075);

function addVat(price) {
  return price + price * 0.075;
}
console.log(addVat(1500)); // 1612.5
console.log(addVat(3200)); // 3440

// ---------- Demo 2: Parameters, arguments, return ----------
function add(a, b) {       // a, b are parameters
  return a + b;
}
const sum = add(2, 3);     // 2, 3 are arguments
console.log(sum);          // 5

function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Ada")); // "Hello, Ada!"

// ---------- Demo 3: return vs console.log ----------
function sayHi(name) {
  console.log(`Hi ${name}`); // prints, but returns nothing
}
const x = sayHi("Ada");
console.log(x); // undefined  <- point this out!

function checkAge(age) {
  if (age < 18) return "Too young"; // early return
  return "Welcome";
}
console.log(checkAge(15), checkAge(30)); // "Too young" "Welcome"

// ---------- Demo 4: Function expressions and hoisting ----------
console.log(double(4)); // 8: declarations are hoisted
function double(n) {
  return n * 2;
}

// Uncomment to show the error:
// console.log(triple(4)); // ReferenceError: Cannot access 'triple' before initialization
const triple = function (n) {
  return n * 3;
};
console.log(triple(4)); // 12

// ---------- Demo 5: Arrow functions ----------
const square = (n) => n * n;             // implicit return
const addArrow = (a, b) => a + b;
const greetArrow = name => `Hi ${name}`;  // one param: () optional
const sayHello = () => "Hello!";          // no params: () required
const describe = (name, age) => {         // braces: return needed
  const status = age >= 18 ? "adult" : "minor";
  return `${name} is an ${status}`;
};
console.log(square(5), addArrow(2, 3), greetArrow("Bola"), sayHello());
console.log(describe("Chidi", 17)); // "Chidi is an minor" -> ask: how would you fix "an"?

// Common bug: braces but no return
const broken = (n) => { n * 2 };
console.log(broken(5)); // undefined

// ---------- Demo 6: Default parameters ----------
const greetDefault = (name = "friend", greeting = "Hello") => `${greeting}, ${name}!`;
console.log(greetDefault());                // "Hello, friend!"
console.log(greetDefault("Chidi"));         // "Hello, Chidi!"
console.log(greetDefault("Chidi", "Bawo")); // "Bawo, Chidi!"
console.log(greetDefault(null));            // "Hello, null!"  null does NOT trigger the default

const addVatRate = (amount, rate = 0.075) => amount * (1 + rate);
console.log(addVatRate(1000));       // 1075
console.log(addVatRate(1000, 0.05)); // 1050

// ---------- Demo 7: Scope and pure functions ----------
const course = "MERN";
function showCourse() {
  const week = 7;                         // local
  console.log(`${course} week ${week}`);  // can read the outer variable
}
showCourse();
// console.log(week); // ReferenceError: week is not defined

let total = 0;
const addBad = (n) => { total += n; };  // changes something outside
const addGood = (t, n) => t + n;        // pure: same input, same output
addBad(5);
console.log(total, addGood(0, 5));      // 5 5

// ---------- Demo 8: Functions are values (callbacks) ----------
const shout = text => text.toUpperCase() + "!";
const whisper = text => text.toLowerCase() + "...";

function speak(message, style) {
  return style(message); // call the function we received
}
console.log(speak("Hello", shout));   // "HELLO!"
console.log(speak("Hello", whisper)); // "hello..."
// speak("Hi", shout()); // ❌ TypeError: shout() runs immediately with no text
