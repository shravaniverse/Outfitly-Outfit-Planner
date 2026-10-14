import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="navbar">
      <div class="nav-container">
        <div class="brand">
          <span class="logo">👗</span>
          <h2>Outfitly</h2>
          <span class="badge-lab">Practical 12: Angular Basics</span>
        </div>
        <div class="stats">
          <span>Total Outfits: <strong>{{ totalOutfits }}</strong></span>
          <span class="fav-stat">❤️ Favorites: <strong>{{ favoriteCount }}</strong></span>
        </div>
      </div>
    </header>
  `,
  styles: [`
    .navbar {
      background-color: #0f172a;
      color: #ffffff;
      padding: 14px 24px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .nav-container {
      max-width: 1100px;
      margin: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 10px;
    }
    .brand {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .logo { font-size: 1.8rem; }
    h2 { margin: 0; font-size: 1.4rem; color: #38bdf8; }
    .badge-lab {
      background: #1e293b;
      color: #94a3b8;
      font-size: 0.75rem;
      padding: 3px 8px;
      border-radius: 4px;
      border: 1px solid #334155;
    }
    .stats {
      display: flex;
      gap: 18px;
      font-size: 0.9rem;
    }
    .fav-stat {
      color: #f43f5e;
    }
  `]
})
export class NavbarComponent {
  @Input() totalOutfits: number = 0;
  @Input() favoriteCount: number = 0;
}
