// ================================================================
// OUTFITLY - PRACTICAL 11: TYPESCRIPT CLASSES, INTERFACES & FUNCTIONS
// ================================================================

declare var require: any;
declare var module: any;

// 1. ENUMS & TYPE ALIASES
export enum OutfitCategory {
    Casual = "Casual",
    Formal = "Formal",
    Party = "Party",
    Winter = "Winter",
    Athleisure = "Athleisure"
}

export type Season = "Spring" | "Summer" | "Autumn" | "Winter" | "All-Season";

// 2. INTERFACES
export interface IClothingItem {
    readonly id: string;
    name: string;
    category: OutfitCategory;
    price: number;
    color: string;
    brand?: string; // Optional property
    getDetails(): string;
}

export interface IOutfit {
    outfitId: string;
    title: string;
    season: Season;
    items: IClothingItem[];
    calculateTotalPrice(discountPercent?: number): number;
    getSummary(): string;
}

export interface IStylistReview {
    rating: number; // 1 to 5
    recommendation: string;
    suitableOccasions: string[];
}

// 3. CLASSES
// Class 1: ClothingItem implementing IClothingItem
export class ClothingItem implements IClothingItem {
    readonly id: string;
    public name: string;
    public category: OutfitCategory;
    private _price: number; // Encapsulated private field
    public color: string;
    public brand?: string;

    constructor(id: string, name: string, category: OutfitCategory, price: number, color: string, brand?: string) {
        this.id = id;
        this.name = name;
        this.category = category;
        this._price = price > 0 ? price : 0;
        this.color = color;
        this.brand = brand;
    }

    // Getter and setter for price
    public get price(): number {
        return this._price;
    }

    public set price(value: number) {
        if (value >= 0) {
            this._price = value;
        } else {
            console.warn(`[ClothingItem] Invalid price ₹${value}. Price cannot be negative.`);
        }
    }

    public getDetails(): string {
        const brandInfo = this.brand ? ` [Brand: ${this.brand}]` : "";
        return `${this.name} (${this.color}) - ₹${this._price}${brandInfo}`;
    }
}

// Class 2: Outfit implementing IOutfit
export class Outfit implements IOutfit {
    public outfitId: string;
    public title: string;
    public season: Season;
    public items: IClothingItem[];
    private isFeatured: boolean;

    constructor(outfitId: string, title: string, season: Season = "All-Season", items: IClothingItem[] = []) {
        this.outfitId = outfitId;
        this.title = title;
        this.season = season;
        this.items = items;
        this.isFeatured = false;
    }

    public addItem(item: IClothingItem): void {
        this.items.push(item);
    }

    // Function with optional parameter (discountPercent)
    public calculateTotalPrice(discountPercent: number = 0): number {
        const subtotal = this.items.reduce((sum, item) => sum + item.price, 0);
        if (discountPercent > 0 && discountPercent <= 100) {
            const discount = (subtotal * discountPercent) / 100;
            return Math.round(subtotal - discount);
        }
        return subtotal;
    }

    public getSummary(): string {
        const total = this.calculateTotalPrice();
        const itemNames = this.items.map(item => item.name).join(", ");
        return `[${this.outfitId}] "${this.title}" (${this.season}) | Total: ₹${total} | Items: ${itemNames}`;
    }

    public markAsFeatured(status: boolean = true): void {
        this.isFeatured = status;
    }
}

// Class 3: WardrobeManager - High-level manager
export class WardrobeManager {
    private outfits: Outfit[] = [];

    constructor(public ownerName: string) {}

    public addOutfit(outfit: Outfit): void {
        this.outfits.push(outfit);
    }

    public getAllOutfits(): Outfit[] {
        return this.outfits;
    }

    public findOutfitsWithinBudget(maxBudget: number): Outfit[] {
        return this.outfits.filter(outfit => outfit.calculateTotalPrice() <= maxBudget);
    }

    public calculateTotalWardrobeValue(): number {
        return this.outfits.reduce((total, outfit) => total + outfit.calculateTotalPrice(), 0);
    }
}

// 4. STANDALONE TYPED FUNCTIONS & GENERICS
// Generic function to filter any collection by a matching property value
export function filterByProperty<T, K extends keyof T>(items: T[], key: K, value: T[K]): T[] {
    return items.filter(item => item[key] === value);
}

