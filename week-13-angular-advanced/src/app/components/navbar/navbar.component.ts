import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <header class="navbar">
      <div class="nav-container">
        <div class="brand" routerLink="/">
          <span class="logo">👗</span>
          <h2>Outfitly</h2>
          <span class="badge-lab">Practical 13: Forms, Routing &amp; Services</span>
        </div>
        <nav class="nav-links">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a>
          <a routerLink="/catalogue" routerLinkActive="active">Wardrobe Catalogue</a>
          <a routerLink="/add-outfit" routerLinkActive="active" class="btn-add">+ Add Outfit</a>
        </nav>
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
      gap: 15px;
    }
    .brand {
      display: flex;
      align-items: center;
      gap: 10px;
      cursor: pointer;
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
    .nav-links {
      display: flex;
      align-items: center;
      gap: 16px;
    }
    .nav-links a {
      color: #94a3b8;
      text-decoration: none;
      font-size: 0.95rem;
      font-weight: 600;
      transition: color 0.2s;
    }
    .nav-links a:hover, .nav-links a.active {
      color: #38bdf8;
    }
    .btn-add {
      background-color: #2563eb;
      color: #ffffff !important;
      padding: 7px 16px;
      border-radius: 6px;
      transition: background 0.2s !important;
    }
    .btn-add:hover {
      background-color: #1d4ed8 !important;
    }
  `]
})
export class NavbarComponent {}
