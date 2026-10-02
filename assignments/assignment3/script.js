// ============================================================
// Assignment 3: Product inventory (15 pts)
// Due: Wed, Oct 7, 11:59 PM · Submit: week7/assignment3
// Rule: no for or while loops, and no mutating. Use map, filter and spread.
// ============================================================

const inventory = [
  { id: 1, name: "Laptop Bag", price: 12000, qty: 8,  category: "accessories" },
  { id: 2, name: "USB-C Hub",  price: 18500, qty: 0,  category: "electronics" },
  { id: 3, name: "Headphones", price: 25000, qty: 5,  category: "electronics" },
  { id: 4, name: "Notebook",   price: 1500,  qty: 40, category: "stationery" },
];

// ---------- Part A: Store object (8 pts) ----------
const store = {
  name: "Tech Corner",
  inventory: inventory,

  listProducts() {
    // TODO: forEach + destructuring → "Laptop Bag — ₦12,000 (8 in stock)"
  },

  addProduct(product) {
    // TODO: work out the next id (highest id + 1), then
    // this.inventory = [...this.inventory, { ...product, id: nextId }]
  },

  updateProduct(id, changes) {
    // TODO: map; for the matching id return { ...product, ...changes }
    // Save the result to this.inventory and return it
  },

  removeProduct(id) {
    // TODO: filter out the matching id
  },

  inStock() {
    // TODO: products with qty > 0
  },

  totalValue() {
    // TODO: reduce price × qty → 281000 for the starting data
  },

  // ---------- Part B (1 of 3) ----------
  countByCategory() {
    // TODO: reduce → { accessories: 1, electronics: 2, stationery: 1 }
  },
};

// ---------- Part B: Helpers (4 pts) ----------
// createProduct(name, price, ...tags) → { name, price, qty: 0, category: "uncategorised", tags }
// getSummary({ name, price, qty = 0 }) → "Notebook: ₦1,500 × 40 = ₦60,000"


// ---------- Part C: Prove it (3 pts) ----------
// const original = store.inventory;
// store.updateProduct(1, { price: 11000 });
// store.addProduct(createProduct("Mouse Pad", 2500, "desk", "gaming"));
// console.log(original[0].price); // should still be 12000
// console.log(original.length);   // should still be 4
