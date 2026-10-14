import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { OutfitService } from '../../services/outfit.service';
import { Outfit } from '../../models/outfit.model';

@Component({
  selector: 'app-catalogue',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="catalogue-wrapper">
      <div class="page-header">
        <div>
          <h2>👗 Wardrobe Catalogue</h2>
          <p>Managed centrally through <code>OutfitService</code></p>
        </div>
        <a routerLink="/add-outfit" class="btn-create">+ Add New Outfit</a>
      </div>

      <!-- Outfits Grid -->
      <div *ngIf="outfits.length > 0; else noOutfitsTpl" class="outfit-grid">
        <article *ngFor="let item of outfits" class="outfit-card">
          <div class="card-visual">
            <span class="icon">{{ item.icon }}</span>
            <span class="cat-badge">{{ item.category }}</span>
            <button class="btn-delete" (click)="onDelete(item.id)" title="Remove Outfit">✕</button>
          </div>

          <div class="card-content">
            <h3 class="title">{{ item.name }}</h3>
            <p class="season-badge">Season: {{ item.season }}</p>

            <div class="pieces-list">
              <div><strong>Top:</strong> {{ item.pieces.top }}</div>
              <div><strong>Bottom:</strong> {{ item.pieces.bottom }}</div>
              <div><strong>Footwear:</strong> {{ item.pieces.footwear }}</div>
            </div>

            <p *ngIf="item.notes" class="notes-text">
              <em>"{{ item.notes }}"</em>
            </p>

            <div class="card-footer">
              <span class="price">₹{{ item.price }}</span>
              <small class="date">Added: {{ item.dateAdded }}</small>
            </div>
          </div>
        </article>
      </div>

      <ng-template #noOutfitsTpl>
        <div class="empty-state">
          <h3>Your wardrobe is empty</h3>
          <p>Click below to create your first outfit using the reactive form.</p>
          <a routerLink="/add-outfit" class="btn-create">+ Create Outfit</a>
        </div>
      </ng-template>
    </div>
  `,
  styles: [`
    .catalogue-wrapper {
      max-width: 1100px;
      margin: 30px auto;
      padding: 0 20px;
    }
    .page-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 25px;
      flex-wrap: wrap;
      gap: 15px;
    }
    .page-header h2 { margin: 0 0 4px 0; color: #0f172a; }
    .page-header p { margin: 0; color: #64748b; font-size: 0.9rem; }
    .btn-create {
      background-color: #2563eb;
      color: #ffffff;
      padding: 9px 18px;
      border-radius: 6px;
      text-decoration: none;
      font-weight: 600;
      font-size: 0.9rem;
    }
    .btn-create:hover { background-color: #1d4ed8; }
    .outfit-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
      gap: 25px;
    }
    .outfit-card {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 2px 4px rgba(0,0,0,0.04);
      display: flex;
      flex-direction: column;
    }
    .card-visual {
      background: #f1f5f9;
      height: 140px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
    }
    .icon { font-size: 3.5rem; }
    .cat-badge {
      position: absolute;
      bottom: 8px;
      left: 10px;
      background: #0f172a;
      color: white;
      font-size: 0.72rem;
      padding: 2px 8px;
      border-radius: 4px;
      text-transform: uppercase;
      font-weight: 600;
    }
    .btn-delete {
      position: absolute;
      top: 10px;
      right: 10px;
      background: #fee2e2;
      color: #dc2626;
      border: none;
      border-radius: 50%;
      width: 28px;
      height: 28px;
      cursor: pointer;
      font-weight: bold;
    }
    .btn-delete:hover { background: #fecaca; }
    .card-content {
      padding: 18px;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
    }
    .title {
      font-size: 1.1rem;
      color: #0f172a;
      margin: 0 0 4px 0;
    }
    .season-badge {
      font-size: 0.82rem;
      color: #64748b;
      margin-bottom: 10px;
    }
    .pieces-list {
      background: #f8fafc;
      padding: 10px;
      border-radius: 6px;
      font-size: 0.82rem;
      margin-bottom: 10px;
      line-height: 1.5;
    }
    .notes-text {
      font-size: 0.82rem;
      color: #475569;
      margin-bottom: 12px;
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
    .date { color: #94a3b8; font-size: 0.75rem; }
    .empty-state {
      text-align: center;
      padding: 60px 20px;
      background: white;
      border-radius: 12px;
      border: 1px dashed #cbd5e1;
    }
  `]
})
export class CatalogueComponent implements OnInit {
  private outfitService = inject(OutfitService);
  outfits: Outfit[] = [];

  ngOnInit(): void {
    this.refreshList();
  }

  refreshList(): void {
    this.outfits = this.outfitService.getOutfits();
  }

  onDelete(id: number): void {
    if (confirm('Are you sure you want to remove this outfit from your wardrobe?')) {
      this.outfitService.deleteOutfit(id);
      this.refreshList();
    }
  }
}
