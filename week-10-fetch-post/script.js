// ================================================================
// OUTFITLY - PRACTICAL 10: FETCH POST REQUEST JAVASCRIPT
// ================================================================

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("outfitPostForm");
    const submitBtn = document.getElementById("submitBtn");
    const statusTag = document.getElementById("statusTag");
    const responseBox = document.getElementById("responseBox");
    const previewCard = document.getElementById("previewCard");
    const previewTitle = document.getElementById("previewTitle");
    const previewMeta = document.getElementById("previewMeta");
    const previewNotes = document.getElementById("previewNotes");
    const previewBudget = document.getElementById("previewBudget");

    // Endpoint: free JSON placeholder REST testing API
    const API_ENDPOINT = "https://jsonplaceholder.typicode.com/posts";

    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        // 1. Gather form input data
        const payload = {
            title: document.getElementById("title").value.trim(),
            category: document.getElementById("category").value,
            occasion: document.getElementById("occasion").value.trim(),
            season: document.getElementById("season").value,
            budget: Number(document.getElementById("budget").value),
            notes: document.getElementById("notes").value.trim(),
            submittedAt: new Date().toISOString()
        };

        // 2. Set UI loading state
        submitBtn.disabled = true;
        submitBtn.textContent = "⏳ Sending HTTP POST Request...";
        statusTag.className = "status-tag sending";
        statusTag.textContent = "Status: Sending POST Request...";
        responseBox.textContent = `--> POST ${API_ENDPOINT}\n--> Content-Type: application/json\n--> Body:\n${JSON.stringify(payload, null, 2)}\n\nAwaiting server response...`;

        try {
            // 3. Execute Fetch POST request
            const response = await fetch(API_ENDPOINT, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8"
                },
                body: JSON.stringify(payload)
            });

            // 4. Parse server response
            const responseData = await response.json();

            // 5. Update Status Tag
            statusTag.className = "status-tag created";
            statusTag.textContent = `Status: ${response.status} ${response.statusText || "Created"}`;

            // 6. Format and display response
            const outputLog = [
                `✅ HTTP Response: ${response.status} Created`,
                `Date: ${new Date().toUTCString()}`,
                `Content-Type: ${response.headers.get("content-type") || "application/json"}`,
                `Server Assigned ID: ${responseData.id}`,
                "",
                "--- Response JSON Payload Returned by Server ---",
                JSON.stringify(responseData, null, 2)
            ].join("\n");

            responseBox.textContent = outputLog;

            // 7. Update Live Preview Card
            previewTitle.textContent = `✨ ${responseData.title}`;
            previewMeta.textContent = `Category: ${responseData.category} | Occasion: ${responseData.occasion} | Season: ${responseData.season}`;
            previewNotes.textContent = responseData.notes ? `Stylist Note: ${responseData.notes}` : "No specific notes provided.";
            previewBudget.textContent = `Estimated Budget: ₹${responseData.budget}`;
            previewCard.style.display = "block";

        } catch (error) {
            // 8. Graceful offline fallback simulation for lab environments without active internet
            console.warn("Network request failed, running simulated offline response:", error);

            const simulatedResponse = {
                id: Math.floor(Math.random() * 900) + 101,
                ...payload,
                _simulatedNote: "Generated via local simulated fallback (Offline Lab Mode)"
            };

            statusTag.className = "status-tag created";
            statusTag.textContent = "Status: 201 Created (Offline Lab Simulation)";

            responseBox.textContent = [
                "⚠️ Network request was intercepted or offline.",
                "✅ Simulated HTTP 201 Created successfully:",
                JSON.stringify(simulatedResponse, null, 2)
            ].join("\n");

            previewTitle.textContent = `✨ ${simulatedResponse.title}`;
            previewMeta.textContent = `Category: ${simulatedResponse.category} | Occasion: ${simulatedResponse.occasion}`;
            previewNotes.textContent = simulatedResponse.notes || "No notes.";
            previewBudget.textContent = `Budget: ₹${simulatedResponse.budget}`;
            previewCard.style.display = "block";

        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = "🚀 Send POST Request via Fetch API";
        }
    });
});
