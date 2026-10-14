# Practical 12: Angular Components, Data Binding, and Directives

## Aim
To construct a single-page Angular application for "Outfitly" demonstrating the creation of reusable standalone components, all four variants of Angular data binding, and fundamental structural and attribute directives.

## Technologies Used
- Angular 17+ (Standalone Component Architecture)
- TypeScript 5.x
- HTML5 & CSS3

## Files & Components Included
- `src/app/models/outfit.model.ts`: TypeScript interface defining the `Outfit` entity structure.
- `src/app/components/navbar/`: Reusable header component rendering stats and branding using `@Input()`.
- `src/app/components/outfit-card/`: Child component encapsulating outfit visuals, pieces breakdown, stock badges, and emitting `@Output() favoriteToggled`.
- `src/app/app.component.ts`: Master controller managing state, two-way bound properties, and computed outfit filters.
- `src/app/app.component.html`: Master view uniting components, directives, and binding channels.

## Key Angular Concepts Implemented

### 1. Reusable Components
- `NavbarComponent`: Child component receiving props via `@Input() totalOutfits` and `@Input() favoriteCount`.
- `OutfitCardComponent`: Child component receiving `@Input() outfit` and notifying the parent via `@Output() favoriteToggled`.

### 2. The Four Types of Data Binding
1. **Interpolation `{{ }}`**: Displays dynamic text (e.g. `{{ outfit.name }}`, `{{ outfit.price }}`).
2. **Property Binding `[ ]`**: Binds DOM/Component properties (e.g. `[totalOutfits]="outfits.length"`, `[style.background-color]="..."`, `[title]="..."`).
3. **Event Binding `( )`**: Listens for user interactions (e.g. `(click)="resetFilters()"`, `(favoriteToggled)="handleFavoriteToggle($event)"`).
4. **Two-Way Data Binding `[( )]`**: Synchronizes view and model simultaneously via `[(ngModel)]="searchKeyword"` and `[(ngModel)]="selectedCategory"`.

### 3. Directives
- **Structural Directives**:
  - `*ngFor="let outfit of filteredOutfits; let i = index"`: Dynamically iterates through outfit card templates.
  - `*ngFor="let cat of categories"`: Populates category filter dropdown options.
  - `*ngIf="filteredOutfits.length === 0; else gridTemplate"`: Toggles empty state vs. catalogue grid.
- **Attribute Directives**:
  - `[ngClass]="{'out-of-stock': !outfit.inStock, 'is-favorite': outfit.isFavorite}"`: Conditionally applies CSS classes.
  - `[ngStyle]="{'border-top-color': outfit.colorHex}"`: Dynamically sets inline CSS border colors.

## How to Run

1. Open a terminal and navigate to the project directory:
   ```powershell
   cd week-12-angular-basics
   ```
2. Install the necessary node dependencies (one-time setup):
   ```powershell
   npm install
   ```
3. Start the Angular development server:
   ```powershell
   npm start
   # or: npx ng serve
   ```
4. Open your browser and navigate to `http://localhost:4200/`.

## Expected Output
A responsive Angular application featuring a live reactive search input, category dropdown filters, and interactive outfit cards that toggle favorites and dynamic styles.
