import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Outfit } from '../../models/outfit.model';

@Component({
  selector: 'app-outfit-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article 
      class="card" 
      [ngClass]="{'out-of-stock': !outfit.inStock, 'is-favorite': outfit.isFavorite}"
      [ngStyle]="{'border-top-color': outfit.colorHex}"
    >
      <!-- Visual with Property Binding & Event Binding -->
      <div class="card-visual" [style.background-color]="outfit.colorHex + '20'">
        <span class="icon">{{ outfit.icon }}</span>
        
        <!-- Event Binding (click) -->
        <button 
          class="btn-fav" 
          (click)="onToggleFavorite()"
          [title]="outfit.isFavorite ? 'Remove from favorites' : 'Add to favorites'"
        >
          {{ outfit.isFavorite ? '❤️' : '🤍' }}
        </button>

        <span class="category-pill" [ngClass]="'cat-' + outfit.category.toLowerCase()">
          {{ outfit.category }}
        </span>
      </div>

      <!-- Card Body with Interpolation -->
      <div class="card-body">
        <h3 class="title">{{ outfit.name }}</h3>
        <p class="season-text">Season: <strong>{{ outfit.season }}</strong></p>

        <div class="pieces-box">
          <div><strong>Top:</strong> {{ outfit.pieces.top }}</div>
          <div><strong>Bottom:</strong> {{ outfit.pieces.bottom }}</div>
          <div><strong>Footwear:</strong> {{ outfit.pieces.footwear }}</div>
        </div>

        <div class="card-footer">
          <span class="price">₹{{ outfit.price }}</span>

          <!-- Structural Directive: *ngIf -->
          <span *ngIf="outfit.inStock; else outStockTpl" class="stock-badge in-stock">
            ✓ Available
          </span>
          <ng-template #outStockTpl>
            <span class="stock-badge out-stock">✕ Out of Stock</span>
          </ng-template>
        </div>
      </div>
    </article>
  `,
  styles: [`
    .card {
      background: #ffffff;
      border-radius: 10px;
      border: 1px solid #e2e8f0;
      border-top: 4px solid #3b82f6;
      box-shadow: 0 2px 4px rgba(0,0,0,0.05);
      overflow: hidden;
      display: flex;
      flex-direction: column;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .card:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 16px rgba(0,0,0,0.08);
    }
    .card.out-of-stock {
      opacity: 0.75;
      filter: grayscale(20%);
    }
    .card-visual {
      height: 140px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
    }
    .icon { font-size: 3.5rem; }
    .btn-fav {
      position: absolute;
      top: 10px;
      right: 10px;
      background: white;
      border: none;
      border-radius: 50%;
      width: 32px;
      height: 32px;
      cursor: pointer;
      box-shadow: 0 2px 4px rgba(0,0,0,0.15);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .category-pill {
      position: absolute;
      bottom: 8px;
      left: 10px;
      font-size: 0.75rem;
      padding: 2px 8px;
      border-radius: 4px;
      background: #0f172a;
      color: white;
      text-transform: uppercase;
      font-weight: 600;
    }
    .card-body {
      padding: 16px;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
    }
    .title {
      font-size: 1.1rem;
      color: #0f172a;
      margin: 0 0 4px 0;
    }
    .season-text {
      font-size: 0.85rem;
      color: #64748b;
      margin-bottom: 10px;
    }
    .pieces-box {
      background: #f8fafc;
      padding: 10px;
      border-radius: 6px;
      font-size: 0.82rem;
      color: #334155;
      margin-bottom: 12px;
      line-height: 1.5;
    }
    .card-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: auto;
      padding-top: 10px;
      border-top: 1px solid #f1f5f9;
    }
    .price {
      font-size: 1.15rem;
      font-weight: 700;
      color: #059669;
    }
    .stock-badge {
      font-size: 0.75rem;
      font-weight: 600;
      padding: 3px 8px;
      border-radius: 4px;
    }
    .in-stock { background: #dcfce7; color: #15803d; }
    .out-stock { background: #fee2e2; color: #b91c1c; }
  `]
})
export class OutfitCardComponent {
  @Input() outfit!: Outfit;
  @Output() favoriteToggled = new EventEmitter<number>();

  onToggleFavorite(): void {
    this.favoriteToggled.emit(this.outfit.id);
  }
}
