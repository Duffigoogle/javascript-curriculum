// =============================================================
// Day 2 Class Activity: Colour Palette Picker
// Pairs · ~30 minutes · Read ACTIVITY.md first.
// RULE: use ONE click listener on #palette (event delegation),
//       not one listener per swatch.
// =============================================================

const palette = document.getElementById("palette");
const preview = document.getElementById("preview");
const previewName = document.getElementById("preview-name");
const previewHex = document.getElementById("preview-hex");
const pickCount = document.getElementById("pick-count");
const copyBtn = document.getElementById("copy-btn");
const copyStatus = document.getElementById("copy-status");
const hoverHint = document.getElementById("hover-hint");
const addForm = document.getElementById("add-form");
const newColor = document.getElementById("new-color");
const newName = document.getElementById("new-name");

let picks = 0;

// TASK 1: Write a function selectSwatch(swatch) that:
//   - sets the preview background to swatch.dataset.color
//   - shows swatch.dataset.name and the hex code in the preview
//   - removes "selected" from any other swatch and adds it to this one
//   - adds 1 to picks and updates #pick-count


// TASK 2: Add ONE click listener to #palette (delegation).
//   Use event.target.closest(".swatch") to find the clicked swatch.
//   Ignore clicks that aren't on a swatch. Call selectSwatch().


// TASK 3: Handle the add-colour form "submit":
//   - prevent the page from reloading
//   - create <li><button class="swatch" ...></button></li> with
//     data-color, data-name, aria-label and a background colour
//   - append it to #palette, then reset the form
//   The new swatch must work with clicks WITHOUT adding a new listener.


// TASK 4: Keyboard shortcuts. Listen for "keydown" on document.
//   Keys "1" to "9" select the 1st to 9th swatch.
//   Don't trigger shortcuts while the user is typing in the name input
//   (check event.target.tagName or event.target.matches("input")).


// TASK 5: "Copy hex" button: copy the current hex with
//   navigator.clipboard.writeText(text), show "Copied!" in #copy-status,
//   and clear the message after 1.5 seconds (setTimeout).


// TASK 6: Double-click a swatch to delete it ("dblclick" + delegation).


// ⭐ BONUS: When the mouse moves over a swatch, show its name in #hover-hint
//   using ONE "mouseover" listener on #palette.