// Function with default parameter
export function generateStylistAdvice(outfit: Outfit, targetSeason: Season = "Autumn"): IStylistReview {
    const isSeasonMatch = outfit.season === targetSeason || outfit.season === "All-Season";
    const totalCost = outfit.calculateTotalPrice();

    return {
        rating: isSeasonMatch ? 4.9 : 4.2,
        recommendation: isSeasonMatch 
            ? `Excellent choice for ${targetSeason}! Balanced thermal comfort and style.` 
            : `Designed for ${outfit.season}. Consider adding a weather layer for ${targetSeason}.`,
        suitableOccasions: ["College Lecture", "Campus Project Review", "Weekend Gathering"]
    };
}

// ================================================================
// PRACTICAL DEMO EXECUTION
// ================================================================
export function runDemo(): string[] {
    const logs: string[] = [];
    const log = (msg: string) => {
        logs.push(msg);
        console.log(msg);
    };

    log("==========================================================");
    log("👗 OUTFITLY - PRACTICAL 11: TYPESCRIPT EXECUTION DEMO");
    log("==========================================================");

    // Creating Clothing Items (Instances of ClothingItem class)
    const shirt = new ClothingItem("C1", "Oxford Cotton White Shirt", OutfitCategory.Formal, 1800, "White", "Raymond");
    const blazer = new ClothingItem("C2", "Navy Slim-Fit Blazer", OutfitCategory.Formal, 4500, "Navy Blue", "Zara");
    const trousers = new ClothingItem("C3", "Charcoal Wool Trousers", OutfitCategory.Formal, 2200, "Charcoal Grey");
    const shoes = new ClothingItem("C4", "Brown Leather Oxfords", OutfitCategory.Formal, 3200, "Brown");

    const tee = new ClothingItem("C5", "Oversized Graphic Tee", OutfitCategory.Casual, 899, "Black", "H&M");
    const jeans = new ClothingItem("C6", "Relaxed Fit Denim Jeans", OutfitCategory.Casual, 1999, "Washed Blue");
    const sneakers = new ClothingItem("C7", "White Chunky Sneakers", OutfitCategory.Casual, 2499, "White");

    // Creating Outfits
    const formalOutfit = new Outfit("OFT-01", "Campus Presentation Suit", "All-Season", [shirt, blazer, trousers, shoes]);
    const casualOutfit = new Outfit("OFT-02", "Weekend Chill Set", "Summer", [tee, jeans, sneakers]);

    log("\n1. Created Outfits with Interface & Class implementations:");
    log(formalOutfit.getSummary());
    log(`   -> Price without discount: ₹${formalOutfit.calculateTotalPrice()}`);
    log(`   -> Price with 10% student discount: ₹${formalOutfit.calculateTotalPrice(10)}`);

    log("\n" + casualOutfit.getSummary());

    // Wardrobe Manager
    const manager = new WardrobeManager("Alex");
    manager.addOutfit(formalOutfit);
    manager.addOutfit(casualOutfit);

    log(`\n2. Wardrobe Manager for: ${manager.ownerName}`);
    log(`   -> Total Wardrobe Value: ₹${manager.calculateTotalWardrobeValue()}`);

    // Budget search
    const budget = 6000;
    const affordable = manager.findOutfitsWithinBudget(budget);
    log(`\n3. Outfits within ₹${budget} budget:`);
    affordable.forEach(o => log(`   - ${o.title} (₹${o.calculateTotalPrice()})`));

    // Generic Filter Demo
    const allItems = [shirt, blazer, trousers, shoes, tee, jeans, sneakers];
    const formalItems = filterByProperty(allItems, "category", OutfitCategory.Formal);
    log(`\n4. Generic Function Demonstration: filterByProperty(allItems, 'category', OutfitCategory.Formal):`);
    log(`   Found ${formalItems.length} formal clothing items.`);

    // Stylist Advice Function Demo
    const advice = generateStylistAdvice(formalOutfit, "Autumn");
    log(`\n5. Stylist Recommendation Function Output:`);
    log(`   Rating: ⭐ ${advice.rating} / 5.0`);
    log(`   Note: ${advice.recommendation}`);

    log("\n==========================================================");
    log("✅ TypeScript Classes, Interfaces & Functions executed successfully.");
    log("==========================================================");

    return logs;
}

// Auto-run if executed directly in Node
if (typeof require !== "undefined" && require.main === module) {
    runDemo();
}
