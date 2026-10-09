# Day 2 Demo Guide: Event Lab

**Time:** about 30 minutes · **Files:** `index.html`, `styles.css`, `demo-start.js` (type here), `demo-finished.js` (reference)

**Goal:** five small "stations", each showing one idea about events. Code one station, test it, then ask a question before moving on.

## Stations

| Station | Concept | Key code | Say this |
| --- | --- | --- | --- |
| 1 · Click | Adding a listener | `likeBtn.addEventListener("click", handleLike)` | "Pass the function, don't call it. `handleLike()` would run once, right now." Show the bug deliberately by adding `()`. |
| 2 · Input & keyboard | The event object | `event.target.value`, `event.key` | "Every handler receives an event object. Let's `console.log(event)` and look inside." |
| 3 · Form submit | Default behaviour | `event.preventDefault()` | Submit without `preventDefault` first so students see the page reload and lose the message. Then fix it. |
| 4 · Bubbling | Propagation | `event.target` vs `event.currentTarget`, `stopPropagation()` | Click inner and watch all three boxes flash. Tick the checkbox and click again. |
| 5 · Delegation | One listener on the parent | `fruitList.addEventListener("click", …)` + `event.target.closest("li")` | First show the "naive" version: a listener on each `<li>`. Add a fruit and show its ✕ doesn't work. Then refactor to delegation. |

## Suggested "naive" code for Station 5 (to show the problem)

```js
document.querySelectorAll("#fruit-list li").forEach((li) => {
  li.addEventListener("click", () => li.classList.toggle("selected"));
});
// Add a new fruit → clicking it does nothing. Why? It didn't exist when we attached listeners.
```

## Check for understanding

1. What's the difference between `event.target` and `event.currentTarget`?
2. Why listen for `submit` on the form rather than `click` on the button?
3. In Station 5, why does a fruit added *later* still respond to clicks?
4. When might `stopPropagation()` cause problems? *(it can break other listeners higher up, like analytics or "click outside to close" menus)*

## Common mistakes

- `addEventListener("onclick", …)`: the event name has no `on`.
- Calling the handler: `addEventListener("click", handleLike())`.
- Forgetting `preventDefault()` on forms, so the page refreshes and wipes everything.
- With delegation, using `event.target` directly when the click landed on a child (`<span>`) instead of the `<li>`. Fix it with `closest()`.
