// ================================================================
// OUTFITLY - PRACTICAL 9: FETCH JSON & XML PARSING JAVASCRIPT
// ================================================================

document.addEventListener("DOMContentLoaded", function () {
    const fetchJsonBtn = document.getElementById("fetchJsonBtn");
    const fetchXmlBtn = document.getElementById("fetchXmlBtn");
    const clearBtn = document.getElementById("clearBtn");
    const displayGrid = document.getElementById("displayGrid");
    const statusMessage = document.getElementById("statusMessage");

    // 1. Fetch and Parse JSON Data
    async function loadJsonOutfits() {
        statusMessage.textContent = "⏳ Fetching and parsing outfits.json...";
        displayGrid.innerHTML = "";

        try {
            const response = await fetch("outfits.json");
            if (!response.ok) {
                throw new Error(`Failed to load JSON (HTTP ${response.status})`);
            }

            // Parse response as native JavaScript Object Array
            const outfitsData = await response.json();

            // Render JSON Outfit Cards
            outfitsData.forEach(item => {
                const card = document.createElement("article");
                card.className = "outfit-card json-card";
                card.innerHTML = `
                    <span class="source-badge source-json">JSON</span>
                    <h3 class="card-title">${item.name}</h3>
                    <div class="card-meta">ID: ${item.id} | Category: ${item.category} | Season: ${item.season}</div>
                    <div class="card-pieces">
                        <div><strong>Top:</strong> ${item.top}</div>
                        <div><strong>Bottom:</strong> ${item.bottom}</div>
                        <div><strong>Footwear:</strong> ${item.footwear}</div>
                    </div>
                    <div class="card-price">₹${item.price}</div>
                `;
                displayGrid.appendChild(card);
            });

            statusMessage.innerHTML = `✅ Successfully fetched and parsed <strong>${outfitsData.length} outfits</strong> from <code>outfits.json</code> using <code>response.json()</code>.`;

        } catch (error) {
            statusMessage.innerHTML = `<span style="color: #dc2626;">❌ Error: ${error.message} (Please run via Live Server)</span>`;
        }
    }

    // 2. Fetch and Parse XML Data
    async function loadXmlOutfits() {
        statusMessage.textContent = "⏳ Fetching and parsing outfits.xml...";
        displayGrid.innerHTML = "";

        try {
            const response = await fetch("outfits.xml");
            if (!response.ok) {
                throw new Error(`Failed to load XML (HTTP ${response.status})`);
            }

            // Extract raw text
            const xmlText = await response.text();

            // Use DOMParser to parse raw XML string into an XML Document Object Model
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlText, "text/xml");

            // Check for XML parsing errors
            const parseError = xmlDoc.getElementsByTagName("parsererror");
            if (parseError.length > 0) {
                throw new Error("XML Parsing failed due to syntax error in XML file.");
            }

            // Extract outfit elements
            const outfitElements = xmlDoc.getElementsByTagName("outfit");

            for (let i = 0; i < outfitElements.length; i++) {
                const outfitNode = outfitElements[i];

                // Extract attributes and child element text contents
                const id = outfitNode.getAttribute("id") || "N/A";
                const category = outfitNode.getAttribute("category") || "General";
                const name = outfitNode.getElementsByTagName("name")[0]?.textContent || "Unnamed Outfit";
                const season = outfitNode.getElementsByTagName("season")[0]?.textContent || "All-Season";
                const price = outfitNode.getElementsByTagName("price")[0]?.textContent || "0";
                const top = outfitNode.getElementsByTagName("top")[0]?.textContent || "N/A";
                const bottom = outfitNode.getElementsByTagName("bottom")[0]?.textContent || "N/A";
                const footwear = outfitNode.getElementsByTagName("footwear")[0]?.textContent || "N/A";

                const card = document.createElement("article");
                card.className = "outfit-card xml-card";
                card.innerHTML = `
                    <span class="source-badge source-xml">XML</span>
                    <h3 class="card-title">${name}</h3>
                    <div class="card-meta">ID: ${id} | Category: ${category} | Season: ${season}</div>
                    <div class="card-pieces">
                        <div><strong>Top:</strong> ${top}</div>
                        <div><strong>Bottom:</strong> ${bottom}</div>
                        <div><strong>Footwear:</strong> ${footwear}</div>
                    </div>
                    <div class="card-price">₹${price}</div>
                `;
                displayGrid.appendChild(card);
            }

            statusMessage.innerHTML = `✅ Successfully fetched and parsed <strong>${outfitElements.length} outfits</strong> from <code>outfits.xml</code> using <code>DOMParser</code>.`;

        } catch (error) {
            statusMessage.innerHTML = `<span style="color: #dc2626;">❌ Error: ${error.message} (Please run via Live Server)</span>`;
        }
    }

    // Button event listeners
    fetchJsonBtn.addEventListener("click", loadJsonOutfits);
    fetchXmlBtn.addEventListener("click", loadXmlOutfits);
    clearBtn.addEventListener("click", () => {
        displayGrid.innerHTML = "";
        statusMessage.textContent = "Cards cleared. Choose a format to fetch data.";
    });
});
