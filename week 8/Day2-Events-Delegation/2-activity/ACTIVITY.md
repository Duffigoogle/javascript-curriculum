# Day 2 Class Activity: Colour Palette Picker

**Format:** pairs · **Time:** 30 minutes · **Review:** 10 minutes

## The scenario

A design team wants a tiny tool to try out brand colours. Clicking a swatch previews it, you can add your own colours, and power users want keyboard shortcuts.

## The one rule

Use **event delegation**: **one** `click` listener on `#palette`, not one listener per swatch. That's what makes swatches you add later work automatically.

## Tasks

| # | What to build | Concepts |
| --- | --- | --- |
| 1 | `selectSwatch(swatch)` updates the preview, the selected state and the counter | `dataset`, `classList`, `style` |
| 2 | One click listener on `#palette` | delegation, `event.target.closest()` |
| 3 | The "Add swatch" form creates a new swatch that works immediately | `submit`, `preventDefault()`, `createElement` |
| 4 | Keys 1–9 pick a swatch, except while typing in the input | `keydown`, `event.key`, `event.target` |
| 5 | "Copy hex" copies the colour and shows "Copied!" for 1.5s | `navigator.clipboard`, `setTimeout` |
| 6 | Double-click deletes a swatch | `dblclick`, delegation |
| ⭐ | Hovering a swatch shows its name in the hint | `mouseover` + delegation |

## Test checklist

- [ ] Clicking each swatch changes the preview and moves the selected border.
- [ ] Clicking the gap between swatches does nothing (and causes no errors in the console).
- [ ] A swatch you add can be clicked and selected straight away.
- [ ] Pressing 3 selects the 3rd swatch, but typing "3" in the name box doesn't.
- [ ] "Copied!" appears and disappears.

> **Note:** the clipboard may be blocked when you open the file directly (`file://`). If it is, use Live Server, or catch the error and show "Copy failed".

## Review questions

1. Why does `closest(".swatch")` matter if the button has no children? *(Good habit: the moment you add an icon or text inside, `event.target` changes.)*
2. What would break in Task 3 if you had attached a listener to each swatch at page load?
3. In Task 4, why check `event.target` before handling the shortcut?
