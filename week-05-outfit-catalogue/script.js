// ================================================================
// OUTFITLY - PRACTICAL 5: OUTFIT CATALOGUE JAVASCRIPT
// ================================================================

// Outfit dataset
const outfits = [
    {
        id: 1,
        name: "Campus Denim Casual",
        category: "Casual",
        season: "All-Season",
        occasion: "Daily College",
        price: 2499,
        rating: 4.8,
        icon: "👕",
        top: "White Cotton Crew Tee + Indigo Overshirt",
        bottom: "Slim-fit Charcoal Chinos",
        footwear: "Classic White Sneakers",
        tip: "Roll the overshirt sleeves up once for an effortless smart-casual look."
    },
    {
        id: 2,
        name: "Executive Presentation Suit",
        category: "Formal",
        season: "All-Season",
        occasion: "Viva & Project Review",
        price: 6999,
        rating: 4.9,
        icon: "👔",
        top: "Tailored Navy Blazer + Crisp White Shirt",
        bottom: "Matching Navy Wool Trousers",
        footwear: "Derby Brown Leather Shoes",
        tip: "Pair with a minimalist silver watch and dark belt matching shoes."
    },
    {
        id: 3,
        name: "Neon Glow Fest Party Look",
        category: "Party",
        season: "Summer / Autumn",
        occasion: "College Fest / Night Out",
        price: 3899,
        rating: 4.7,
        icon: "🎉",
        top: "Black Printed Cuban Collar Shirt",
        bottom: "Tapered Black Cargo Jeans",
        footwear: "High-Top Chunky Sneakers",
        tip: "Layer with subtle silver chain necklace to elevate party vibes."
    },
    {
        id: 4,
        name: "Morning Jog Athleisure",
        category: "Athleisure",
        season: "Spring / Summer",
        occasion: "Sports & Gym",
        price: 1999,
        rating: 4.6,
        icon: "🏃",
        top: "Breathable Dri-FIT Heather Grey Tee",
        bottom: "Performance Black Track Joggers",
        footwear: "Cushioned Running Shoes",
        tip: "Keep a moisture-wicking zip jacket handy for cool mornings."
    },
    {
        id: 5,
        name: "Alpine Winter Overcoat",
        category: "Winter",
        season: "Winter",
        occasion: "Cold Weather",
        price: 5499,
        rating: 4.9,
        icon: "🧥",
        top: "Camel Wool Long Overcoat + Turtleneck Knit",
        bottom: "Dark Wash Heavyweight Denim",
        footwear: "Suede Chelsea Boots",
        tip: "A patterned wool scarf adds both warmth and sophisticated texture."
    },
    {
        id: 6,
        name: "Linen Breeze Weekend Set",
        category: "Casual",
        season: "Summer",
        occasion: "Café Hangout",
        price: 2899,
        rating: 4.5,
        icon: "☕",
        top: "Olive Green Breathable Linen Shirt",
        bottom: "Beige Relaxed Drawstring Pants",
        footwear: "Woven Loafers",
        tip: "Light earthly colors reflect heat and keep you feeling fresh all afternoon."
    },
    {
        id: 7,
        name: "Midnight Gala Velvet Tux",
        category: "Party",
        season: "Winter / Party",
        occasion: "Farewell / Gala",
        price: 8499,
        rating: 5.0,
        icon: "✨",
        top: "Deep Emerald Velvet Tuxedo Jacket",
        bottom: "Satin Trim Formal Black Pants",
        footwear: "Patent Leather Dress Shoes",
        tip: "Keep accessories understated to let the velvet jacket be the centerpiece."
    },
    {
        id: 8,
        name: "Cozy Fleece Street Hoodie",
        category: "Winter",
        season: "Winter",
        occasion: "Casual Hangouts",
        price: 2299,
        rating: 4.4,
        icon: "❄️",
        top: "Heavyweight Lavender Fleece Hoodie",
        bottom: "Relaxed Fit Corduroy Trousers",
        footwear: "Vintage Skate Shoes",
        tip: "Layer an oversized puffer vest over the hoodie for extra insulation."
    }
];

// Favorites state
const favorites = new Set();

// DOM Elements
const outfitGrid = document.getElementById("outfitGrid");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const filterButtons = document.querySelectorAll(".filter-btn");
const favCount = document.getElementById("favCount");
const modalOverlay = document.getElementById("modalOverlay");
const modalClose = document.getElementById("modalClose");
const modalBody = document.getElementById("modalBody");

// Active state variables
let currentCategory = "all";
let currentSearchTerm = "";
let currentSort = "default";

