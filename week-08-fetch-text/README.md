# Practical 8: Fetch API to Load Text Asynchronously

## Aim
To implement asynchronous data loading using the JavaScript Fetch API to read and display plain text files (`.txt`) without refreshing the web page.

## Technologies Used
- HTML5
- CSS3
- JavaScript ES6 (Fetch API, `async` / `await`, Promises, Error handling)

## Files Included
- `index.html`: UI container with trigger buttons and asynchronous content terminal box.
- `style.css`: Clean card styling with status indicator badges.
- `script.js`: Fetch logic handling HTTP requests, `response.text()` conversion, status tracking, and error trapping.
- `daily-tip.txt`: External text file containing fashion styling principles.
- `fabric-care.txt`: External text file containing clothing care tips.

## Key Fetch API Concepts Demonstrated
1. **`fetch(url)`**: Returns a `Promise` that resolves to the `Response` object representing the response to the request.
2. **`response.ok` & `response.status`**: Verifies HTTP response codes (200 OK vs 404 Not Found).
3. **`response.text()`**: Asynchronously parses the response stream into a raw text string.
4. **`async / await` and `try...catch`**: Modern clean asynchronous programming syntax.
5. **CORS & Local File Protocol**: Highlights why modern web browsers require an HTTP server (e.g. Live Server) when executing AJAX/Fetch requests.

## How to Run
> **Important Note for College Labs:** Browsers restrict `fetch()` over `file:///` URLs due to CORS security policies. Always run using a local server:

1. In VS Code, right-click `week-08-fetch-text/index.html` and choose **"Open with Live Server"**.
   *(Alternatively: Open terminal in folder and run `npx http-server` or `python -m http.server 8000`)*.
2. Click **"Load Daily Styling Tip"** to see the async text load instantly.
3. Click **"Load Fabric Care Guide"** to fetch alternate text data.
4. Click **"Test 404 Error Handling"** to demonstrate robust error handling.

## Expected Output
Instant asynchronous retrieval and display of text files into the designated view container with corresponding status notifications.
