# Practical 7: DTD to Validate the XML File

## Aim
To define and apply a Document Type Definition (DTD) that specifies legal building blocks, structural hierarchy, element cardinality, and attribute constraints for validating `outfits.xml` in the Outfitly application.

## Technologies Used
- XML 1.0
- DTD (Document Type Definition - External Schema)

## Files Included
- `outfits.dtd`: External DTD schema containing element (`<!ELEMENT>`) and attribute (`<!ATTLIST>`) definitions.
- `outfits.xml`: Valid XML data file referencing `outfits.dtd` via `<!DOCTYPE wardrobe SYSTEM "outfits.dtd">`.
- `validate-demo.html`: Visual documentation and rule breakdown explaining each DTD validation rule.

## Key DTD Concepts Applied
1. **Root Element Declaration**:
   - `<!ELEMENT wardrobe (outfit+)>`: Specifies that `<wardrobe>` must contain one or more `<outfit>` elements (`+` quantifier).
2. **Strict Element Sequencing**:
   - `<!ELEMENT outfit (name, occasion, season, pieces, price, rating, inStock, stylingAdvice)>`: Children must occur in the exact declared order.
3. **Cardinality Quantifiers**:
   - `+` : One or more (e.g., `outfit+`, `item+`)
   - `?` : Zero or one / optional (e.g., `accessories?`)
4. **Attribute Types & Defaults**:
   - `ID` with `#REQUIRED`: Unique identifier across the entire document.
   - `CDATA` with `#REQUIRED` or `#IMPLIED`: Character data, either mandatory or optional.
   - Enumerated Attributes: `(Casual | Formal | Party | Winter | Athleisure)` restricting values to designated options.
   - Fixed Values: `currency CDATA #FIXED "INR"`.

## How to Run & Verify
1. Open `outfits.xml` directly in an XML-capable browser (such as Edge/Chrome) or open in VS Code.
2. In VS Code with the XML extension (Red Hat), the schema is automatically validated in the status bar.
3. Open `validate-demo.html` in your browser to view the detailed mapping table of elements and constraints.

## Expected Output
An XML document adhering 100% to DTD schema specifications without missing elements, misplaced ordering, or illegal attribute values.
