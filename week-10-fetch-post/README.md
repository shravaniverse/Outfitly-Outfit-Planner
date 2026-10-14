# Practical 10: Fetch API POST Request to Send Data

## Aim
To demonstrate sending JSON data to an HTTP REST endpoint using the Fetch API's `POST` method with appropriate headers, payload serialization (`JSON.stringify`), and handling the returned `201 Created` server response.

## Technologies Used
- HTML5 Forms
- CSS3
- JavaScript ES6 (Fetch API POST, Async/Await, JSON serialization, Headers)
- Free Public Mock API: `https://jsonplaceholder.typicode.com/posts`

## Files Included
- `index.html`: Outfit submission form paired with a live server response inspect terminal and preview card.
- `style.css`: Dual-column layout for immediate feedback alongside data entry.
- `script.js`: Captures form data, constructs the JSON payload, sets headers, executes the POST request, and displays the response.

## Key Fetch POST Options Demonstrated
```javascript
const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
        "Content-Type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify(payload)
});
const responseData = await response.json();
```
- **`method: "POST"`**: Informs the server that new resource creation is intended.
- **`headers: { "Content-Type": "application/json" }`**: Informs the server of the MIME type of the payload.
- **`body: JSON.stringify(payload)`**: Serializes the JavaScript object into a JSON string stream.
- **Offline Fallback Guarantee**: If the college computer lab lacks external internet access, the script detects network failures and simulates a realistic `201 Created` response.

## How to Run
1. Right-click `week-10-fetch-post/index.html` in VS Code and select **"Open with Live Server"**.
2. Fill out the outfit details (Title, Category, Occasion, Budget, Notes).
3. Click **"🚀 Send POST Request via Fetch API"**.
4. Observe the terminal output update with HTTP 201 Created status, response timestamp, and the server-assigned ID (`101`).

## Expected Output
Receipt and display of a valid HTTP 201 response with server acknowledgment and instant dynamic UI reflection without page reload.
