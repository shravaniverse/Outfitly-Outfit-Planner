# Practical 6: XML File Containing Outfit Information

## Aim
To design a structured, well-formed Extensible Markup Language (XML) file that encapsulates multi-layered wardrobe and outfit information for the "Outfitly" application.

## Technologies Used
- XML (Extensible Markup Language 1.0)
- Character Encoding: UTF-8

## Files Included
- `outfits.xml`: The primary well-formed XML dataset containing multiple `<outfit>` entries with nested components, pricing, ratings, and styling advice.
- `view-outfits.html`: A companion viewer utility to render and verify the XML text directly inside a browser.

## XML Design & Hierarchy
```xml
<wardrobe owner="..." seasonYear="...">
    <outfit id="..." category="..." gender="...">
        <name>...</name>
        <occasion>...</occasion>
        <season>...</season>
        <pieces>
            <top fabric="..." color="...">...</top>
            <bottom fabric="..." color="...">...</bottom>
            <footwear style="..." color="...">...</footwear>
            <accessories>
                <item type="...">...</item>
            </accessories>
        </pieces>
        <price currency="...">...</price>
        <rating>...</rating>
        <inStock>...</inStock>
        <stylingAdvice>...</stylingAdvice>
    </outfit>
</wardrobe>
```

## Well-Formedness Rules Followed
1. Single distinct root element (`<wardrobe>`).
2. Every start tag has a corresponding end tag (`<outfit> ... </outfit>`).
3. XML tags are case-sensitive and strictly nested without overlapping.
4. All attribute values are enclosed within double quotes (e.g., `id="OFT101"`, `currency="INR"`).
5. Special characters are escaped using XML entities (e.g., `&amp;` instead of `&`).

## How to Run
1. **Direct Browser Inspection**: Double-click `outfits.xml` in Google Chrome or Microsoft Edge. Modern browsers natively format and color-code XML trees, allowing you to expand and collapse nodes.
2. **Viewer Page**: Open `view-outfits.html` using VS Code Live Server to view formatted text.

## Expected Output
A browser tree displaying all wardrobe elements accurately indented without any XML syntax parsing errors.
