# Practical 3: Inline, Internal, and External CSS

## Aim
To demonstrate the implementation, visual effects, and cascade hierarchy of the three methods of applying Cascading Style Sheets (CSS)—Inline, Internal, and External—in the "Outfitly - Outfit Planner" web application.

## Technologies Used
- HTML5
- CSS3 (Cascading Style Sheets)

## Files Included
- `index.html`: Web page incorporating all three CSS styles, annotated with visual comparison badges and a technical summary table.
- `styles.css`: External stylesheet defining site-wide resets, container dimensions, navigation bar, responsive grid, card components, and footer.

## CSS Concepts Demonstrated
1. **External CSS**:
   - Linked via `<link rel="stylesheet" href="styles.css">` inside `<head>`.
   - Used for broad, reusable styles across the entire application (e.g., layout, typography, base button styles, `.outfit-grid`, `.outfit-card`).
2. **Internal CSS**:
   - Embedded within `<style>` tags directly inside the `<head>` of `index.html`.
   - Used for page-specific elements such as `.internal-hero-section`, `.css-badge`, and `.css-rules-table`.
3. **Inline CSS**:
   - Specified via the `style="..."` attribute directly on specific HTML elements.
   - Used for unique, localized overrides such as the red Stylist Alert banner, the emerald dotted card highlight, and one-off color overrides.

## Cascade & Precedence Order
When identical selectors target the same property:
$$\text{Inline CSS} > \text{Internal CSS} > \text{External CSS}$$
*(Inline takes highest precedence, followed by internal styles, and then external styles, assuming equal specificity).*

## How to Run
1. Navigate to `week-03-css-styling/`.
2. Double-click `index.html` to open it in any web browser.
3. Observe how each section visually conveys its corresponding CSS technique.

## Expected Output
A responsive, professionally styled wardrobe showcase page with color-coded badges highlighting where External, Internal, and Inline CSS rules are in effect.