// Render outfits to the DOM
function renderOutfits() {
    // 1. Filter by category
    let filtered = outfits.filter(outfit => {
        const matchesCategory = currentCategory === "all" || outfit.category === currentCategory;
        const matchesSearch = outfit.name.toLowerCase().includes(currentSearchTerm) ||
                              outfit.top.toLowerCase().includes(currentSearchTerm) ||
                              outfit.bottom.toLowerCase().includes(currentSearchTerm) ||
                              outfit.occasion.toLowerCase().includes(currentSearchTerm);
        return matchesCategory && matchesSearch;
    });

    // 2. Sort
    if (currentSort === "price-asc") {
        filtered.sort((a, b) => a.price - b.price);
    } else if (currentSort === "price-desc") {
        filtered.sort((a, b) => b.price - a.price);
    } else if (currentSort === "rating-desc") {
        filtered.sort((a, b) => b.rating - a.rating);
    }

    // 3. Clear container
    outfitGrid.innerHTML = "";

    // 4. Handle empty results
    if (filtered.length === 0) {
        outfitGrid.innerHTML = `
            <div class="empty-state">
                <h3>🔍 No matching outfits found</h3>
                <p>Try searching for a different item or switch category filters.</p>
            </div>
        `;
        return;
    }

    // 5. Build Cards
    filtered.forEach(outfit => {
        const isFav = favorites.has(outfit.id);
        const card = document.createElement("article");
        card.className = "outfit-card";

        card.innerHTML = `
            <div class="card-visual">
                ${outfit.icon}
                <button class="fav-btn" data-id="${outfit.id}" title="Toggle Favorite">
                    ${isFav ? "❤️" : "🤍"}
                </button>
                <span class="card-category-badge">${outfit.category}</span>
            </div>
            <div class="card-content">
                <h3 class="card-title">${outfit.name}</h3>
                <p class="card-pieces">
                    <strong>Pieces:</strong> ${outfit.top}, ${outfit.bottom}
                </p>
                <div class="card-footer">
                    <div>
                        <span class="card-price">₹${outfit.price}</span>
                        <div style="font-size: 0.8rem; color: #f59e0b;">⭐ ${outfit.rating} / 5.0</div>
                    </div>
                    <button class="btn-details" data-id="${outfit.id}">Styling Tip</button>
                </div>
            </div>
        `;

        outfitGrid.appendChild(card);
    });

    // Attach listeners to newly created buttons
    attachCardListeners();
}

// Attach event listeners to favorite and details buttons
function attachCardListeners() {
    // Favorite toggle
    document.querySelectorAll(".fav-btn").forEach(btn => {
        btn.addEventListener("click", function (e) {
            e.stopPropagation();
            const id = parseInt(this.getAttribute("data-id"));
            if (favorites.has(id)) {
                favorites.delete(id);
            } else {
                favorites.add(id);
            }
            favCount.textContent = favorites.size;
            renderOutfits();
        });
    });

    // Details Modal
    document.querySelectorAll(".btn-details").forEach(btn => {
        btn.addEventListener("click", function () {
            const id = parseInt(this.getAttribute("data-id"));
            openModal(id);
        });
    });
}

// Open Details Modal
function openModal(id) {
    const outfit = outfits.find(item => item.id === id);
    if (!outfit) return;

    modalBody.innerHTML = `
        <div style="text-align: center; font-size: 3rem; margin-bottom: 10px;">${outfit.icon}</div>
        <h2 style="color: #1e293b; margin-bottom: 5px;">${outfit.name}</h2>
        <p style="color: #64748b; font-size: 0.9rem; margin-bottom: 15px;"><strong>Occasion:</strong> ${outfit.occasion} | <strong>Season:</strong> ${outfit.season}</p>
        
        <div style="background: #f8fafc; padding: 12px; border-radius: 8px; margin-bottom: 15px; font-size: 0.9rem; line-height: 1.6;">
            <p><strong>Top:</strong> ${outfit.top}</p>
            <p><strong>Bottom:</strong> ${outfit.bottom}</p>
            <p><strong>Footwear:</strong> ${outfit.footwear}</p>
        </div>

        <div style="border-left: 4px solid #4f46e5; padding-left: 10px; margin-bottom: 15px;">
            <strong style="color: #4f46e5; font-size: 0.9rem;">💡 Stylist Advice:</strong>
            <p style="font-size: 0.88rem; color: #334155; margin-top: 4px;">${outfit.tip}</p>
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #e2e8f0; padding-top: 12px;">
            <span style="font-size: 1.25rem; font-weight: bold; color: #4f46e5;">₹${outfit.price}</span>
            <span style="font-size: 0.9rem; color: #f59e0b;">⭐ Rating: ${outfit.rating} / 5.0</span>
        </div>
    `;

    modalOverlay.style.display = "flex";
}

// Close Modal
modalClose.addEventListener("click", () => {
    modalOverlay.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.style.display = "none";
    }
});

// Category Filter Click
filterButtons.forEach(btn => {
    btn.addEventListener("click", function () {
        filterButtons.forEach(b => b.classList.remove("active"));
        this.classList.add("active");
        currentCategory = this.getAttribute("data-category");
        renderOutfits();
    });
});

// Search input event
searchInput.addEventListener("input", function (e) {
    currentSearchTerm = e.target.value.toLowerCase().trim();
    renderOutfits();
});

// Sorting change event
sortSelect.addEventListener("change", function (e) {
    currentSort = e.target.value;
    renderOutfits();
});

// Initial Render
renderOutfits();
