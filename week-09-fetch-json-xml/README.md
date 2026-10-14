# Practical 9: Fetch API to Retrieve and Parse JSON/XML Data

## Aim
To demonstrate asynchronous data retrieval using the Fetch API, contrasting the parsing techniques required for JSON (`response.json()`) and XML (`DOMParser` with `getElementsByTagName`).

## Technologies Used
- HTML5
- CSS3
- JavaScript ES6 (Fetch API, Promises, `DOMParser`, XML DOM Traversals)
- Data formats: JSON & XML

## Files Included
- `index.html`: Dual-action interface for triggering JSON vs. XML requests.
- `style.css`: Clean grid layout with color-coded badges (Blue for JSON, Orange for XML).
- `script.js`: Implementation of both parsing strategies into unified UI cards.
- `outfits.json`: Dataset stored in structured JSON notation.
- `outfits.xml`: Dataset stored in structured XML elements and attributes.

## Parsing Comparison
| Feature | JSON Parsing | XML Parsing |
|---|---|---|
| **API Method** | `await response.json()` | `await response.text()` |
| **Parser Tool** | Built-in JavaScript engine JSON parser | `new DOMParser().parseFromString(text, 'text/xml')` |
| **Output Type** | Native JavaScript Object / Array | XML Document Object Model tree |
| **Data Access** | Direct dot notation (`item.name`, `item.price`) | DOM queries (`node.getElementsByTagName('name')[0].textContent`) |
| **Attributes** | Direct key-value access | `node.getAttribute('category')` |

## How to Run
1. Right-click `week-09-fetch-json-xml/index.html` in VS Code and select **"Open with Live Server"**.
2. Click **"Fetch & Parse JSON"** to observe instantaneous object mapping.
3. Click **"Fetch & Parse XML"** to inspect XML DOM parsing in real time.
4. Click **"Clear Cards"** to reset the view.

## Expected Output
Both JSON and XML data sources render into identical, polished outfit cards demonstrating proper parsing of each data interchange format.
