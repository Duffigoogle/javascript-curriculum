// ============================================================
// Activity 1: Naira toolkit (pairs, 40 min)
// Driver and navigator, swap at step 4.
// Fill in every TODO. Each function must RETURN a value.
// ============================================================

// 1. Arrow function with a default rate
const addVat = (amount, rate = 0.075) => {
  // TODO: return amount plus VAT
};

// 2. Function declaration with a default percent
function applyDiscount(amount, percent = 0) {
  // TODO: return amount minus percent% of amount
}

// 3. Done for you: formats a number as naira
const formatNaira = (amount) =>
  "₦" + amount.toLocaleString("en-NG", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

// 4. Split a bill between people
const splitBill = (total, people = 2) => {
  // TODO: return 0 if people is less than 1
  // TODO: otherwise return total divided by people
};

// 5. Use your functions to print the bill
const subtotal = 20000;
const withVat = addVat(subtotal);
// TODO: const discounted = applyDiscount(...)   (10% off)
// TODO: const perPerson = splitBill(...)        (3 people)

console.log("===== BILL =====");
console.log(`Subtotal: ${formatNaira(subtotal)}`);
// TODO: print "With VAT", "After 10% off" and "Each of 3 pays"

// Expected output:
// ===== BILL =====
// Subtotal: ₦20,000.00
// With VAT: ₦21,500.00
// After 10% off: ₦19,350.00
// Each of 3 pays: ₦6,450.00

// Stretch: write calculateBill(subtotal, discount, people) that calls the
// other four functions and RETURNS the whole bill as one string.

// Discussion:
// - Which functions did you make arrows, and why?
// - What should splitBill(5000, 0) return?
