# Practical 13: Angular Forms, Routing, and Services

## Aim
To engineer an advanced single-page Angular application for "Outfitly" that integrates multi-view client-side routing, centralized state management via injectable Angular services, and an interactive data entry interface using Angular Reactive Forms.

## Technologies Used
- Angular 17+ (Standalone APIs, Dependency Injection, Router)
- Angular Reactive Forms (`ReactiveFormsModule`, `FormGroup`, `FormControl`, `Validators`)
- TypeScript 5.x
- CSS3

## Files & Architecture Included
- `src/app/models/outfit.model.ts`: Central domain model.
- `src/app/services/outfit.service.ts`: `@Injectable({ providedIn: 'root' })` service providing persistent in-memory CRUD operations (`getOutfits`, `addOutfit`, `deleteOutfit`).
- `src/app/app.routes.ts`: Declarative client-side routing table linking routes (`/`, `/catalogue`, `/add-outfit`).
- `src/app/components/navbar/`: Navigation header with `routerLink` and `routerLinkActive` indicators.
- `src/app/pages/home/`: Landing view displaying wardrobe statistics and architectural highlights.
- `src/app/pages/catalogue/`: Wardrobe browser displaying items supplied by the `OutfitService` with deletion capabilities.
- `src/app/pages/add-outfit/`: Reactive form with live control validation that saves new outfits into the service and transitions back to the catalogue via Angular Router.

## Key Angular Concepts Implemented

### 1. Angular Services & Dependency Injection (DI)
- `OutfitService` is decorated with `@Injectable({ providedIn: 'root' })`, allowing Angular's injector to provide a single singleton instance throughout the entire application lifecycle.
- Injected using modern `inject(OutfitService)` syntax.

### 2. Angular Routing (`RouterModule`)
- Routes configured in `app.routes.ts`:
  - `path: ''` &rarr; `HomeComponent`
  - `path: 'catalogue'` &rarr; `CatalogueComponent`
  - `path: 'add-outfit'` &rarr; `AddOutfitComponent`
  - `path: '**'` &rarr; Redirects to `''`
- Uses `<router-outlet></router-outlet>` inside `app.component.html` as the dynamic rendering target.
- Programmatic navigation performed via `this.router.navigate(['/catalogue'])` upon form completion.

### 3. Angular Reactive Forms (`ReactiveFormsModule`)
- Managed in TypeScript through `FormGroup` and `FormControl`:
  - `name`: `Validators.required`, `Validators.minLength(3)`
  - `category`: `Validators.required`
  - `season`: `Validators.required`
  - `price`: `Validators.required`, `Validators.min(500)`
  - `top`, `bottom`, `footwear`: `Validators.required`
- Submit button disabled dynamically until all validation constraints are satisfied: `[disabled]="outfitForm.invalid"`.
- Displays contextual inline error messages (`.is-invalid`) when fields have been touched and are currently invalid.

## How to Run

1. Open your terminal in the `week-13-angular-advanced` folder:
   ```powershell
   cd week-13-angular-advanced
   ```
2. Install dependencies (one-time setup):
   ```powershell
   npm install
   ```
3. Launch the development server:
   ```powershell
   npm start
   # or: npx ng serve
   ```
4. Navigate to `http://localhost:4200/` in your browser.
5. Test routing by clicking between "Home", "Wardrobe Catalogue", and "+ Add Outfit".
6. Add a new custom outfit using the reactive form, submit it, and verify that it immediately appears in the catalogue!

## Expected Output
A complete single-page web app supporting dynamic routing without page reload, centralized data synchronization via services, and real-time form validation.
