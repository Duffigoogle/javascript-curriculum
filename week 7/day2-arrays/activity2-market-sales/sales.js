// ============================================================
// Activity 2: Market sales analyser (groups of 3, 35 min)
// Roles: Driver types · Navigator directs · Tester checks answers
// Rule: no for or while loops!
// ============================================================

const sales = [
  { item: "Rice (5kg)",       price: 8500, qty: 12, category: "grains" },
  { item: "Beans (1kg)",      price: 2200, qty: 20, category: "grains" },
  { item: "Palm oil",         price: 4500, qty: 6,  category: "oils" },
  { item: "Indomie (carton)", price: 9800, qty: 3,  category: "noodles" },
  { item: "Groundnut oil",    price: 6000, qty: 0,  category: "oils" },
];

// 1. forEach: print each line as "Rice (5kg): 12 sold"
//    ({ item, qty }) unpacks the object. Full lesson on Monday!
sales.forEach(({ item, qty }) => {
  // TODO
});

// 2. map: revenue per item (price × qty)
const revenues = sales.map((s) => {
  // TODO: return price × qty
});
console.log("Revenues:", revenues);

// 3. filter: unsold items (qty is 0)
const unsold = sales.filter((s) => {
  // TODO: return true for items with qty 0
});
console.log("Unsold:", unsold);

// 4. reduce: total revenue for the day
const totalRevenue = sales.reduce((sum, s) => {
  // TODO: return the new running total
  return sum;
}, 0);
console.log("Total revenue:", totalRevenue);

// 5. reduce: best seller by revenue (done for you, read it carefully!)
const best = sales.reduce((top, s) =>
  s.price * s.qty > top.price * top.qty ? s : top
);
console.log("Best seller:", best.item);

// 6. Chain: names of items that earned over ₦30,000
const bigEarners = sales
  .filter((s) => false) // TODO: fix the condition
  .map((s) => s);       // TODO: return just the item name
console.log("Over ₦30,000:", bigEarners);

// Check your answers:
// total ₦202,400 · best seller Rice (5kg) at ₦102,000
// over ₦30,000: Rice (5kg), Beans (1kg)

// Stretch 1: units sold per category with reduce → { grains: 32, oils: 6, noodles: 3 }
// Stretch 2: display the results on the page with map and join
