import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OutfitCardComponent } from './components/outfit-card/outfit-card.component';
import { Outfit } from './models/outfit.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent, OutfitCardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Outfitly - Practical 12: Components, Binding & Directives';

  // Two-way binding fields
  searchKeyword: string = '';
  selectedCategory: string = 'All';

  // State
  categories: string[] = ['All', 'Casual', 'Formal', 'Party', 'Winter', 'Athleisure'];

  // Outfit Data Model Array
  outfits: Outfit[] = [
    {
      id: 1,
      name: 'Smart Campus Denim Ensemble',
      category: 'Casual',
      season: 'Autumn',
      price: 2499,
      inStock: true,
      colorHex: '#3b82f6',
      icon: '👕',
      pieces: {
        top: 'Chambray Overshirt & White Tee',
        bottom: 'Charcoal Straight Chinos',
        footwear: 'Minimal Leather Sneakers'
      },
      isFavorite: false
    },
    {
      id: 2,
      name: 'Executive Viva Presentation Suit',
      category: 'Formal',
      season: 'All-Season',
      price: 6999,
      inStock: true,
      colorHex: '#1e293b',
      icon: '👔',
      pieces: {
        top: 'Tailored Navy Blazer & White Shirt',
        bottom: 'Wool Flat-Front Trousers',
        footwear: 'Brown Leather Oxfords'
      },
      isFavorite: true
    },
    {
      id: 3,
      name: 'Neon Glow Fest Statement',
      category: 'Party',
      season: 'Spring',
      price: 3899,
      inStock: true,
      colorHex: '#ec4899',
      icon: '🎉',
      pieces: {
        top: 'Printed Cuban Collar Bowling Shirt',
        bottom: 'Relaxed Jet Black Cargo Pants',
        footwear: 'Chunky High-Top Sneakers'
      },
      isFavorite: false
    },
    {
      id: 4,
      name: 'Alpine Wool Overcoat',
      category: 'Winter',
      season: 'Winter',
      price: 5499,
      inStock: false,
      colorHex: '#d97706',
      icon: '🧥',
      pieces: {
        top: 'Camel Double-Breasted Wool Trench',
        bottom: 'Selvedge Raw Denim Jeans',
        footwear: 'Suede Chelsea Boots'
      },
      isFavorite: false
    },
    {
      id: 5,
      name: 'Aero-Fit Gym & Running Set',
      category: 'Athleisure',
      season: 'Summer',
      price: 1999,
      inStock: true,
      colorHex: '#10b981',
      icon: '🏃',
      pieces: {
        top: 'Moisture Wicking Compression Tee',
        bottom: 'Breathable Running Shorts & Leggings',
        footwear: 'Air Cushion Running Shoes'
      },
      isFavorite: false
    }
  ];

  // Event handler for favorite toggle
  handleFavoriteToggle(outfitId: number): void {
    const target = this.outfits.find(o => o.id === outfitId);
    if (target) {
      target.isFavorite = !target.isFavorite;
    }
  }

  // Getters for computed stats
  get favoriteCount(): number {
    return this.outfits.filter(o => o.isFavorite).length;
  }

  get filteredOutfits(): Outfit[] {
    return this.outfits.filter(o => {
      const matchCat = this.selectedCategory === 'All' || o.category === this.selectedCategory;
      const matchSearch = o.name.toLowerCase().includes(this.searchKeyword.toLowerCase()) ||
                          o.pieces.top.toLowerCase().includes(this.searchKeyword.toLowerCase()) ||
                          o.pieces.bottom.toLowerCase().includes(this.searchKeyword.toLowerCase());
      return matchCat && matchSearch;
    });
  }

  resetFilters(): void {
    this.searchKeyword = '';
    this.selectedCategory = 'All';
  }
}
