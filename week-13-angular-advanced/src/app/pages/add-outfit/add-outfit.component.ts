import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { OutfitService } from '../../services/outfit.service';

@Component({
  selector: 'app-add-outfit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  template: `
    <div class="form-container">
      <header class="header">
        <h2>📝 Create New Outfit Entry</h2>
        <p>Practical 13: Angular Reactive Forms with Strict Control Validation</p>
      </header>

      <form [formGroup]="outfitForm" (ngSubmit)="onSubmit()" class="reactive-form">

        <!-- Outfit Name -->
        <div class="form-group">
          <label for="name">Outfit Title *</label>
          <input 
            type="text" 
            id="name" 
            formControlName="name"
            class="form-control"
            [ngClass]="{'is-invalid': isInvalid('name')}"
            placeholder="e.g. Vintage Leather Jacket Ensemble"
          >
          <small *ngIf="isInvalid('name')" class="error-text">
            Title is required (minimum 3 characters).
          </small>
        </div>

        <!-- Category & Season Row -->
        <div class="form-row">
          <div class="form-group">
            <label for="category">Category *</label>
            <select 
              id="category" 
              formControlName="category" 
              class="form-control"
              [ngClass]="{'is-invalid': isInvalid('category')}"
            >
              <option value="">-- Choose Category --</option>
              <option value="Casual">Casual</option>
              <option value="Formal">Formal</option>
              <option value="Party">Party</option>
              <option value="Winter">Winter</option>
              <option value="Athleisure">Athleisure</option>
            </select>
            <small *ngIf="isInvalid('category')" class="error-text">
              Please select an outfit category.
            </small>
          </div>

          <div class="form-group">
            <label for="season">Season *</label>
            <select 
              id="season" 
              formControlName="season" 
              class="form-control"
              [ngClass]="{'is-invalid': isInvalid('season')}"
            >
              <option value="">-- Choose Season --</option>
              <option value="Spring">Spring</option>
              <option value="Summer">Summer</option>
              <option value="Autumn">Autumn</option>
              <option value="Winter">Winter</option>
              <option value="All-Season">All-Season</option>
            </select>
            <small *ngIf="isInvalid('season')" class="error-text">
              Season is required.
            </small>
          </div>
        </div>

        <!-- Price -->
        <div class="form-group">
          <label for="price">Estimated Price (₹) *</label>
          <input 
            type="number" 
            id="price" 
            formControlName="price"
            class="form-control"
            [ngClass]="{'is-invalid': isInvalid('price')}"
            placeholder="e.g. 2999"
          >
          <small *ngIf="isInvalid('price')" class="error-text">
            Price is required and must be at least ₹500.
          </small>
        </div>

        <!-- Pieces: Top, Bottom, Footwear -->
        <fieldset class="pieces-fieldset">
          <legend>Wardrobe Components</legend>

          <div class="form-group">
            <label for="top">Top Garment *</label>
            <input 
              type="text" 
              id="top" 
              formControlName="top" 
              class="form-control"
              [ngClass]="{'is-invalid': isInvalid('top')}"
              placeholder="e.g. Navy Blue Cotton Overshirt"
            >
            <small *ngIf="isInvalid('top')" class="error-text">Top garment is required.</small>
          </div>

          <div class="form-group">
            <label for="bottom">Bottom Garment *</label>
            <input 
              type="text" 
              id="bottom" 
              formControlName="bottom" 
              class="form-control"
              [ngClass]="{'is-invalid': isInvalid('bottom')}"
              placeholder="e.g. Charcoal Slim Chinos"
            >
            <small *ngIf="isInvalid('bottom')" class="error-text">Bottom garment is required.</small>
          </div>

          <div class="form-group">
            <label for="footwear">Footwear *</label>
            <input 
              type="text" 
              id="footwear" 
              formControlName="footwear" 
              class="form-control"
              [ngClass]="{'is-invalid': isInvalid('footwear')}"
              placeholder="e.g. White Leather Minimalist Sneakers"
            >
            <small *ngIf="isInvalid('footwear')" class="error-text">Footwear is required.</small>
          </div>
        </fieldset>

        <!-- Stylist Notes -->
        <div class="form-group">
          <label for="notes">Stylist Notes (Optional)</label>
          <textarea 
            id="notes" 
            formControlName="notes" 
            rows="3" 
            class="form-control"
            placeholder="Add color matching tips or accessory recommendations..."
          ></textarea>
        </div>

        <!-- Buttons -->
        <div class="btn-group">
          <button type="submit" [disabled]="outfitForm.invalid" class="btn-submit">
            ✓ Save Outfit to Service
          </button>
          <a routerLink="/catalogue" class="btn-cancel">Cancel</a>
        </div>

      </form>
    </div>
  `,
  styles: [`
    .form-container {
      max-width: 650px;
      margin: 30px auto;
      padding: 30px;
      background: #ffffff;
      border-radius: 12px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.05);
      border: 1px solid #e2e8f0;
    }
    .header { text-align: center; margin-bottom: 25px; }
    .header h2 { color: #0f172a; margin: 0 0 5px 0; font-size: 1.6rem; }
    .header p { color: #64748b; margin: 0; font-size: 0.9rem; }
    .form-group { margin-bottom: 16px; }
    .form-group label {
      display: block;
      font-size: 0.88rem;
      font-weight: 600;
      color: #334155;
      margin-bottom: 5px;
    }
    .form-control {
      width: 100%;
      padding: 9px 12px;
      border: 1.5px solid #cbd5e1;
      border-radius: 6px;
      font-size: 0.92rem;
      box-sizing: border-box;
      outline: none;
    }
    .form-control:focus { border-color: #2563eb; }
    .form-control.is-invalid { border-color: #ef4444; background: #fef2f2; }
    .error-text { color: #dc2626; font-size: 0.8rem; margin-top: 4px; display: block; }
    .form-row { display: flex; gap: 15px; }
    .form-row .form-group { flex: 1; }
    .pieces-fieldset {
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding: 16px;
      margin-bottom: 18px;
    }
    .pieces-fieldset legend {
      font-size: 0.9rem;
      font-weight: 700;
      color: #2563eb;
      padding: 0 8px;
    }
    .btn-group { display: flex; gap: 12px; margin-top: 20px; }
    .btn-submit {
      flex: 2;
      background-color: #2563eb;
      color: white;
      padding: 12px;
      border: none;
      border-radius: 6px;
      font-weight: 700;
      cursor: pointer;
    }
    .btn-submit:disabled { background-color: #94a3b8; cursor: not-allowed; }
    .btn-cancel {
      flex: 1;
      background-color: #f1f5f9;
      color: #475569;
      text-align: center;
      padding: 12px;
      border-radius: 6px;
      text-decoration: none;
      font-weight: 600;
    }
  `]
})
export class AddOutfitComponent {
  private outfitService = inject(OutfitService);
  private router = inject(Router);

  // Angular Reactive Form Group Definition
  outfitForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    category: new FormControl('', [Validators.required]),
    season: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required, Validators.min(500)]),
    top: new FormControl('', [Validators.required]),
    bottom: new FormControl('', [Validators.required]),
    footwear: new FormControl('', [Validators.required]),
    notes: new FormControl('')
  });

  isInvalid(controlName: string): boolean {
    const control = this.outfitForm.get(controlName);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  onSubmit(): void {
    if (this.outfitForm.valid) {
      const val = this.outfitForm.value;
      
      const categoryIcons: { [key: string]: string } = {
        Casual: '👕',
        Formal: '👔',
        Party: '🎉',
        Winter: '🧥',
        Athleisure: '🏃'
      };

      this.outfitService.addOutfit({
        name: val.name!,
        category: val.category as any,
        season: val.season as any,
        price: Number(val.price),
        icon: categoryIcons[val.category!] || '👗',
        pieces: {
          top: val.top!,
          bottom: val.bottom!,
          footwear: val.footwear!
        },
        notes: val.notes || ''
      });

      // Navigate automatically to Catalogue page
      this.router.navigate(['/catalogue']);
    }
  }
}
