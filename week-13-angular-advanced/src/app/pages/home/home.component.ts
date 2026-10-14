import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { OutfitService } from '../../services/outfit.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="home-container">
      <section class="hero-card">
        <h1>👗 Welcome to Outfitly</h1>
        <p class="hero-desc">
          Organize your college wardrobe, create smart outfit combinations, and manage daily fashion recommendations seamlessly.
        </p>

        <div class="stats-box">
          <div class="stat-item">
            <span class="stat-number">{{ outfitService.getOutfitCount() }}</span>
            <span class="stat-label">Total Outfits In Wardrobe</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">4</span>
            <span class="stat-label">Active Seasons</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">100%</span>
            <span class="stat-label">Client-Side State</span>
          </div>
        </div>

        <div class="cta-group">
          <a routerLink="/catalogue" class="btn-primary">Browse Wardrobe Catalogue</a>
          <a routerLink="/add-outfit" class="btn-secondary">+ Add New Outfit (Reactive Form)</a>
        </div>
      </section>

      <!-- Practical 13 Architectural Highlights -->
      <section class="highlights-grid">
        <div class="highlight-card">
          <h3>⚡ Angular Services</h3>
          <p>Outfits are managed through a centralized <code>OutfitService</code> using Dependency Injection across all views.</p>
        </div>
        <div class="highlight-card">
          <h3>🧭 Angular Routing</h3>
          <p>Navigating between <code>Home</code>, <code>Catalogue</code>, and <code>Add Outfit</code> without full page refreshes via <code>router-outlet</code>.</p>
        </div>
        <div class="highlight-card">
          <h3>📝 Reactive Forms</h3>
          <p>Clean form control validation using <code>FormGroup</code>, <code>FormControl</code>, and custom error validation feedback.</p>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .home-container {
      max-width: 1000px;
      margin: 30px auto;
      padding: 0 20px;
    }
    .hero-card {
      background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
      color: #ffffff;
      padding: 45px 30px;
      border-radius: 14px;
      text-align: center;
      box-shadow: 0 10px 20px rgba(0,0,0,0.1);
      margin-bottom: 30px;
    }
    .hero-card h1 {
      font-size: 2.2rem;
      color: #38bdf8;
      margin-bottom: 12px;
    }
    .hero-desc {
      font-size: 1.05rem;
      color: #cbd5e1;
      max-width: 650px;
      margin: 0 auto 30px auto;
      line-height: 1.6;
    }
    .stats-box {
      display: flex;
      justify-content: center;
      gap: 40px;
      margin-bottom: 30px;
      flex-wrap: wrap;
    }
    .stat-item {
      display: flex;
      flex-direction: column;
    }
    .stat-number {
      font-size: 2rem;
      font-weight: 800;
      color: #38bdf8;
    }
    .stat-label {
      font-size: 0.85rem;
      color: #94a3b8;
    }
    .cta-group {
      display: flex;
      justify-content: center;
      gap: 15px;
      flex-wrap: wrap;
    }
    .btn-primary {
      background-color: #2563eb;
      color: #ffffff;
      padding: 12px 24px;
      border-radius: 6px;
      text-decoration: none;
      font-weight: 700;
      transition: background 0.2s;
    }
    .btn-primary:hover { background-color: #1d4ed8; }
    .btn-secondary {
      background-color: #334155;
      color: #ffffff;
      padding: 12px 24px;
      border-radius: 6px;
      text-decoration: none;
      font-weight: 700;
      transition: background 0.2s;
    }
    .btn-secondary:hover { background-color: #475569; }
    .highlights-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 20px;
    }
    .highlight-card {
      background: #ffffff;
      padding: 22px;
      border-radius: 10px;
      border: 1px solid #e2e8f0;
      box-shadow: 0 2px 4px rgba(0,0,0,0.04);
    }
    .highlight-card h3 {
      color: #1e293b;
      font-size: 1.15rem;
      margin-bottom: 8px;
    }
    .highlight-card p {
      color: #64748b;
      font-size: 0.9rem;
      line-height: 1.5;
    }
  `]
})
export class HomeComponent {
  outfitService = inject(OutfitService);
}
