// ============================================================
// Activity 3: Contact book (individual, peer check at each level, 30 min)
// ============================================================

const book = {
  contacts: [
    { name: "Ada Obi",  phone: "0803 111 2222", city: "Lagos" },
    { name: "Bola Ade", phone: "0805 333 4444", city: "Ibadan" },
  ],

  // Level 1: done for you. Notice the destructuring in the callback.
  list() {
    this.contacts.forEach(({ name, phone, city }) => {
      console.log(`${name.padEnd(12)} ${phone}   ${city}`);
    });
  },

  // Level 2
  add(contact) {
    this.contacts = [...this.contacts, { city: "Unknown", ...contact }];
  },

  remove(name) {
    // TODO: keep every contact whose name is NOT the given name (filter)
  },

  // Level 3
  update(name, changes) {
    // TODO: map over contacts; for the matching name return { ...c, ...changes }, otherwise c
    // Save the result in this.contacts and return it. Never change the old objects!
  },

  countByCity() {
    // TODO: reduce into an object like { Lagos: 1, Ibadan: 1, Unknown: 1 }
    return {};
  },

  // Stretch: search(term): case-insensitive match on name OR phone
};

book.add({ name: "Chidi Eze", phone: "0807 555 6666" });

console.log("===== CONTACTS =====");
book.list();
console.log("--------------------");
const counts = book.countByCity();
console.log(Object.entries(counts).map(([city, n]) => `${city}: ${n}`).join("  "));

// Expected output:
// ===== CONTACTS =====
// Ada Obi      0803 111 2222   Lagos
// Bola Ade     0805 333 4444   Ibadan
// Chidi Eze    0807 555 6666   Unknown
// --------------------
// Lagos: 1  Ibadan: 1  Unknown: 1

// Discuss: why does add() put { city: "Unknown" } BEFORE ...contact?
// What happens if you swap them?
