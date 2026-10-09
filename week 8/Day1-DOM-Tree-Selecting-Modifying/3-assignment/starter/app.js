// =============================================================
// Day 1 Assignment: Gadget Store (render products with the DOM)
// Read ASSIGNMENT.md first. Do not edit index.html.
// =============================================================

// The product data. Don't hard-code cards in HTML: build them from this array.
const products = [
  { id: 1, name: "Wireless Earbuds", category: "Audio", price: 25000, inStock: true, image: "https://placehold.co/400x300?text=Earbuds" },
  { id: 2, name: "Smart Watch", category: "Wearables", price: 48500, inStock: true, image: "https://placehold.co/400x300?text=Watch" },
  { id: 3, name: "Power Bank 20,000mAh", category: "Accessories", price: 18000, inStock: false, image: "https://placehold.co/400x300?text=Power+Bank" },
  { id: 4, name: "Bluetooth Speaker", category: "Audio", price: 32000, inStock: true, image: "https://placehold.co/400x300?text=Speaker" },
  { id: 5, name: "USB-C Hub", category: "Accessories", price: 15500, inStock: true, image: "https://placehold.co/400x300?text=USB-C+Hub" },
  { id: 6, name: "Fitness Band", category: "Wearables", price: 21000, inStock: false, image: "https://placehold.co/400x300?text=Fitness+Band" },
];

// Helper: formats 25000 → "₦25,000"
function formatNaira(amount) {
  return "₦" + amount.toLocaleString("en-NG");
}

// 1. Select the elements you need from the page (#product-grid, #summary, etc.)


// 2. Write a function createProductCard(product) that BUILDS and RETURNS
//    an <article class="product"> element (see the structure in styles.css).
//    Use createElement + textContent. Do not use innerHTML.


// 3. Loop over products, create a card for each one, and append it to #product-grid.


// 4. Out-of-stock products: add the class "out-of-stock" and set the stock text
//    to "Out of stock".


// 5. Update #summary, e.g. "6 products · 4 in stock".


// 6. Find the cheapest IN-STOCK product. Give its card the class "best-deal",
//    add a <span class="badge">Best deal</span> inside it, show the #deal
//    section (remove the hidden attribute) and fill #deal-text with its
//    name and price.


// 7. Give every card a data-category attribute (e.g. data-category="Audio").
