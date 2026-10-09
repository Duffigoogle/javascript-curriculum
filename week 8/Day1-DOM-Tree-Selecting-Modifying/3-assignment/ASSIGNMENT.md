# Day 1 Assignment: Gadget Store

**Topic:** The DOM tree; selecting and modifying elements
**Due:** before Wednesday's class (Oct 7) · **Estimated time:** 1.5 to 2 hours · **Work:** individual

## Brief

A small gadget shop wants its product page built from data instead of hand-written HTML. You're given an array of 6 products in `starter/app.js`. Use JavaScript to render the whole catalogue onto the page. **Do not edit `index.html`**, and do not use `innerHTML` to build the cards.

## Requirements

1. **Select** the elements you need: `#product-grid`, `#summary`, `#deal`, `#deal-text`.
2. **Write `createProductCard(product)`.** It builds and returns this structure using `createElement` and `textContent`:
   ```html
   <article class="product" data-category="Audio">
     <img src="…" alt="Wireless Earbuds">
     <h3>Wireless Earbuds</h3>
     <p class="category">Audio</p>
     <p class="price">₦25,000</p>
     <p class="stock">In stock</p>
   </article>
   ```
   Use the provided `formatNaira()` helper for prices.
3. **Render** a card for every product into `#product-grid`.
4. **Out of stock:** add the class `out-of-stock` and show "Out of stock".
5. **Summary:** show the totals in `#summary`, for example `6 products · 4 in stock`. These must be calculated, not typed in.
6. **Best deal:** find the cheapest **in-stock** product. Then:
   - add the class `best-deal` to its card
   - add `<span class="badge">Best deal</span>` inside the card
   - remove the `hidden` attribute from `#deal`
   - write its name and price in `#deal-text`
7. **Data attributes:** every card gets `data-category`.

## Stretch goals (optional, extra credit)

- Sort the cards from cheapest to most expensive before rendering.
- Add a "Last updated" line under the summary showing today's date (`new Date().toLocaleDateString()`).
- Add a 7th product to the array and confirm everything updates automatically without other code changes.

## Submission

Push the `starter` folder to a GitHub repository (or zip it) and submit the link. Include a screenshot of your finished page.

## Grading rubric (20 points)

| Criteria | Points |
| --- | --- |
| Cards built with `createElement` / `textContent` (no `innerHTML`) | 4 |
| All 6 products render with correct name, image, category and price | 4 |
| Out-of-stock styling and text applied correctly | 3 |
| Summary is calculated (not hard-coded) and correct | 3 |
| Best deal found correctly (cheapest *in-stock*), badge and section shown | 4 |
| `data-category` on every card; clean, commented, readable code | 2 |
| **Stretch goals** | up to +3 |
