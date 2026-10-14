# Practical 5: HTML, CSS, and JavaScript Outfit Catalogue

## Aim
To build an interactive, responsive Outfit Catalogue for "Outfitly" that renders data dynamically using JavaScript DOM manipulation, supporting category filtering, keyword searching, sorting, and modal details.

## Technologies Used
- HTML5 (Semantic layout)
- CSS3 (Flexbox, CSS Grid, Custom properties, Responsive design)
- JavaScript ES6 (Objects, Arrays, Higher-Order Functions: `filter()`, `sort()`, `forEach()`, Event Listeners, DOM methods)

## Files Included
- `index.html`: Base page hosting search controls, category pills, favorite counter, and the dynamic catalogue grid container.
- `style.css`: Clean grid-based responsive layout with card hover animations, pill buttons, badges, and modal overlays.
- `script.js`: Array of wardrobe outfits, filtering logic, real-time search, sorting algorithm, favorites manager, and modal popups.

## Key Features & Practical Concepts
1. **Dynamic DOM Generation**: Cards are rendered on the fly using `document.createElement("article")` and template literals.
2. **Category Filtering**: Clicking pills (Casual, Formal, Party, Athleisure, Winter) isolates items using `Array.prototype.filter()`.
3. **Live Search**: The `input` event triggers instantaneous substring search across outfit names, pieces, and occasions.
4. **Sorting**: Dynamic rearrangement by price ascending/descending and rating.
5. **Stateful Interaction**: A Set-based `favorites` counter updates heart badges and header stats dynamically.
6. **Modal Dialog**: Clicking "Styling Tip" opens a detailed modal with comprehensive garment pairings and stylist advice.

## How to Run
1. Open the `week-05-outfit-catalogue/` directory.
2. Double-click `index.html` in your browser.
3. Test clicking category buttons (e.g., "Formal", "Winter") to observe instant filtering.
4. Type search queries such as `denim`, `suit`, or `college` in the search bar.
5. Click the heart icon on any card to increment the favorites counter.
6. Click "Styling Tip" to inspect the detailed modal popup.

## Expected Output
An interactive, fluid wardrobe catalogue showcasing modern front-end web development principles without relying on any external libraries.
