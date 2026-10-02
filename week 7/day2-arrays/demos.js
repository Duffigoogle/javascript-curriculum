// ============================================================
// Week 7 · Day 2 (Fri Oct 2) · Arrays and array methods: class demos
// ============================================================

// ---------- Demo 1: Array basics ----------
const fruits = ["apple", "mango", "pawpaw"];
console.log(fruits[0]);                  // "apple"
console.log(fruits.length);              // 3
console.log(fruits[fruits.length - 1]);  // "pawpaw"
console.log(fruits.at(-1));              // "pawpaw"
console.log(fruits.includes("mango"));   // true
console.log(fruits.indexOf("pawpaw"));   // 2
console.log(fruits.slice(0, 2));         // ["apple", "mango"] (a copy)

fruits.push("orange");   console.log(fruits); // add to end
fruits.pop();            console.log(fruits); // remove from end
fruits.unshift("guava"); console.log(fruits); // add to start
fruits.shift();          console.log(fruits); // remove from start
fruits.splice(1, 1);     console.log(fruits); // remove 1 item at index 1 ("mango")

const mixed = ["Ada", 25, true, null]; // any types
console.log(mixed);

// ---------- Demo 2: Arrays are references ----------
const a = [1, 2, 3];
const b = a;        // same array, two labels
b.push(4);
console.log(a);     // [1, 2, 3, 4] 😬

const c = [...a];   // a real copy (spread: full lesson on Monday)
c.push(5);
console.log(a, c);  // [1, 2, 3, 4] [1, 2, 3, 4, 5]

// ---------- Demo 3: Callbacks ----------
const scores = [45, 82, 67];
scores.forEach((score, index, array) => {
  console.log(index, score, `of ${array.length}`);
});
for (let i = 0; i < scores.length; i++) {
  console.log(i, scores[i]); // the Week 6 way, for comparison
}

// ---------- Demo 4: forEach ----------
const names = ["Ada", "Bola", "Chidi"];
names.forEach(name => console.log(`Welcome, ${name}`));
names.forEach((name, i) => console.log(`${i + 1}. ${name}`));
console.log(names.forEach(n => n)); // undefined: forEach returns nothing

// ---------- Demo 5: map ----------
const prices = [1000, 2500, 4000];
const withVat = prices.map(price => price * 1.075);
console.log(withVat); // [1075, 2687.5, 4300]
console.log(prices);  // [1000, 2500, 4000] unchanged

const labels = prices.map((p, i) => `Item ${i + 1}: ₦${p}`);
console.log(labels);

const html = names.map(n => `<li>${n}</li>`).join("");
console.log(html); // "<li>Ada</li><li>Bola</li><li>Chidi</li>"
// In the browser, try: document.body.innerHTML += `<ul>${html}</ul>`;

// Common bug: braces but no return
console.log(prices.map(p => { p * 2 })); // [undefined, undefined, undefined]

// ---------- Demo 6: filter, find, some, every ----------
const results = [45, 82, 67, 30, 91, 58];
console.log(results.filter(s => s >= 50)); // [82, 67, 91, 58]
console.log(results.filter(s => s < 50));  // [45, 30]
console.log(results.find(s => s > 80));    // 82 (first match)
console.log(results.some(s => s > 90));    // true
console.log(results.every(s => s >= 30));  // true

// ---------- Demo 7: reduce (with a trace) ----------
const total = scores.reduce((sum, score) => {
  console.log(`sum ${sum} + score ${score} = ${sum + score}`);
  return sum + score;
}, 0);
console.log(total); // 194

const highest = scores.reduce((max, s) => (s > max ? s : max), scores[0]);
console.log(highest); // 82

// ---------- Demo 8: Arrays of objects and chaining ----------
const cart = [
  { name: "Keyboard", price: 15000, qty: 1, inStock: true },
  { name: "Mouse",    price: 5000,  qty: 2, inStock: true },
  { name: "Monitor",  price: 90000, qty: 1, inStock: false },
];

const cartTotal = cart
  .filter(item => item.inStock)
  .map(item => item.price * item.qty)
  .reduce((sum, n) => sum + n, 0);
console.log(cartTotal); // 25000

const inStockNames = cart.filter(i => i.inStock).map(i => i.name);
console.log(inStockNames); // ["Keyboard", "Mouse"]
