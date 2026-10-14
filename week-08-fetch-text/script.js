// ================================================================
// OUTFITLY - PRACTICAL 8: FETCH API (TEXT) JAVASCRIPT
// ================================================================

document.addEventListener("DOMContentLoaded", function () {
    const loadTipBtn = document.getElementById("loadTipBtn");
    const loadCareBtn = document.getElementById("loadCareBtn");
    const loadErrorBtn = document.getElementById("loadErrorBtn");
    const contentDisplay = document.getElementById("contentDisplay");
    const statusIndicator = document.getElementById("statusIndicator");

    // Asynchronous function to fetch text files
    async function fetchTextFile(filePath, label) {
        // 1. Indicate loading state
        statusIndicator.className = "status-badge status-loading";
        statusIndicator.textContent = `⏳ Loading ${label}...`;
        contentDisplay.textContent = "Fetching content from server...";

        try {
            // 2. Perform Fetch Request
            const response = await fetch(filePath);

            // 3. Verify HTTP Response Status
            if (!response.ok) {
                throw new Error(`HTTP Error! Status: ${response.status} (${response.statusText})`);
            }

            // 4. Extract plain text from response
            const textData = await response.text();

            // 5. Update UI with fetched data
            contentDisplay.textContent = textData;
            statusIndicator.className = "status-badge status-success";
            statusIndicator.textContent = `✅ Successfully loaded ${label} (${response.status} OK)`;

        } catch (error) {
            // 6. Graceful Error Handling
            contentDisplay.innerHTML = `<span style="color: #ef4444;">⚠️ Failed to load content.\nDetails: ${error.message}\n\nNote: If opening via direct file:// protocol, browsers may block fetch() for security. Please run with VS Code Live Server or a local HTTP server.</span>`;
            statusIndicator.className = "status-badge status-error";
            statusIndicator.textContent = `❌ Request failed: ${error.message}`;
        }
    }

    // Event Listeners
    loadTipBtn.addEventListener("click", () => {
        fetchTextFile("daily-tip.txt", "Daily Styling Tip");
    });

    loadCareBtn.addEventListener("click", () => {
        fetchTextFile("fabric-care.txt", "Fabric Care Guide");
    });

    loadErrorBtn.addEventListener("click", () => {
        fetchTextFile("non-existent-file.txt", "Missing File");
    });
});
